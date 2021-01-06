import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons,  MaterialIcons } from '@expo/vector-icons';
import Button from '../Components/Button';



const History = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#f5f5f8', justifyContent: 'space-between'}}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={()=>{navigation.goBack()}}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>History</Text> 
            </View>
            <View style={styles.content}>
                <MaterialIcons name="event-note" size={120} color="#c7c7c7" />
                <Text style={styles.bigText}>No history yet</Text>
                <Text style={styles.smallText}>Hit the orange button down below to Create an order</Text>
            </View>
            <View style={styles.btn}>
               <Button text='Start ordering' onPress={()=>{navigation.navigate('homePage')}} />
            </View>
        </SafeAreaView>
    )
}

export default History


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
    btn:{
        marginHorizontal: 45
    }
})