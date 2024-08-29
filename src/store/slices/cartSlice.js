import {createAction, createSlice} from "@reduxjs/toolkit";
import Decimal from "decimal.js"
import { toast } from 'react-toastify'

export const addToCart = createAction("cart/add");
export const deleteFromCart = createAction("cart/delete");
export const handleQuantity = createAction("cart/quantity");
export const itemsRemoved = createAction("cart/remove");

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:[],
        totalAmount:0
    },
    extraReducers:(builder)=>{
        builder.addCase("cart/add",(state,action)=>{
            let newItem = action.payload;
            let existingItem = state?.cartItems?.find((u)=> u.id === newItem.id);
            if(existingItem){
                existingItem.quantity += (newItem.quantity || 1)
                toast.success(`Item is already in cart, item quantity increases by one :) `)
            }
            else{
                state.cartItems.push({...newItem, quantity:(newItem.quantity || 1)});
                toast.success(`Item added to cart!`)
            }
            state.totalAmount = new Decimal(state.totalAmount || 0)
            .plus(newItem.price * (newItem.quantity || 1))
            .toNumber();
        })
    

        builder.addCase("cart/delete", (state,action)=>{
            let deletedItem = state.cartItems.find((u)=> u.id === action.payload);
            console.log(deletedItem);

            if(deletedItem){
                state.cartItems = state.cartItems.filter((u)=> u.id !== action.payload);
                state.totalAmount = new Decimal(state.totalAmount || 0)
                .minus(deletedItem.price * (deletedItem.quantity || 1))
                .toNumber();
                toast.success(`Item deleted from cart!`)
            }
        })


        builder.addCase("cart/quantity",(state,action)=>{
            let {newQuantity,itemId} = action.payload;
            let updatedItem = state.cartItems.find((u)=> u.id === itemId);
            
            if(updatedItem){
                state.totalAmount = new Decimal(state.totalAmount ||0)
                .minus(updatedItem.price * (updatedItem.quantity ||1))
                .plus(updatedItem.price * newQuantity)
                .toNumber();


                updatedItem.quantity = newQuantity
            }
        })

        builder.addCase("cart/remove",(state,action)=>{
            state.cartItems = [];
            state.totalAmount = 0;
        })

    }
})


export default cartSlice.reducer;