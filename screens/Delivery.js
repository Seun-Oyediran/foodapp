import React from 'react'
import { Text, View ,TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import Button from '../Components/Button';
import { formatNos } from '../helper/Helper';
import { useState } from 'react';
import { useDataContext } from '../Context';





const Delivery = ({navigation}) => {
    const [method, setMethod] = useState('doorDelivery')
    const {totalPrice} = useDataContext()




    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#f5f5f8', justifyContent: 'space-between'}}>
        <View style={styles.header}>
           <TouchableOpacity style={styles.back} onPress={()=>{navigation.goBack()}}>
               <Ionicons name="chevron-back" size={24} color="black" />
           </TouchableOpacity>
           <Text style={styles.headerText}>Checkout</Text> 
       </View>


       <ScrollView contentContainerStyle={{flex:1, marginHorizontal: 45,}}>
           <Text style={styles.bigPay}>Delivery </Text>
           <View style={{flex: 1, justifyContent: 'center'}}>
               <Text style={styles.smallPay}>Address details</Text>
               <View style={{backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 20, paddingBottom: 10, paddingTop: 10}}> 
                       <View style={styles.whiteCon}>
                           <Text style={{marginHorizontal: 12, ...styles.detailsCard,}}>Marvis Kparobo</Text>
                       </View>
                   
                   <View style={{height: 1, backgroundColor: 'rgba(0,0,0,0.1)',}}></View>
                       <View style={styles.whiteCon}>
                           <Text style={{marginHorizontal: 12, ...styles.detailsCard}}>Km 5 refinery road oppsite republic road, effurun, delta state</Text>
                       </View>
                       <View style={{height: 1, backgroundColor: 'rgba(0,0,0,0.1)',}}></View>
                       <View style={styles.whiteCon}>
                           <Text style={{marginHorizontal: 12, ...styles.detailsCard}}>+234 9011039271</Text>
                       </View>
               </View>
           </View>
           <View style={{flex: 1, justifyContent: 'center'}}>
               <Text style={styles.smallPay}>Delivery Method</Text>
               <View style={{backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 20, paddingBottom: 10, paddingTop: 10}}> 
                   <TouchableOpacity onPress={()=>{setMethod('doorDelivery')}} >
                       <View style={styles.whiteCon}>
                           <View style={method == 'doorDelivery' ? styles.selected : styles.notSelected}><View style={method == 'doorDelivery' ? styles.innerS : styles.innerN}></View></View>
                           <Text style={{marginHorizontal: 12, ...styles.detailsCard}}>Door delivery</Text>
                       </View>
                   </TouchableOpacity>
                   
                   <View style={{height: 1, backgroundColor: 'rgba(0,0,0,0.1)',}}></View>
                   <TouchableOpacity onPress={()=>{setMethod('pick up')}} >
                       <View style={styles.whiteCon}>
                           <View style={method != 'doorDelivery' ? styles.selected : styles.notSelected}><View style={method != 'doorDelivery' ? styles.innerS : styles.innerN}></View></View> 
                           <Text style={{marginHorizontal: 12, ...styles.detailsCard}}>Pick up</Text>
                       </View>
                   </TouchableOpacity>
                   
               </View>
           </View>
       </ScrollView> 

       <View style={styles.btn}>
           <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               <Text style={styles.total}>Total</Text>
               <Text style={styles.total1}>{formatNos(totalPrice)}</Text>
           </View>
          <Button text='Complete order' onPress={()=>{navigation.navigate('delivery')}} />
       </View>
   </SafeAreaView>
    )
}

export default Delivery

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
    whiteCon: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginHorizontal: -12,
        paddingVertical: 20
    },
    selected:{
        width: 16,
        height: 16, 
        borderRadius: 8, 
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FA4A0C',
        marginHorizontal: 12,
    },
    notSelected:{
        width: 16,
        height: 16, 
        borderRadius: 8, 
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 12,
    }, 
    innerN:{
        width: 8,
        height: 8, 
        borderRadius: 5, 
    },
    innerS:{
        width: 8,
        height: 8, 
        borderRadius: 4,
        backgroundColor: '#FA4A0C',
    },
    detailsCard:{
        // textAlign: 'center',
        fontSize: 17,
        lineHeight: 20,
        fontFamily: 'SF-TEXT',
    },
    bigPay:{
        fontSize: 34,
        lineHeight: 41,
        fontFamily: 'SF-TEXT',
        fontWeight: '600',
    },
    smallPay:{
        fontSize: 17,
        lineHeight: 20,
        fontFamily: 'SF-TEXT',
        fontWeight: '600',
        marginVertical: 15,
    },
})