import React from 'react'
import { Animated } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomePage from '../screens/HomePage'
import FoodDetails from '../screens/FoodDetails'
import Cart from '../screens/Cart'
import Search from '../screens/Search'
import TabStack from './TabStack'
import Checkout from '../screens/Checkout'
import { options } from '../helper/Helper'
import Delivery from '../screens/Delivery'



const Stack = createStackNavigator()



const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{...options}}  >
            <Stack.Screen name='home' component={TabStack} />
            <Stack.Screen name='details' component={FoodDetails} />
            <Stack.Screen name='cart' component={Cart} />
            <Stack.Screen name='search' component={Search} />
            <Stack.Screen name='checkout' component={Checkout} />
            <Stack.Screen name='delivery' component={Delivery} />
        </Stack.Navigator>
    )
}

export default HomeStack
