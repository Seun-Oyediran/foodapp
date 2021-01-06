import React from 'react'
import { View , StyleSheet, Image, Text, ScrollView, TouchableOpacity, Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDataContext } from '../Context'
import loginLogo from '../assets/loginLogo.png'
import LoginContent from '../Components/LoginContent'
import Button from '../Components/Button'


const Login = ({navigation}) => {
    
    const { setAuth } = useDataContext()

    const pressed = ()=>{
        Alert.alert('Login', 'Login Successful', [
            {
                text: 'Continue',
                onPress: ()=>{setAuth('qw')}
            },
         
        ])
    }
   


    return (

        <SafeAreaView style={{flex: 1, backgroundColor: 'white', justifyContent: 'space-between'}}>
            <ScrollView style={{flex: 1, backgroundColor: '#f2f2f2',}}>
            <View style={styles.firstView}>
                
                <Image source={loginLogo} style={styles.image} />
                <View style={styles.textBox}>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={{...styles.text,  borderBottomWidth: 3,  borderBottomColor: '#fa4a0c',}}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={styles.text}>
                            Sign-up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <LoginContent navigation={navigation} />
            </View>
            </ScrollView>
           
            <View style={{paddingHorizontal: 50, paddingTop: 10, backgroundColor: '#f2f2f2'}}>
                <TouchableOpacity onPress={()=>{}}>
                    <Text style={styles.orangeText}>Forgot passcode?</Text>
                </TouchableOpacity>
                <Button text='Login' onPress={pressed}/>
            </View>
        </SafeAreaView>
    )
}

export default Login


const styles = StyleSheet.create({
    firstView:{
        minHeight: 370,
        width: '100%',
        backgroundColor: '#ffffff',
        // borderRadius: 30,
        position: 'relative',
        borderBottomEndRadius: 30,
    },
    image:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{translateX: -(132/2)}, {translateY: -(163/2)}]
    },
    textBox:{
        marginTop: 'auto',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    text:{
        fontFamily: 'SF-TEXT',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21,
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    orangeText:{
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 20,
        fontFamily: 'SF-TEXT',
        color: '#fa4a0c'
    }
})
