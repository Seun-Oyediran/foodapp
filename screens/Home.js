
import React from 'react'
import Login from './Login'
import { useDataContext } from '../Context'
import { createStackNavigator } from '@react-navigation/stack'
import ForgotPassword from './ForgotPassword'
import HomeStack from '../Stacks/HomeStack'
import Landing1 from './Landing1'
import { options } from '../helper/Helper'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Offers from './Offers'
import { Dimensions } from 'react-native'
import CustomDrawer from '../Components/CustomDrawer'
import Profile from './Profile'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()


const Home = () => {
    const { progress , auth}  = useDataContext()
  
    return (
        <>
       { progress == 0 && <Landing1/>}
        {progress != 0 && !auth &&
         <Stack.Navigator
        screenOptions={{headerShown: false,...options}}
        >
            
                        <Stack.Screen name='login' component={Login} />
                        <Stack.Screen name='forgot' component={ForgotPassword} />
                    
        </Stack.Navigator>
        }
        {progress != 0 && auth &&
        <Drawer.Navigator
        
        drawerType='slide'
        drawerStyle={{backgroundColor: '#FA4A0C', width: Dimensions.get('window').width * 0.65}}
        overlayColor='transparent'
        drawerContent={(props)=> < CustomDrawer {...props} />}
        screenOptions={{
            swipeEnabled: false
        }}
        >
            
            <Drawer.Screen name='homestack' component={HomeStack} options={{swipeEnabled: true}} />
            <Drawer.Screen name='offer' component={Offers} />
            <Drawer.Screen name='profile' component={Profile} />
        </Drawer.Navigator>
        // <HomeStack />
        }
        
        
        </>
    )
}






export default Home



