import React from 'react'
import { TouchableOpacity, View , StyleSheet, Text} from 'react-native'

const Button = ({onPress, text}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button


const styles= StyleSheet.create({
    btn:{
        backgroundColor: '#fa4a0c',
        marginVertical: 20,
        borderRadius: 30,
        paddingVertical: 20,
    },
    text:{
        textAlign: 'center',
        color: 'white',
        lineHeight: 20,
        fontSize: 17,
        fontWeight: '600',
        fontFamily: 'SF-TEXT',
    }
})