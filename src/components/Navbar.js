import React, { useState,useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import { toast } from 'react-toastify'

const Navbar = () => {
  const [menuBtn, setMenuBtn] = useState(false);

  const navigate = useNavigate();


  function handleScroll() {
    setMenuBtn(false);
  }

  function closeMenu() {
    setMenuBtn(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let auth = localStorage.getItem("user");
  let user = JSON.parse(auth);


  const userLogout = ()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    toast.success(`Logout Successful!`)
    setTimeout(() => {
      navigate("/login")
    }, 1000);
   
  }



  return (
    <>
      <header className="flex flex-col fixed top-0 left-0 w-full bg-white shadow-md z-50 shadow-md shadow-black-300/40 ">
        <div className="pt-[0.5rem] px-[0.5rem] flex justify-center items-center gap-[0.5rem] md:justify-between flex-col md:flex-row ">
        <div>
          <p className="text-[1rem] hidden sm:block text-center">♥ Welcome to Medibazar. We provides medical accessories</p>
        </div>
        <div className="flex gap-[1rem]">
       {
        auth?   
        <Link className="no-underline text-black" onClick={userLogout}><i className="fas fa-sign-out"></i> Logout</Link>
        :
        <Link to="/login" className="no-underline text-black"><i className="fas fa-user-circle"></i> My Account</Link>
       }
        <Link to="/cartItems" className="no-underline text-black"><i className="fas fa-cart-plus"></i> Cart</Link>
        <Link to="/wishlistItems" className="no-underline text-black"><i className="far fa-heart"></i> Wishlist</Link>
        </div>
        </div>
        <div className="flex items-center justify-between w-full gap-4 py-[0.9rem] px-8">

        <div>
        <img src="./images/logo.png" alt=""/>
        </div>
      

          <ul
            className={`${
              menuBtn ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center gap-2 p-1 m-0 absolute md:relative top-full md:top-0 right-0 md:right-0 bg-white md:bg-transparent w-full md:w-auto transition-all duration-500 ease-in-out`}
          >
            <li className="mx-3 my-2 md:my-0" onClick={() => closeMenu()}>
              <Link className="no-underline text-[#6482AD] font-bold" to="/">
                Home
              </Link>
            </li>

            <li className="mx-3 my-2 md:my-0" onClick={() => closeMenu()}>
              <Link className="no-underline text-[#6482AD] font-bold" to="/about">
                About
              </Link>
            </li>

            <li className="mx-3 my-2 md:my-0" onClick={() => closeMenu()}>
              <Link className="text-[#6482AD] font-bold no-underline" to="/">
                Shop
              </Link>
            </li>
           

            <li className="mx-3 my-2 md:my-0" onClick={() => closeMenu()}>
            <Link className="no-underline text-[#6482AD] font-bold" to="/">Categories</Link>
            </li>
            
            <li className="mx-3 my-2 md:my-0" onClick={() => closeMenu()}>
            <Link className="no-underline text-[#6482AD] font-bold" to="/">Blog</Link>
            </li>

            <li className="mx-3 my-2 md:my-0" onClick={() => closeMenu()}>
            <Link className="no-underline text-[#6482AD] font-bold" to="/">Contact</Link>
            </li>
          
           

          </ul>


      
         

          <div className="flex items-center justify-center gap-[0.5rem]">
          <div
              id="menu-btn"
              onClick={() => setMenuBtn(!menuBtn)}
              className={`${
                menuBtn ? "fas fa-times" : "fas fa-bars"
              } text-[#6482AD] text-[1.4rem] md:hidden cursor-pointer font-bold`}
            ></div>

          { auth ? 
  <div className="flex items-center justify-center gap-[0.6rem]">
            <img src={user.profile} alt="" className="w-[35px] h-[35px] rounded-[50%]"/>
          </div>
          :
       ""}
       
        
          </div>
        </div>
      </header>



    
    </>
  );
};

export default Navbar;
