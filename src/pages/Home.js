import React from 'react'
import {Link} from "react-router-dom"

const Home = () =>{
  return (
   <div className='flex flex-col'>
     <div className='homebg md:h-[85vh] md:pt-[15rem]  flex flex-col justify-center items-center gap-[2rem] px-[1rem] sm:px-[2rem] md:flex-row'>
      <div className='flex flex-col gap-[1rem] items-start'>
        <h1 className='text-[2rem] md:text-[3rem] max-w-[100%] sm:max-w-[80%]'>Face Mask Thermometer</h1>
        <p className='max-w-[100%] sm:max-w-[80%]'>Quis autem vel eum iure reprehenin voluptate velit esse quam nihil molestiae conse</p>
     <button className='bg-[#4e97fd] rounded-[20px] px-[2rem] py-[0.6rem] text-white'>Shop Now</button>
      </div>
      <div>
        <img src='./images/home.png' alt=''/>
      </div>
    </div>

    <div className='flex flex-col mt-[12rem] mb-[2rem] gap-[1rem]'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1rem]'>
      <div className="max-w-[100%] h-[250px] md:h-[230px] home-img home-img1 ">
      <span>Digital Meter</span>
      <h2>Thermometer</h2>
      <Link>Shop Now</Link>
      </div>
      <div className="max-w-[100%] h-[200px] home-img home-img2">
      <span>Gun Covid -19</span>
      <h2>Temperature</h2>
      <Link>Shop Now</Link>
      </div>
      <div className="max-w-[100%] h-[200px] home-img home-img3">
      <span>Pulse</span>
      <h2>Oximeter</h2>
      <Link>Shop Now</Link>
      </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-[1rem]'>
      <div className="max-w-[100%] h-[200px] home-img home-img4 ">
      <span>Lab Surgery</span>
      <h2>N95 Face Mask</h2>
      <Link>Shop Now</Link>
      </div>
      <div className="max-w-[100%] h-[200px] home-img home-img5 ">
      <span>Surgery Lab</span>
      <h2>Hand Gloves</h2>
      <Link>Shop Now</Link>
      </div>
      </div>
    </div>
   </div>
  )
}

export default Home
