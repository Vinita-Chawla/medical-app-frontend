import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify'

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [profile, setProfile] = useState();
  const [msg,setMsg] = useState("");

  const navigate = useNavigate();


  const handleData = async()=>{
    let formData = new FormData();
    formData.append("name",name);
    formData.append("email",email);
    formData.append("password",password);
    formData.append("profile",profile);
    formData.append("verified",false);

  
    let response = await axios.post("https://medical-app-backend-one.vercel.app/auth/register", formData);
    console.log(response.data)

    if(response.data.user){
      localStorage.setItem("user",JSON.stringify(response.data.user))
      localStorage.setItem("token",JSON.stringify(response.data.auth));
      setMsg(response.data.message);
      toast.success(`Signup Successful!`);
      setTimeout(() => {
        navigate("/login")
      }, 4000);
    }
    else if(response.data.result){
      toast.error("User with this email already exists.")
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
    setName(""); setEmail(""); setPassword("");
  }

  return (
    <div className='mt-[8rem] flex flex-col items-center justify-center gap-[1.5rem] max-w-[32rem] mx-auto form-container'>
      <h2 className='text-[#4e97fd] font-bold text-[2rem]'>Create Account</h2>
      
      <div className="social-container">
          <Link to={`https://medical-app-backend-one.vercel.app/auth/facebook`} className="social">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link to={`https://medical-app-backend-one.vercel.app/auth/google`} className="social">
            <i className="fab fa-google-plus-g" />
          </Link>
        </div>

      <p>
          use your email to create an account. or
          &nbsp;  <Link className='text-[#4e97fd] font-semibold' to="/login">Login</Link>
        </p>

      <div className='w-full flex flex-col items-center gap-[1rem]'>
      <input type='text' placeholder='Enter Name' className='w-full py-[0.6rem] px-[1rem] border-solid border-[1px] border-black rounded' onChange={(e)=> setName(e.target.value)} value={name}/>

      <input type='text' placeholder='Enter Email' className='w-full py-[0.6rem] px-[1rem] border-solid border-[1px] border-black rounded' onChange={(e)=> setEmail(e.target.value)} value={email}/>

      <input type='password' placeholder='Enter Password' className='w-full py-[0.6rem] px-[1rem] border-solid border-[1px] border-black rounded' onChange={(e)=> setPassword(e.target.value)} value={password}/>

      <input type='file' name='profile' onChange={(e)=> setProfile(e.target.files[0])} className='w-full py-[0.6rem] px-[1rem]'/>

      <p className='text-[#4e97fd] text-[1.1rem] mt-[0.5rem] text-center'>{msg}</p>

      <button className='px-[1.5rem] py-[0.4rem] bg-[#4e97fd] rounded mt-[1rem] text-white shadow-md shadow-black-300/40 ' onClick={handleData}>Signup</button>
      </div>
    </div>
  )
}

export default Signup;
