import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, FlatList, useWindowDimensions, Dimensions, Image, BackHandler, Modal, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons,   MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Button from '../Components/Button';
import { useDataContext } from '../Context'
import { useState } from 'react';
import { formatNos } from '../helper/Helper';
import EmptyCartList from '../Components/EmptyCartList';



const Cart = ({navigation}) => {
    const [data, setData] = useState([])
    const [modal, setModal] = useState(null)
    const { cartItems, removeFromCart, decQuantity, incQuantity, totalPrice } = useDataContext()

    useEffect(()=>{
        setData(prev => prev = [...cartItems])
    },[cartItems])



    const removeIten = () =>{
        removeFromCart(modal)
        setModal(null)
    }

    const decreaseItem =(item)=>{
        if(item.quantity == 1){
            setModal(item.id)
        }else{
            decQuantity(item.id)
        }
    }

    return (
        <>
         <Modal 
            transparent={true}
            animationType='slide'
            visible={modal ? true : false}
            >   
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'rgba(0,0,0,0.5)'}}>
                            <View style={styles.modal}>
                                <Text style={styles.modalHeader}>Confirm</Text>
                                <Text style={styles.modalText}>Are you sure you want to remove this item from your cart?</Text>
                                <View style={styles.modalConfirm}>
                                    <TouchableOpacity onPress={()=>{setModal(null)}}>
                                        <Text style={styles.moadalCancel}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={removeIten}>
                                        <View style={{...styles.moadalYes, paddingHorizontal: useWindowDimensions().width * 0.097}}><Text style={styles.textt}>Proceed</Text></View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    </View>
            </Modal>
        <SafeAreaView style={{flex:1, backgroundColor: '#f5f5f8', justifyContent: 'space-between'}}>
           
             <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={()=>{navigation.goBack()}}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Cart</Text> 
            </View>

               {data.length != 0 && <>
                <View style={styles.swipe}>
                    <MaterialCommunityIcons name="gesture-swipe-left" size={24} color="black" />
                    <Text style={styles.swipeText}>swipe on an item to delete</Text>
                </View>
                            <View style={{flex: 1}}>
                            <FlatList 
                            contentContainerStyle={{marginRight: 45,}}
                            data={data}
                            keyExtractor={(item)=> item.id.toString()}
                            renderItem={({item, index})=>(
                                <ScrollView contentContainerStyle={{flexDirection: 'row', paddingVertical: 14, paddingLeft: 45}} key={index.toString()}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                decelerationRate={0.5}
                                snapToInterval={(Dimensions.get('window').width - 90)}
                                directionalLockEnabled
                                >
                                    <View style={styles.firstBox}>
                                        <Image source={item.img[0]} style={{width: 70, height: 70, borderRadius: 35,}} /> 
                                        <View style={{alignSelf: 'center', flex: 1, paddingLeft: 17, justifyContent: 'space-between'}}>
                                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.bigText}>
                                                {item.name}
                                            </Text>
                                            <Text style={styles.orangeText}>{formatNos(item.price)}</Text>
                                        </View>  
                                        <View style={styles.inc}>
                                            <TouchableOpacity onPress={()=>{decreaseItem(item)}}>
                                                <Text style={{...styles.decrease, ...styles.incText}}>-</Text>
                                            </TouchableOpacity>
                                            <Text style={{...styles.incText}}>{item.quantity}</Text>
                                            <TouchableOpacity onPress={()=>{incQuantity(item.id)}}>
                                                <Text style={{...styles.increase, ...styles.incText}}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.buttons} >
                                        <TouchableOpacity style={styles.buttonIcon} onPress={()=>{}}>
                                            <AntDesign name="hearto" size={20} color="white" />
                                        </TouchableOpacity>
                                      
                                        <TouchableOpacity style={styles.buttonIcon} onPress={()=>{setModal(item.id)}}>
                                            <AntDesign name="delete" size={20} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                        )}
                        />
                            </View>
                        

               

            <View style={styles.btn}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
                    <Text style={styles.total}>Total</Text>
                    <Text style={styles.total1}>{formatNos(totalPrice)}</Text>
                </View>
               <Button text='Complete order' onPress={()=>{navigation.navigate('checkout')}} />
            </View>
            </>}
            {data.length == 0 && <EmptyCartList/> }
        </SafeAreaView>
        </>
    )
}

export default Cart

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        paddingTop: 20,
        marginHorizontal: 30,
        alignItems: 'center',
    },
    back:{
        padding: 15,
    },
    headerText:{
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 21,
        fontWeight: '600',
        fontFamily: 'SF-BOLD',
        marginRight: 39,
    },
    btn:{
        marginHorizontal: 45, 
    },
    swipe:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingBottom: 20,
    },
    swipeText:{
        fontSize: 11,
        lineHeight: 12,
        fontFamily: 'SF-TEXT',
    },
    firstBox:{
        width: (Dimensions.get('window').width - 90),
        flexDirection: 'row',
        padding: 17,
        backgroundColor: 'white',
        borderRadius: 20,
        position: 'relative',
    },
    bigText:{
        textAlign: 'center',
        fontSize: 17,
        lineHeight: 20,
        fontWeight: '600',
        fontFamily: 'SF-BOLD',
        alignSelf: 'flex-start',
    },
    orangeText:{
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '600',
        fontFamily: 'SF-BOLD',
        color: '#fa4a0c',
        marginTop: 10,
    },
    buttons:{
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: -15,
    },
    buttonIcon:{
        marginHorizontal: 15,
        backgroundColor: '#DF2C2C',
        // padding: 16,
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inc:{
        position: 'absolute',
        bottom: 5,
        right: 10,
        backgroundColor: '#FA4A0C',
        flexDirection: 'row',
        // maxWidth: 60,
        paddingHorizontal: 3,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    incText:{
        fontSize: 13,
        lineHeight: 16,
        fontWeight: '600',
        color: 'white',
        padding: 6,
        textAlign: 'center',
        fontFamily: 'SF-BOLD',
    },
    total:{
        fontSize:17,
        fontFamily: 'SF-BOLD',
        lineHeight: 20,
    },
    total1:{
        fontSize:22,
        fontFamily: 'SF-BOLD',
        lineHeight: 26,
        fontWeight: '600',
    },
    modal:{
        backgroundColor: 'white',
        marginHorizontal: 45,
        // paddingVertical: 17,
        // paddingHorizontal: 17,
        borderRadius: 30,
        overflow: 'hidden',
    },
    modalHeader:{
        backgroundColor: '#EDEDED',
        paddingVertical: 17,
        paddingHorizontal: 17,
        fontFamily: 'POPPINS',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 30,
    },
    modalText:{
        paddingVertical: 17,
        paddingHorizontal: 17,
        fontSize: 17,
        lineHeight: 25,
        textAlign: 'center',
        fontFamily: 'POPPINS',
    },
    modalConfirm:{
        flexDirection: 'row',
        paddingVertical: 17,
        paddingHorizontal: 17,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    moadalCancel:{
        fontSize: 17,
        lineHeight: 25,
        fontWeight: '600',
        opacity: 0.5,
        // flex: 1,
        padding:10,
        fontFamily: 'POPPINS',
    },
    moadalYes:{
        paddingHorizontal: 40,
        backgroundColor: '#fa4a0c',
        paddingVertical: 17,
        borderRadius: 30,
    },
    textt:{
        color: 'white',
        fontSize: 17,
        lineHeight: 25,
        fontWeight: '600',
        fontFamily: 'POPPINS',
    
    },
})