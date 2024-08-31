import React,{useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify'

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();


  const getdata = async()=>{
    let formData = new FormData();
    formData.append("email",email);
    formData.append("password",password);

    let response = await axios.post("https://medical-app-backend-one.vercel.app/auth/login", formData);
    console.log(response.data)
    if(response.data.user){
      localStorage.setItem("user",JSON.stringify(response.data.user))
      localStorage.setItem("token",JSON.stringify(response.data.auth));
      toast.success(`Login Successful!`);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    else if(response.data.result){
      toast.error(`No user found!`);
    }
    else if(response.data.status){
      toast.info(`Please verify the Email!`);
    }
    else{
      toast.error(`Please enter correct details!`);
    }

    setEmail(""); setPassword("");
  }

  return (
    <div className='mt-[8rem] flex flex-col items-center justify-center gap-[1.5rem] max-w-[30rem] mx-auto form-container'>
      <h2 className='text-[#4e97fd] font-bold text-[2rem]'>Sign in</h2>

      <div className="social-container">
          <Link to={`https://medical-app-backend-one.vercel.app/auth/facebook`} className="social">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link to={`https://medical-app-backend-one.vercel.app/auth/google`} className="social">
            <i className="fab fa-google-plus-g" />
          </Link>
        </div>


      <p>
          Already have an account? Login in or 
          &nbsp; <Link className='text-[#4e97fd] font-semibold' to="/signup">Sign Up</Link>
        </p>

      <div className='w-full flex flex-col items-center gap-[1rem]'>

      <input type='text' placeholder='Enter Email' className='w-full py-[0.6rem] px-[1rem] border-solid border-[1px] border-black rounded' onChange={(e)=> setEmail(e.target.value)} value={email}/>

      <input type='password' placeholder='Enter Password' className='w-full py-[0.6rem] px-[1rem] border-solid border-[1px] border-black rounded' onChange={(e)=> setPassword(e.target.value)} value={password}/>

     <Link to="/forgot-password" className='no-underline text-[#4e97fd] text-[1.2rem] mt-[0.5rem]'>Forgot your password?</Link>

      <button className='px-[1.5rem] py-[0.4rem] bg-[#4e97fd] rounded mt-[1rem] text-white shadow-md shadow-black-300/40 ' onClick={getdata}>Login</button>
      </div>
    </div>
  )
}

export default Login;
