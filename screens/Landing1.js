import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, useWindowDimensions, Dimensions} from 'react-native'
import logo from '../assets/logo.png'
import Landing from '../assets/Landing.png'
import boyFace from '../assets/ToyFaces_Tansparent_BG_29.png'
import { LinearGradient } from 'expo-linear-gradient';
import { useDataContext } from '../Context'
import { StatusBar } from 'expo-status-bar'


const Landing1 = () => {
    const {setProgress} = useDataContext()




    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#FF4B3A',}} >
            <View style={styles.container}>
            <View style={styles.firstView}>
                {/* <View style={styles.circle}>
                    <Image source={logo} />
                  
                </View> */}
                <Text style={styles.bigText}>
                        Food For Everyone
                </Text>
            </View>
            <View style={styles.secondView}>
                <View style={styles.imgView}>
                    <Image resizeMode='contain' style={{ flex: 1}} source={Landing}/> 
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=>{setProgress(1)}}>
                    
                    <Text style={styles.btnText}>Get tarted</Text>
                </TouchableOpacity>
            </View>
            </View>
            <StatusBar style='light' />
        </SafeAreaView>
    )
}

export default Landing1

let curve = 73/2

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FF4B3A',
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
    },
    firstView:{
        padding: 30,
        paddingVertical: 10,
    },
    circle:{
        width: 73,
        height: 73,
        borderRadius: curve,
        backgroundColor: 'white' ,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 22,
    },
    bigText:{
        fontFamily: 'SF-BOLD',
        color: '#ffffff',
        fontSize: 65,
        fontWeight: '800',
        letterSpacing: -1,
        lineHeight: 56,
        paddingVertical: 15,
    },
    secondView:{
        flex:1,
        paddingVertical: 25,
        justifyContent: 'flex-end',
    },
    btn:{
        backgroundColor: 'white',
        borderRadius: 30,
        marginHorizontal: 50,
        paddingVertical: 20,
        zIndex: 10
    },
    btnText:{
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 20,
        color: '#ff460a',
        fontFamily: 'SF-TEXT',
    },
    imgView:{
        flexDirection: 'row',
        alignItems: 'baseline',
        width: Dimensions.get('window').width,
        // marginHorizontal: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        // paddingHorizontal: 10,
    },
})