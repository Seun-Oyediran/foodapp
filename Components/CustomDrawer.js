import React from 'react'
import { ScrollView, Text, TouchableOpacity, View , StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome5, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import { color } from 'react-native-reanimated';
import { useDataContext } from '../Context'


const CustomDrawer = ({navigation}) => {

    const {setAuth} = useDataContext()


    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView contentContainerStyle={{flex:1, backgroundColor: '#FA4A0C', paddingLeft: 25, justifyContent: 'space-around'}}>
                <View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('profile')}}>
                        <View style={styles.listView}>
                            <FontAwesome5 name="user-circle" size={24} color="white" />
                            <Text style={styles.listText}>Profile</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{}}>
                        <View style={styles.listView}>
                            <MaterialCommunityIcons name="cart-arrow-down" size={24} color="white" />
                            <Text style={styles.listText}>orders</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('offer')}}>
                        <View style={styles.listView}>
                            <AntDesign name="tago" size={24} color="white" />
                            <Text style={styles.listText}>offer and promo</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{}}>
                        <View style={styles.listView}>
                            <MaterialCommunityIcons name="file-document-outline" size={24} color="white" />
                            <Text style={styles.listText}>Privacy policy</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{}}>
                        <View style={styles.listView}>
                            <MaterialCommunityIcons name="shield-half-full" size={24} color="white" />
                            <Text style={styles.listText}>Security</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>{setAuth(null)}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{...styles.listText, marginLeft: 0, textAlign: 'left', paddingRight: 10}}>Sign-out</Text>
                        <AntDesign name="arrowright" size={24} color="#ffffff" />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CustomDrawer


const styles = StyleSheet.create({
    listView:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 13,
    },
    listText:{
        fontFamily: 'POPPINS',
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 25,
        textAlign: 'center',
        color: 'white',
        marginLeft: 12,
    },
})