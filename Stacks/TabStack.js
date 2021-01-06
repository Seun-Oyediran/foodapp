import React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from '../screens/HomePage'
import Profile from '../screens/Profile'
import History from '../screens/History'
import { Entypo, AntDesign , Feather, MaterialCommunityIcons} from '@expo/vector-icons'; 
import Favourites from '../screens/Favourites'
import { useIsDrawerOpen } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator()


const TabStack = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            
            style:{
                backgroundColor: '#f2f2f2',
                 elevation: 0,   // for Android
            shadowOffset: {
                width: 0, height: 0 // for iOS
            },
            borderWidth: 0,
            
            }
        }}
        >
            <Tab.Screen  name='homePage' component={HomePage} 
            options={{
                tabBarVisible: useIsDrawerOpen() ? false : true,
                tabBarIcon: ({ focused})=>{
                    return (
                    <Entypo name="home" size={24} color={focused ? '#fa4a0c' : '#ADADAF'} />
                )},
                tabBarLabel: ()=> null,
            }}
            />
            <Tab.Screen name='favourites' component={Favourites} 
            options={{
                tabBarVisible: false,
                tabBarIcon: ({focused})=>{return (
                    <AntDesign name="hearto" size={24} color={focused ? '#fa4a0c' : '#ADADAF'} />
                )},
                tabBarLabel: ()=> null,
            }}
            />
            <Tab.Screen name='profile' component={Profile}
            options={{
                tabBarVisible: false,
                tabBarIcon:({focused})=>(
                    <Feather name="user" size={24} color={focused ? '#fa4a0c' : '#ADADAF'} />
                ),
                tabBarLabel: ()=> null,
            }}
            />
            <Tab.Screen name='history' component={History}
            options={{
                tabBarVisible: false,
                tabBarIcon:({focused})=>(
                    <MaterialCommunityIcons name="history" size={24} color={focused ? '#fa4a0c' : '#ADADAF'} />
                ),
                tabBarLabel: ()=> null,
            }}
            />
        </Tab.Navigator>
    )
}

export default TabStack
