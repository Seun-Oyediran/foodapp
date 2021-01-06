import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import Home from './screens/Home';
import { useFonts } from 'expo-font'
import  AppLoading  from 'expo-app-loading'
import Context from './Context'
import { NavigationContainer } from '@react-navigation/native'




const App=()=> {

  const [loaded] = useFonts({
    'SF-BOLD': require('./assets/fonts/FontsFree-Net-SF-Pro-Rounded-Bold.ttf'),
    'SF-TEXT': require('./assets/fonts/FontsFree-Net-SFProDisplay-Regular.ttf'),
    'POPPINS': require('./assets/fonts/poppins.ttf')
  })



  const show =()=>{
    if(!loaded){
      return <AppLoading/>
    }                    
    else{
      return (
        <Context>
          <NavigationContainer>
          
              <SafeAreaProvider >
                <StatusBar style='auto' />
                <Home/>
                
              </SafeAreaProvider>
            
          </NavigationContainer>
        </Context>
      );
    }
  }


  return (
      show()
    );

}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
   
  },
});
