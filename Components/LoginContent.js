import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Alert } from 'react-native'
import Button from './Button'
import TextInputComp from './TextInputComp'
import { useDataContext } from '../Context'

const LoginContent = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    return (
        <View style={styles.container}>
           <TextInputComp setValue={setEmail} keyboard='email-address'  inputText='Email address'  />
           <TextInputComp  inputText='Password' setValue={setPassword} password={true}  />
        </View>
    )
}

export default LoginContent


const styles = StyleSheet.create({
    container:{
        marginTop: 41,
        paddingHorizontal: 50,
    },
    orangeText:{
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 20,
        fontFamily: 'SF-TEXT',
        color: '#fa4a0c'
    }
})