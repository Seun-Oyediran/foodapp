import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {  AntDesign } from '@expo/vector-icons';

const EmptyCartList = () => {
    return (
        <>
             <View style={{...styles.content, flex:1}}>
                <AntDesign name="shoppingcart" size={120} color="#c7c7c7" />

                <Text style={styles.bigText}>No item in your cart</Text>
                <Text style={styles.smallText}>Go back and add items to your cart</Text>
            </View>

        </>
    )
}

export default EmptyCartList

const styles = StyleSheet.create({
    content:{
        justifyContent: 'center',
        alignItems: 'center'
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