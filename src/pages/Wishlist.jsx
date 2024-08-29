import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import {deleteFromWishlist} from "../store/slices/wishlistSlice"

const Wishlist = () => {
  const state = useSelector((state) => state);
  const wishlistItems = state.wishlist.wishlistItems;

  const dispatch = useDispatch();




  const itemDeleted = (id)=>{
    dispatch(deleteFromWishlist(id))
  }






  return (
    <div className="mt-[12rem] flex flex-col gap-[3rem] w-[90%] mx-auto">
    <div className="grid grid-cols-4 gap-[2rem]">
                  <h5 className="flex justify-center">Images</h5>
                  <h5 className="flex justify-center">Product</h5>
                  <h5 className="flex justify-center">Unit Price</h5>
                  <h5 className="flex justify-center">Remove</h5>
    </div>
    <div>
      {wishlistItems?.map((wishlistItem,index) => {
        return (
          <div className="grid grid-cols-4 gap-[2rem] items-center" key={index}>
            <img src={wishlistItem.image} alt=""/>
                 <p className="flex justify-center">{wishlistItem.title}</p>
                 <p className="flex justify-center">${wishlistItem.price}</p>
                 <p onClick={()=> itemDeleted(wishlistItem.id)} className="cursor-pointer flex justify-center">❌</p>
          </div>
        );
      })}
      </div>


    </div>
  );
};

export default Wishlist;
