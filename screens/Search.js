import React, { useEffect, useState } from 'react'
import { Text, TextInput, View , StyleSheet, TouchableOpacity, Keyboard, Image, ScrollView, useWindowDimensions} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons} from '@expo/vector-icons';
import { useDataContext } from '../Context'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { formatNos } from '../helper/Helper';

const Search = ({navigation}) => {
    const { foodList } = useDataContext()
    const [data, setData] = useState([])
    const [filtered, setFiltered] = useState([])
    useEffect(()=>{
        setData(prev=> prev = [...foodList])
        setFiltered(prev=> prev = [...foodList])
    },[foodList])

    const filterItem=(text)=>{
        let allData = [...data]
        allData = allData.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1)
        setFiltered(prev=> prev = [...allData])
    }
    let deviceWidth = useWindowDimensions().width

    return (
        // <TouchableWithoutFeedback style={{flex:1, backgroundColor: 'blue'}} onPress={Keyboard.dismiss()}>
        <SafeAreaView style={{flex:1, backgroundColor: '#eeeeee'}}>
            <View style={styles.searchView}>
                <TouchableOpacity style={styles.back} onPress={()=>{navigation.goBack()}}>
                        <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity  >
                <TextInput autoFocus onChangeText={filterItem} style={styles.input} placeholder='Search' />
            </View>
            {filtered.length != 0 && <View style={styles.result}>
                <Text style={styles.found}>Found {filtered.length} {filtered.length == 1 ? 'result' : 'results'}</Text>          
                <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={{flex:1, flexDirection: 'row', width: deviceWidth, justifyContent:'space-between', paddingBottom:75,}}>
                    <View style={{ marginTop: 45, paddingLeft: 10, flex: 1}}>
                        {filtered.filter((item, index)=> {return (index % 2 == 0)}).map((item, index)=>(
                            <TouchableOpacity onPress={()=>{navigation.navigate('details',{item})}} key={index.toString()}  >
                                <View key={index.toString()} style={styles.itemsBox}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Image style={styles.itemImg} resizeMode='contain' source={item.img[0]}  />
                                    </View>
                                    
                                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                                        <Text numberOfLines={2} style={styles.firstText}>{item.name}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={styles.secondText}>{formatNos(item.price)}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={{ marginTop: 45, paddingRight: 10, top: 60, flex:1}}>
                        {filtered.filter((item, index)=> {return (index % 2 != 0)}).map((item, index)=>(
                            <TouchableOpacity onPress={()=>{navigation.navigate('details',{item})}} key={index.toString()}  >
                                <View style={{...styles.itemsBox}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Image style={styles.itemImg} source={item.img[0]} resizeMode='contain'  />
                                    </View>
                                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                                        <Text numberOfLines={2} style={styles.firstText}>{item.name}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={styles.secondText}>{formatNos(item.price)}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity> 
                        ))}
                    </View>
                </View>
                </ScrollView>
            </View>}
            {filtered.length == 0 && 
                <View style={styles.content}>
               <Ionicons name="search" size={120} color="#c7c7c7" />
                <Text style={styles.bigText}>Item not found</Text>
                <Text style={styles.smallText}>Try searching the item with a different keyword.</Text>
            </View>
            }
        </SafeAreaView>
        // </TouchableWithoutFeedback>
    )
}

export default Search


const styles = StyleSheet.create({
    searchView:{
        marginHorizontal: 30,
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
        paddingVertical: 30,
        overflow: 'hidden',
    },
    back:{
        paddingHorizontal: 10,
        paddingBottom: 6,
    },
    input:{
        borderWidth: 0,
        // paddingVertical: 4,
        marginTop: 4,
        textAlignVertical: 'center',
        marginRight: 40,
        paddingHorizontal: 10,
        width: '100%',
        paddingRight: 50,
        fontFamily: 'SF-BOLD',
        fontSize: 17,
        lineHeight: 20,
        fontWeight: '600',
    },
    result:{
        backgroundColor: '#f9f9f9',
        flex: 1,
        borderRadius: 30,
        paddingVertical: 35,
        // paddingHorizontal: 17,
        // marginHorizontal: -17,
    },
    found:{
        lineHeight: 33,
        fontSize: 28,
        fontFamily: 'SF-BOLD',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    itemsBox:{
        backgroundColor: 'white',
        borderRadius: 30,
        marginTop: 45,
        paddingBottom: 30,
        paddingTop: 0,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        marginHorizontal: 7,
        flex: 1,
    },
    itemImg:{
        top: -30,
        flex: 1,
        alignSelf: 'center',
        // borderRadius: 82,
    },
    firstText:{
        flex: 1,
        fontFamily: 'SF-TEXT',
        fontSize: 22,
        lineHeight: 22,
        fontWeight: '600',
        textAlign: 'center',           
        flexWrap: 'wrap',
        paddingHorizontal: 10,
    },
    secondText:{
        flex: 1,
        fontFamily: 'SF-TEXT',
        fontSize: 17,
        lineHeight: 20,
        fontWeight: 'bold',
        color: '#fa4a0c',
        paddingVertical: 10,
        textAlign: 'center',           
        flexWrap: 'wrap',
        marginTop: 18,
    },
    content:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    bigText:{
        fontSize: 28,
        lineHeight: 33,
        fontWeight: '600',
        fontFamily: 'SF-TEXT',
    },
    smallText:{
        fontSize: 17,
        lineHeight: 20,
        fontFamily: 'SF-TEXT',
        maxWidth: 220,
        textAlign: 'center',
        fontWeight: 'normal',
        opacity: 0.57,
        marginTop: 10,
    },
})