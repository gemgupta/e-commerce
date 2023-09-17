import React from 'react'
const CartContext =React.createContext({
    item: [],
    totalAmount:0,
    quantity:0,
    addItem: (item)=>{},
    removeItem: (id)=>{},
    Token: '',
    isLoggedIn: false,
    Login: (Token)=>{},
    Logout: ()=>{}

})

export default CartContext