import numbro from 'numbro'
import { useWindowDimensions, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
// const { width, height } = useWindowDimensions()

const {width, height} = Dimensions.get('window')

const designHeight = 896
const designWidth = 414


export const getHeight = (params)=>{
    let newHeight = (params / designHeight) * height
    return newHeight
}

export const getWidth = (params)=>{
    let newWidth = (params / designWidth) * width
    return newWidth
}

// function for formatting money
export const formatNos = (nos)=>{
    return `₦${numbro(nos).format({thousandSeparated: true})}`
}

// function for navigation animation
export const options={
    headerShown: false,
    cardStyleInterpolator: ({ current, layouts}) => {
        return {
          cardStyle: {
            transform: [
              {
                translateX: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.width, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        };
      },
    gestureEnabled: true,
}

// function for saving data with localStorage
export const saveItem = async (KEY, data)=>{
  try {
      await AsyncStorage.setItem(KEY, data)
  } catch (error) {
      console.log(error);
  }

}



// function for getting data from localStorage
export const getLocalStorage = async (KEY)=>{
  try {
    const jsonValue = await AsyncStorage.getItem(KEY)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log(e);
  }
}
