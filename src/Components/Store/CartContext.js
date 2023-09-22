import React from 'react'
const CartContext =React.createContext({
    item: [],
    totalAmount:0,
    quantity:0,
    addItem: (item)=>{},
    getlength: (quant)=>{},
    setTotalAmount: 0

})

export default CartContext