import {createAction, createSlice} from "@reduxjs/toolkit";
import { toast } from 'react-toastify'

export const addToWishlist = createAction("wishlist/add");
export const deleteFromWishlist = createAction("wishlist/delete");

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        wishlistItems:[]
    },
    extraReducers:(builder)=>{
        builder.addCase("wishlist/add",(state,action)=>{
            let newItem = action.payload;
            let existingItem = state?.wishlistItems?.find((u)=> u.id === newItem.id);
            if(existingItem){
                toast.success(`Item is already in wishlist`)
            }
            else{
                state?.wishlistItems?.push({...newItem, quantity:(newItem.quantity || 1)});
                toast.success(`Item added to wishlist!`)
            }
          
        })
    

        builder.addCase("wishlist/delete", (state,action)=>{
            let deletedItem = state.wishlistItems.find((u)=> u.id === action.payload);
            console.log(deletedItem);

            if(deletedItem){
                state.wishlistItems = state.wishlistItems.filter((u)=> u.id !== action.payload);
                toast.success(`Item deleted from wishlist!`)
            }
        })



    }
})


export default wishlistSlice.reducer;