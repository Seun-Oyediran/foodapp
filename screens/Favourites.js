import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons} from '@expo/vector-icons';



const Favourites = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
             <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={()=>{navigation.goBack()}}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Favourites</Text> 
            </View>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>
                    Nothing to display 
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Favourites

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
})