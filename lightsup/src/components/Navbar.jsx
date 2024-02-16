import React, { useState } from 'react';
import logo from '../assets/logo.jpeg';
import react from "../assets/react.png"

export default function Navbar() {
  const [selected , setSelected] = useState(null)
  return (
    <div className='border-[0.1px] drop-shadow-lg shadow-md shadow-white/20 border-gray-600 fixed w-3/5 h-[90px] backdrop-filter backdrop-blur-2xl rounded-3xl m-auto left-0 right-0 top-5 bg-transparent flex items-center'>
      <div className='flex-none'>
        <img alt='logo' src={logo} className='h-12 ml-12 rounded-full' />
      </div>
      
      <div className='flex items-center justify-center flex-grow'>
        <ul className='flex text-gray-500 gap-x-5 cursor-pointer items-center'>
          <li onClick={()=>setSelected("home")} className={`${selected ==="home" ? "text-white":""}`}>Home</li>
          <li onClick={()=>setSelected("about")} className={`${selected ==="about" ? "text-white":""}`}>About Us</li>
          <li onClick={()=>setSelected("references")} className={`${selected ==="references" ? "text-white":""}`}>References</li>
          <li onClick={()=>setSelected("clients")} className={`${selected ==="clients" ? "text-white":""}`}>Clients</li>
        </ul>
      </div>
      <button className='text-white mr-12 bg-[#0C5ACE] py-4 font-semibold px-6 rounded-xl'>Get a Free Quote</button>
    </div>
  );
}
