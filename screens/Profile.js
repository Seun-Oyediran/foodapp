import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import profile from '../assets/profile.png'


const things = [
    'Orders', 'Pending reviews', 'Faq', 'Help'
]

const Profile = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F8', justifyContent: 'space-between'}}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={()=>{navigation.goBack()}}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={styles.bigText}>My profile</Text> 
            <ScrollView 
                contentContainerStyle={{ marginHorizontal: 45}}
            >
                <Text style={styles.smallPay}>Personal details</Text>
                <View style={{flexDirection: 'row',backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 20, paddingBottom: 10, paddingTop: 10,}}>
                    <View style={{ zIndex:10 }}>
                        <Image source={profile} style={{borderRadius: 5,}} resizeMode={'contain'} />
                    </View> 
                    
                    <View style={{backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 5, flex:1}}> 

                       <View style={styles.whiteCon}>
                           <Text style={{marginHorizontal: 12, ...styles.detailsCard, opacity: 1, fontWeight: '600', fontSize: 21, lineHeight: 21}}>Marvis Ighedosa</Text>
                        </View>
                        <View style={styles.whiteCon}>
                           <Text style={{marginHorizontal: 12, ...styles.detailsCard,}}>Dosamarvis@gmail.com</Text>
                        </View>
                        <View style={{height: 1, backgroundColor: 'rgba(0,0,0,0.1)',marginLeft: 10}}></View>
                       <View style={styles.whiteCon}>
                           <Text style={{marginHorizontal: 12, ...styles.detailsCard}}>+234 9011039271</Text>
                       </View>
                       <View style={{height: 1, backgroundColor: 'rgba(0,0,0,0.1)', marginLeft: 10}}></View>
                       <View style={styles.whiteCon}>
                           <Text style={{marginHorizontal: 12, ...styles.detailsCard}}>No 15 uti street off ovie palace road effurun delta state</Text>
                       </View>
                    </View>
                </View>

                <View style={{marginVertical: 30, marginBottom: 20}}>
                    {things.map((item, index)=>(
                        <TouchableOpacity key={index} onPress={()=>{}}>
                            <View style={{padding: 20, backgroundColor: 'white', borderRadius: 20, marginBottom: 30, flexDirection: 'row', justifyContent: 'space-between'}} >
                                <Text style={styles.itemText}>{item}</Text>
                                <Ionicons name="chevron-forward" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

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
    bigText:{
        fontWeight: '600',
        fontSize: 34,
        lineHeight: 41,
        fontFamily: 'SF-TEXT',
        marginHorizontal: 45,
    },
    smallPay:{
        fontSize: 18,
        lineHeight: 21,
        fontFamily: 'SF-TEXT',
        fontWeight: '600',
        marginVertical: 15,
    },
    detailsCard:{
        // textAlign: 'center',
        fontSize: 15,
        lineHeight: 18,
        fontFamily: 'SF-TEXT',
        flexWrap: 'wrap',
        opacity: 0.5,
    },
    whiteCon: {
        flexDirection: 'row', 
        // alignItems: 'center', 
        // marginHorizontal: -12,
        paddingVertical: 6,
        // flex: 1,
    },
    itemText:{
        fontSize: 18,
        lineHeight: 21,
        fontFamily: 'SF-TEXT',
        opacity: 1,
    },
})