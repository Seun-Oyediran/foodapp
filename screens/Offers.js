import React from 'react'
import { View , Text, TouchableOpacity, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';


const Offers = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#f5f5f8', justifyContent: 'space-between'}}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.back} onPress={()=>{navigation.goBack()}}>
                <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>offer and promo</Text> 
        </View>
        <View style={styles.content}>
            <Text style={styles.bigText}>ohh snap!  No offers yet</Text>
            <Text style={styles.smallText}>Bella dose’t have any offers yet please check again.</Text>
        </View>
    </SafeAreaView>
    )
}

export default Offers

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
        alignItems: 'center',
        flex: 1,
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