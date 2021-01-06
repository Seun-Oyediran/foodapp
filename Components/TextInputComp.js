import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'



const TextInputComp = ({inputText, password, keyboard, setValue}) => {
    return (
        <>
            <View style={styles.textBox}>
                <Text style={styles.placeholder}>
                    {inputText}
                </Text>
                <TextInput  keyboardType={keyboard ? keyboard : 'default' } style={styles.input} secureTextEntry={password} onChangeText={(text)=>{setValue(text)}} />

            </View>
        </>
    )
}

export default TextInputComp

const styles = StyleSheet.create({
   
    textBox:{
        marginBottom: 46
    },
    input:{
        width: '100%',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        paddingVertical: 12,
        fontSize: 17,
        fontWeight: '600',
        fontFamily: 'SF-TEXT',
        lineHeight: 20,
    },
    placeholder:{
        opacity: 0.4,
        color: 'black',
        fontFamily: 'SF-TEXT',
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 18,
    }
})