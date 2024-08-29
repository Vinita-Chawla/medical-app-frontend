import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { deleteFromCart, handleQuantity } from "../store/slices/cartSlice";
import axios from "axios"
import {useStripe} from "@stripe/react-stripe-js"

const Cart = () => {
  const state = useSelector((state) => state);
  const cartItems = state.cart.cartItems;
  const totalAmount = state.cart.totalAmount;

  const dispatch = useDispatch();
  const stripe = useStripe();

  console.log(totalAmount);
  console.log(cartItems);

  const itemDeleted = (id)=>{
    dispatch(deleteFromCart(id))
  }

  const changeQuantity = (newQuantity, itemId)=>{
    if(newQuantity >0){
      dispatch(handleQuantity({newQuantity,itemId}));
    }
  }

  const buyNow = async()=>{
    let line_items = cartItems.map((item)=>{
      return{
        quantity:(item.quantity || 1),
        price_data:{
           currency:"usd",
           unit_amount:Math.round(item.price*100),
           product_data:{
               name:item.title
           }
        }
       }
    })

    let response = await axios.post("http://localhost:5000", line_items);
    console.log("response",response);

    stripe.redirectToCheckout({sessionId:response.data.session.id})
  }




  return (
    <div className="mt-[12rem] flex flex-col gap-[3rem] w-[90%] mx-auto">
    <div className="grid sm:grid-cols-6 grid-cols-5 gap-[0.5rem] sm:gap-[2rem]">
                  <h5 className="flex justify-center text-[0.9rem] sm:text-[1.25rem]">Images</h5>
                  <h5 className="flex justify-center text-[0.9rem] sm:text-[1.25rem]">Product</h5>
                  <h5 className="flex justify-center text-[0.9rem] sm:text-[1.25rem]">Unit Price</h5>
                  <h5 className="flex justify-center text-[0.9rem] sm:text-[1.25rem]">Quantity</h5>
                  <h5 className="sm:flex justify-center hidden text-[0.9rem] sm:text-[1.25rem]">Total</h5>
                  <h5 className="flex justify-center text-[0.9rem] sm:text-[1.25rem]">Remove</h5>
    </div>
    <div>
      {cartItems?.map((cartItem,index) => {
        return (
          <div className="grid sm:grid-cols-6 grid-cols-5 gap-[0.5rem] sm:gap-[2rem] items-center" key={index}>
            <img src={cartItem.image} alt=""/>
                 <p className="flex justify-center text-[0.8rem] sm:text-[1rem]">{cartItem.title}</p>
                 <p className="flex justify-center">${cartItem.price}</p>
               <input className="mx-auto border-black border-1 border-solid px-[0.5rem] w-[80%]" type="number" onChange={(e)=> changeQuantity(e.target.value,cartItem.id)} value={cartItem.quantity} />
                 <p className="sm:flex justify-center hidden">${cartItem.price * cartItem.quantity}</p>
                 <p onClick={()=> itemDeleted(cartItem.id)} className="cursor-pointer flex justify-center">❌</p>
          </div>
        );
      })}
      </div>


<div className="w-[100%] flex justify-end mt-[8rem]">
      <div className="w-[90%] md:w-[30%] flex flex-col gap-[3rem] items-start">
        <h2>Cart Total</h2>
        <div className="flex justify-between w-[100%]">
          <p>Total</p>
          <p>${totalAmount}</p>
        </div>
        <button className='bg-[#4e97fd] rounded-[20px] px-[2rem] py-[0.6rem] text-white' onClick={buyNow}>Proceed to checkout</button>
      </div>
    </div>
    </div>
  );
};

export default Cart;
