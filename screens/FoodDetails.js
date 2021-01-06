import React, { useEffect, useState, useRef } from 'react'
import { Text, View, Image, TouchableOpacity, Animated, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign,  Entypo , Ionicons} from '@expo/vector-icons';
import { useDataContext } from '../Context'
import  AppLoading  from 'expo-app-loading'
import Button from '../Components/Button';
import { formatNos } from '../helper/Helper';

const FoodDetails = ({navigation, route}) => {
    const [items, setItems] = useState(null)
    const {addToCart, foodList} = useDataContext()
    const {width} = Dimensions.get('window')

    useEffect(()=>{
        let { item } = route.params
        let allData = [...foodList]
        let oneItem = allData.find(one => one.id == item.id)
        setItems(prev => prev = {...oneItem})
    },[foodList])


    const scrollX = useRef(new Animated.Value(0)).current

    let dotPosition = Animated.divide(scrollX, width)
   

    if(!items) {
        return (<AppLoading/>)
    }else{
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#f6f6f9', justifyContent: 'space-between'}}>
                
                <View style={styles.header}>
                        <TouchableOpacity style={styles.btnL} onPress={()=>{navigation.goBack()}}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                        </TouchableOpacity  >
                        <TouchableOpacity style={styles.btnL}>
                            <AntDesign name="hearto" size={24} color="black" />
                        </TouchableOpacity>
                </View>
                <ScrollView style={{flex: 1, backgroundColor: '#f6f6f9'}} >
                    
                        <Animated.ScrollView 
                        // contentContainerStyle={styles.hScroll}
                        horizontal
                        snapToAlignment='center'
                        scrollEventThrottle={16}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false})}>
                            {items?.img.map((image,index)=>(
                                <View key={index.toString()} style={{ width, alignItems: 'center', justifyContent: 'center'}}>

                                    <Image style={{...styles.img, borderRadius: 82,}} resizeMode='contain' source={image}  />
                                 </View>
                            ))}
                        </Animated.ScrollView>
                        <Animated.View style={styles.dotCon}>
                            {items.img.map((item, index)=>{
                                let bgColor = dotPosition.interpolate({
                                    inputRange: [index-1, index, index + 1],
                                    outputRange: ['#c4c4c4', '#FA4A0C', '#c4c4c4'],
                                    extrapolate: 'clamp'
                                })

                             return (<Animated.View key={index.toString()} style={{...styles.dots, backgroundColor: bgColor}}></Animated.View>)
                            })}
                        </Animated.View>
                        <View style={styles.info}>
                            <Text style={styles.bigText}>{items.name}</Text>
                            <Text style={styles.priceText}>{formatNos(items.price)}</Text>
                        </View>
                        <View style={{...styles.info, marginVertical: 40, marginBottom: 20}}>
                            <Text style={styles.titleText}>Delivery Info</Text>
                            <Text style={styles.infoText}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</Text>
                            <Text style={{...styles.titleText, marginTop: 30}}>Return Policy</Text>
                            <Text style={styles.infoText}>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</Text>
                        </View>
                        
                </ScrollView>    
               <View style={{marginHorizontal: 50}}>
                    {!items.inCart && <Button text='Add to cart' onPress={()=>{addToCart(items.id)}} />}
                    {items.inCart && <Text style={styles.added}>Added To Cart</Text>}
                </View>
        </SafeAreaView>
    )
    }
}

export default FoodDetails

const styles = StyleSheet.create({
    header:{
        marginVertical: 5,
      marginHorizontal: 25,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    btnL:{
        padding: 15,
    },
    dotCon:{
        flexDirection: 'row',
        marginVertical: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dots:{
        height: 8,
        width: 8,
        borderRadius: 4,
        marginHorizontal: 6,
    },
    info:{
        marginHorizontal: 50,
    },
    bigText:{
        textAlign: 'center',
        lineHeight: 32,
        fontSize: 28,
        fontWeight: '600',
        fontFamily: 'SF-BOLD',
    },
    priceText:{
        textAlign: 'center',
        lineHeight: 26,
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'SF-BOLD',
        color: '#fa4a0c',
        paddingVertical: 10,
    },
    titleText:{
        lineHeight: 20,
        fontSize: 17,
        fontWeight: '600',
        fontFamily: 'SF-BOLD',
    },
    infoText:{
        lineHeight: 21,
        fontSize: 15,
        fontFamily: 'SF-TEXT',
        opacity: 0.5,
        fontWeight: 'normal',
        letterSpacing: 0.32,
    },
    added:{
        textAlign: 'center',
        lineHeight: 22,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'SF-TEXT',
        color: '#fa4a0c',
        marginBottom: 10,
    },
})