import React,{useState} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'
import {useNavigate} from "react-router-dom"

function ForgotPassword() {
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const getPassword = async()=>{
    let data = {
      email:email
    }
    let response = await axios.post('https://medical-app-backend-one.vercel.app/auth/forgot-password',data);
    console.log(response.data)
    if(response.data.message){
      setEmail("")
      setMsg(response.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
    
  }

  return (
    <div className='mt-[8rem] flex flex-col items-center justify-center gap-[1.5rem] max-w-[32rem] mx-auto form-container'>
      <h2 className='mb-[1rem] text-[#674188] font-bold text-[2rem]'>Forgot Password</h2>

     

      <div className='w-full flex flex-col items-center gap-[1rem]'>

      <input type='text' placeholder='Enter Email' className='w-full py-[0.6rem] px-[1rem] border-solid border-[1px] border-black rounded' onChange={(e)=> setEmail(e.target.value)} value={email}/>

           <p className='text-[#674188] text-[1.1rem] mt-[0.5rem] text-center'>{msg}</p>

      <button className='px-[1.5rem] py-[0.4rem] bg-[#674188] rounded text-white shadow-md shadow-black-300/40' onClick={getPassword}>Send</button>
      </div>
    </div>
  )
}

export default ForgotPassword;
