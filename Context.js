import React, {useContext, useState} from 'react'
import Food from './assets/Food.png'
import { useEffect } from 'react'
import { getLocalStorage, saveItem } from './helper/Helper';



export const DataContext = React.createContext()


export const useDataContext = ()=>{
    return useContext(DataContext)
}




const CART_KEY = 'foodAppCartKey'


const rawFoodList = [
    {id:1, price: 1000,inCart: false, quantity:0 , name: 'Veggie tomato mix', type: 'Food', img: [Food,Food,Food,Food]},
    {id:2, price: 500,inCart: false, quantity:0 , name: 'Lorem ipsum dolor',type: 'Drinks', img: [Food,Food,Food,Food]},
    {id:3, price: 1500,inCart: false, quantity:0 , name: 'sit amet consectetur', type: 'Snacks', img: [Food,Food,Food,Food]},
    {id:4, price: 200,inCart: false, quantity:0 , name: 'elit. Eius, veniam', type: 'Food', img: [Food,Food,Food,Food]},
    {id:5, price: 100,inCart: false, quantity:0 , name: 'elit. Eius, lorem2', type: 'Drinks', img: [Food,Food,Food,Food]},
    {id:6, price: 2000,inCart: false, quantity:0 , name: 'elit. Eius, veniam', type: 'Sauce', img: [Food,Food,Food,Food]},
    {id:88, price: 1000,inCart: false, quantity:0 , name: 'elit. Eius, veniam', type: 'Snacks', img: [Food,Food,Food,Food]},
]


const Context = ({children}) => {
    const [foodList, setFoodList] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [progress, setProgress] = useState(0)
    const [storedItem, setStoredItem] = useState(null)
    const [auth, setAuth] = useState(null)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(()=>{
      
        getLocalStorage(CART_KEY).then(data=>{
            let newCart = data.map(item => {
                let oneItem = rawFoodList.find(a => a.id == item.id)
                return {...item, price: oneItem.price}
            })
            setStoredItem(newCart)
        })

        
    },[])
 
    useEffect(()=>{
        saveItem(CART_KEY, JSON.stringify(cartItems))
         calcTotal()
    },[cartItems])


    useEffect(()=>{
        if(storedItem){
            getData()
            setCartItems(storedItem)
        }
    },[storedItem])


    const getData = ()=>{ 

        let cartIds = storedItem.map(item=> item.id)

        let mapData = rawFoodList.map(item=>{
            if(cartIds.indexOf(item.id) > -1){
              let newItem = storedItem.find(one => one.id == item.id)
                return {...newItem, price: item.price}
            }else{
                return {...item}
            } 
        })
        setFoodList(prev=> prev = [...mapData])
    }

    const addToCart = (id)=>{
        let allData = [...foodList]
        let item = allData.find(item=> item.id == id)
        item.inCart = !false
        item.quantity = 1
        setFoodList([...allData])
        setCartItems(prev => prev = [...prev, item])
    }

    const removeFromCart = (id) =>{
        let allData = [...foodList]
        let item = allData.find(item=> item.id == id)
        item.inCart = false
        item.quantity = 0
        setFoodList([...allData])
        setCartItems(prev => prev.filter(item=> item.id != id))
    }

    const decQuantity = (id) =>{
        let allData = [...cartItems]
        let item = allData.find(item => item.id == id)
        if(item.quantity == 1){
            removeFromCart(id)
            return
        }
        item.quantity = item.quantity - 1
        setCartItems([...allData])
    }

    const incQuantity = (id)=>{
        let allData = [...cartItems]
        let item = allData.find(item => item.id == id)
        item.quantity = item.quantity + 1
        setCartItems([...allData])
    }

    const calcTotal = ()=>{
        let allData = [...cartItems]
        let total = 0
        allData.forEach(item=>{
            let product = item.price * item.quantity
            total = total + product
        })
        setTotalPrice(prev => prev = total)
    }

    return (
        <DataContext.Provider value={{progress, setProgress, auth, setAuth, foodList, cartItems, setCartItems, addToCart, removeFromCart, decQuantity, incQuantity, totalPrice}}>
            {children}
        </DataContext.Provider>
    )
}

export default Context
