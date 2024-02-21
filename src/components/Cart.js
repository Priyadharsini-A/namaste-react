import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
  const cartItems=useSelector((store)=>store.cart.item)
  const dispatch=useDispatch();
 // console.log(cartItems)
 // const{name}=cartItems?.card?.info
 const handleClear=()=>{
dispatch(clearCart());
 }
  return (
    <div className='w-6/12 m-auto p-2 text-center bg-cyan-200'>
      <h1 className='font-bold'>Cart Items</h1>
      {cartItems.length===0&&(
      <h1>Your cart is empty.Please add</h1>)}
      <ItemList item={cartItems}/>
      <button onClick={handleClear}>Clear Cart</button>
      
      
    </div>
  )
}

export default Cart
