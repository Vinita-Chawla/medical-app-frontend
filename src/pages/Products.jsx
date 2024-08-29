import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { addToCart } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../store/slices/wishlistSlice";

const Products = () => {
  const [featuredProducts, setFeaturedProducts] = useState();
  const [recentProducts, setRecentProducts] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [searchRecent, setSearchRecent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getFeaturedProducts();
    getRecentProducts();
  }, []);

  const handle401 = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const getFeaturedProducts = async () => {
    try {
      const headers = {
        Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        "Content-Type": "application/json",
      };
      let response = await axios.get(
        "http://localhost:5000/products/featured",
        { headers }
      );
      setFeaturedProducts(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        handle401();
      }
    }
  };

  const getRecentProducts = async () => {
    try {
      const headers = {
        Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        "Content-Type": "application/json",
      };
      let response = await axios.get("http://localhost:5000/products/recent", {
        headers,
      });
      setRecentProducts(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        handle401();
      }
    }
  };

  const cartClicked = (product) => {
    dispatch(addToCart(product));
  };


  const wishListClicked = (product) => {
    dispatch(addToWishlist(product));
  };

  const filteredItems = featuredProducts?.filter((product)=>{
    if(searchValue=== "" || searchValue === undefined){
      return true;
    }
    else if(product?.title?.toLowerCase().includes(searchValue.toLowerCase())){
      return true
    }
    return false
  })

  const filteredRecentItems = recentProducts?.filter((product)=>{
    if(searchRecent=== "" || searchRecent === undefined){
      return true;
    }
    else if(product?.title?.toLowerCase().includes(searchRecent.toLowerCase())){
      return true
    }
    return false
  })



  return (
    <>
      <div className="w-[80%] mx-auto mt-[10rem]">

        <div className="mb-[2rem] flex justify-between items-start">
          <h2 className="text-[1.5rem] sm:text-[2.2rem] font-bold">Featured Products</h2>
          <input type='text' placeholder='Search' className='border-solid border-black border-[1px] w-[30%] bg-white px-[1rem] py-[0.5rem] rounded-[20px]' onChange={(e)=> setSearchValue(e.target.value)} value={searchValue}/>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1rem]">
          {filteredItems?.map((product, index) => {
            return (
              <div
                className="flex items-center flex-col gap-[1rem]"
                key={product.id}
              >
                <img src={product.image} alt="" />
                <h5 className="mb-0">{product.subTitle}</h5>
                <h2 className="text-[1.2rem]">
                  <Link to={`/singleFeatured/${product.id}`}>
                    {product.title}
                  </Link>
                </h2>
                <div className="flex justify-between items-center gap-[1rem]">
                  <span>${product.price}</span>
                  <div className="flex items-center">
                  <i
                    className="bx bx-shopping-bag cursor-pointer text-[#ff5252] bg-white px-[6px] py-[6px] rounded-[50%] text-[1.5rem]"
                    onClick={() => cartClicked(product)}
                  ></i>
                   <i
                    className="far fa-heart cursor-pointer text-[#ff5252] bg-white px-[6px] py-[6px] rounded-[50%] text-[1.5rem]"
                    onClick={() => wishListClicked(product)}
                  ></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-[80%] mx-auto mt-[10rem]">
      <div className="mb-[4rem] flex justify-between items-start">
          <h2 className="text-[1.5rem] sm:text-[2.2rem] font-bold">Recent Products</h2>
          <input type='text' placeholder='Search' className='border-solid border-black border-[1px] w-[30%] bg-white px-[1rem] py-[0.5rem] rounded-[20px]' onChange={(e)=> setSearchRecent(e.target.value)} value={searchRecent}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem]">
          {filteredRecentItems?.map((product, index) => {
            return (
              <div
                className="flex items-center flex-col gap-[1rem]"
                key={product.id}
              >
                <img src={product.image} alt="" />
                <h5 className="mb-0">{product.subTitle}</h5>
                <h2 className="text-[1.2rem]">
                  <Link to={`/singleRecent/${product.id}`}>
                    {product.title}
                  </Link>
                </h2>
                <div className="flex justify-between items-center gap-[1rem]">
                  <span>${product.price}</span>
                  <div className="flex items-center">
                  <i
                    className="bx bx-shopping-bag cursor-pointer text-[#ff5252] bg-white px-[6px] py-[6px] rounded-[50%] text-[1.5rem]"
                    onClick={() => cartClicked(product)}
                  ></i>
                   <i
                    className="far fa-heart cursor-pointer text-[#ff5252] bg-white px-[6px] py-[6px] rounded-[50%] text-[1.5rem]"
                    onClick={() => wishListClicked(product)}
                  ></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-[10rem] gap-[1rem] w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex gap-[1rem] justify-center items-center bg-white py-[3rem] px-[1rem] shadow-lg shadow-black-300/40 ">
          <div>
            <i className="fas fa-ship text-[#4e97fd] text-[3rem]"></i>
          </div>
          <div>
            <h4>Free Shipping</h4>
            <p>Sed perspicia unde omnis iste nat error voluptate accus</p>
          </div>
        </div>

        <div className="flex gap-[1rem] justify-center items-center py-[3rem] px-[1rem] shadow-lg shadow-black-300/40 ">
          <div>
            <i className="fas fa-sack-dollar text-[#e4573d] text-[3rem]"></i>
          </div>
          <div>
            <h4>Money Back</h4>
            <p>Sed perspicia unde omnis iste nat error voluptate accus</p>
          </div>
        </div>

        <div className="flex gap-[1rem] justify-center items-center py-[3rem] px-[1rem] shadow-lg shadow-black-300/40 ">
          <div>
            <i class="fas fa-unlock-alt text-[#febd00] text-[3rem]"></i>
          </div>
          <div>
            <h4>100% Secure</h4>
            <p>Sed perspicia unde omnis iste nat error voluptate accus</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
