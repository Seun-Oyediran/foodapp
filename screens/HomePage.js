import React, { useState, useEffect, useContext } from 'react'
import { Button, ScrollView, View , Text, TouchableOpacity, TextInput, StyleSheet, Image, FlatList, Dimensions, Animated, useWindowDimensions} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign,  Entypo , Ionicons} from '@expo/vector-icons';
import vector from '../assets/Vector.png'

import {  DataContext } from '../Context'
import { formatNos } from '../helper/Helper';
import numbro from 'numbro';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';



const options = [
    {name: 'All'},
    {name: 'Food'},
    {name: 'Drinks'},
    {name: 'Snacks'},
    {name: 'Sauce'},
]




const HomePage = ({ navigation }) => {
    const [select, setSelect] = useState('All')
    const [rawData, setRawData] = useState([])
    const [data, setData] = useState([])

    const { foodList } = useContext(DataContext)


    useEffect(()=>{
        let newItem = foodList.map(item=>{
            return {...item }
        })
        setRawData(prev=> prev = [...newItem])
        setData(prev=> prev = [...newItem])
        
    },[foodList])

    useEffect(()=>{
        // filterList()
        if(data.length != 0){
            filterList()
        }
    },[select])

    // useEffect(()=>{
    //     if(data.length != 0){
    //         filterList()
    //     }
    // },[data])

 

    const filterList = ()=>{
        let newData = [...rawData]
        if(select != 'All'){
          newData = newData.filter(item => item.type == select)
        }
        setData(prev=> prev = [...newData])
    }


    return (
       <SafeAreaView style={useIsDrawerOpen() ? styles.afterDraw : styles.beforeDraw}>
           {useIsDrawerOpen() && <StatusBar style='light' />}
           <View  style={useIsDrawerOpen() ? {...styles.navigationSize, transform:[{scale: 0.7}, {translateX: -(Dimensions.get('window').width / 5)}],} : styles.normalSize}>
           { useIsDrawerOpen() && <View style={styles.shadow}></View> }
           <View style={{flex:1, zIndex: 2, borderRadius: 30, overflow: 'hidden'}}>
            
            <View style={styles.header}>
               {/* <Entypo name="menu" size={24} color="black" /> */}
                    <TouchableOpacity style={styles.btnL} onPress={()=>{navigation.openDrawer()}}>
                        <Image source={vector} />
                    </TouchableOpacity>
                  
                    <TouchableOpacity style={styles.btnL} onPress={()=>{navigation.navigate('cart')}}>
                        <AntDesign name="shoppingcart" size={24} color="rgba(0,0,0,0.3)" />
                    </TouchableOpacity>
               </View>
           <ScrollView style={{flex: 1, backgroundColor: '#f2f2f2',}}>
              
               <View>
                    <Text style={styles.text}>Delicious</Text>
                    <Text style={styles.text}>food for you</Text>
               </View>
               <View style={styles.rel}>
                   <TouchableOpacity  onPress={()=>{navigation.navigate('search')}}>
                       <View style={styles.input}>
                            <Ionicons style={styles.pos} name="search" size={30} color="black" />
                            <Text style={styles.inputText}>Search</Text>
                       </View>
                   </TouchableOpacity>
               </View>
                <Animated.ScrollView style={styles.list}
                indicatorStyle='white'
                showsHorizontalScrollIndicator={false}
                horizontal>
                    {options.map((item,index)=>(
                        <TouchableOpacity  key={index} onPress={()=>{setSelect(item.name)}}>
                            <View style={select == item.name ? styles.listTextSelect : styles.listText}>
                                <Text style={select == item.name ? styles.listFont1 : styles.listFont2}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                    
                </Animated.ScrollView>
               
                    <FlatList 
                     contentContainerStyle={styles.itemCon}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={data}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item,index})=>(
                        <View style={styles.itemBox} >
                            <TouchableOpacity onPress={()=>{navigation.navigate('details', {item})}}>
                                <View style={styles.itemImgCover}>
                                    <Image style={styles.itemImage} source={item.img[0]} resizeMode='contain' />
                                    <View style={styles.itemTextCon}>
                                        <Text numberOfLines={2} style={styles.itemText1}>{item.name}</Text>
                                        <Text style={styles.itemText2}>{formatNos(item.price)}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                    />
                
           </ScrollView>
           </View>
           </View>
       </SafeAreaView>
    )
}

export default HomePage


const styles = StyleSheet.create({
  header:{
      marginTop: 5,
      marginBottom: 10,
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btnL:{
    padding: 15,
  },
  text:{
      fontFamily: 'SF-BOLD',
      fontSize: 34,
      lineHeight: 41,
      marginHorizontal: 40,
  },
  rel:{
    position: 'relative'
  },
  input:{
      borderRadius: 30,
      height: 60,
      backgroundColor: '#efeeee',
      marginHorizontal: 40,
      marginTop: 28,
      flexDirection: 'row',
      alignItems: 'center'
  },
  inputText:{
    fontFamily: 'SF-TEXT',
    fontSize: 17,
    lineHeight: 20,
    paddingLeft: 16,
    opacity: 0.5,
  },
  pos:{
      marginLeft: 35,
  },
  list:{
      marginTop: 40,
      marginLeft: 50,
  },
  listText:{
      fontSize: 17,
      lineHeight: 20,
      fontFamily: 'SF-TEXT',
      color: '#9A9A9D',
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 5,
  },
  listTextSelect:{
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: '#FA4A0C',
    borderBottomWidth: 3,
    marginBottom: 5,
 },
 listFont1:{
    fontSize: 17,
    lineHeight: 20,
    fontFamily: 'SF-TEXT',
    color: '#FA4A0C',
 },
 listFont2:{
    fontSize: 17,
    lineHeight: 20,
    fontFamily: 'SF-TEXT',
    color: '#9a9a9d',
 },
 itemCon:{
    marginLeft: 40,
    paddingLeft: 10,
    marginTop: 50,
    paddingBottom: 20,
 },
 itemBox:{
     width:220,
     height: 321,
     overflow: 'hidden',
     justifyContent: 'flex-end',
     marginRight: 34,
 },
 itemImgCover:{
     width: 220,
     height: 270,
     backgroundColor: 'white',
     borderRadius: 30,
     position: 'relative',
     justifyContent: 'flex-end',
     alignItems: 'center'
 },
 itemImage:{
     position: 'absolute',
     left: '50%',
     transform:[{translateX: -(164/2)}],
     top: -50,
     borderRadius: 82,
 },
 itemTextCon:{
     justifyContent: 'space-between',
     alignItems:'center',
     marginBottom: 39,
 },
 itemText1:{
     fontWeight: '600',
     fontFamily: 'SF-TEXT',
     fontSize: 22,
     lineHeight: 22,
     marginHorizontal: 50,
     textAlign: 'center'
 },
 itemText2:{
    fontWeight: 'bold',
    fontFamily: 'SF-TEXT',
    fontSize: 17,
    lineHeight: 20,
    marginHorizontal: 24,
    textAlign: 'center',
    marginTop: 15,
    color: "#FA4A0C",
    paddingVertical: 10,
},
normalSize:{
    flex: 1, 
    backgroundColor: '#f2f2f2', 
},
navigationSize:{
    flex: 1, 
    backgroundColor: '#f2f2f2', 
    borderRadius: 30,
    // overflow: 'hidden',
    position: 'relative',
    zIndex: 2,
    left: 30,
},
shadow:{
    position: 'absolute',
    // bottom: -18,
    bottom: -30,
    backgroundColor: '#f2f2f2',
    opacity: 0.3,
    width: '100%',
    height: '100%',
    borderRadius: 30,
    left: -30,
    zIndex: 0,
},
beforeDraw:{
    backgroundColor: '#f2f2f2',
    flex: 1,
},
afterDraw:{
    backgroundColor: '#fa4a0c',
    flex: 1,
},
})