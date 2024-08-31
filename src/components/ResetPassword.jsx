import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom"

function ResetPassword() {
  const [password, setPassword] = useState();
  const [msg,setMsg] = useState("")
  let {id,token} = useParams();

  const navigate = useNavigate();


const resetPass = async()=>{
  let data = {
    password:password
  }
  let response = await axios.put(`https://medical-app-backend-one.vercel.app/auth/reset-password/${id}/${token}`,data);
  console.log(response.data)
  if(response.data.status === "successful"){
    setMsg("Password Reset Successfully");
    setPassword("");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }
  else{
    setMsg("An error occured, please try again!");
  }
}

 

  return (
    <div className='mt-[8rem] flex flex-col items-center justify-center gap-[1.5rem] max-w-[30rem] mx-auto form-container'>
      <h2 className='mb-[1rem] text-[#674188] font-bold text-[2rem]'>New Password</h2>

     

      <div className='w-full flex flex-col items-center gap-[1rem]'>

      <input type='password' placeholder='Enter Password' className='w-full py-[0.6rem] px-[1rem] border-solid border-[1px] border-black rounded' onChange={(e)=> setPassword(e.target.value)} value={password}/>

   <p className='text-[#674188] text-[1.1rem] mt-[0.5rem] text-center'>{msg}</p>
      <button className='px-[1.5rem] py-[0.4rem] bg-[#674188] rounded text-white shadow-md shadow-black-300/40 ' onClick={resetPass}>Reset</button>
      </div>
    </div>
  )
}

export default ResetPassword;
