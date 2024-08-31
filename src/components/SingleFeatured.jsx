import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addToCart } from '../store/slices/cartSlice';
import { useDispatch } from 'react-redux';

function SingleFeatured() {

  const [singleFeatured,setSingleFeatured] = useState();

    const params = useParams();
    let id = params.id;

    const dispatch = useDispatch();

    useEffect(()=>{
        getFeaturedProduct();
    },[])
   
    const getFeaturedProduct = async()=>{
        const headers = {
            "Authorization": `bearer ${JSON.parse(localStorage.getItem("token"))}`,
            "Content-Type":"application/json"
        }

        let response = await axios.get(`https://medical-app-backend-one.vercel.app/products/singleFeatured/${id}`, {headers});
        console.log(response.data)
        setSingleFeatured(response.data)
    }

    const cartClicked = (product) => {
      dispatch(addToCart(product));
    };
  

  return (
    <>
      <div className='mt-[10rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]'>
    <div className='flex items-center justify-center'>
      <img src={`.${singleFeatured?.image}`} alt=''/>
    </div>
    <div className='p-[1rem] flex flex-col items-start gap-[1rem]'>
      <h1 className='text-[2rem]'>{singleFeatured?.title}</h1>
      <h5>Price: ${singleFeatured?.price}</h5>
      <p>On the other hand, we denounce with righteous indigna
      tion and dislike men who are so beguiled and demor</p>
      <h5>Category: {singleFeatured?.subTitle}</h5>
      <Link className='px-[1.5rem] no-underline py-[0.6rem] text-[1.1rem] font-semibold bg-[#4e97fd] rounded mt-[1rem] text-white'  onClick={() => cartClicked(singleFeatured)}>Add to Cart</Link>
    </div>
    </div>
    </>
  )
}

export default SingleFeatured
