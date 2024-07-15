import React from 'react';
import { Link } from "react-router-dom"
import { SlBasket } from "react-icons/sl";
import { BsBasket3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
function Header() {
  return (
    <div className='flex justify-between items-center p-5 bg-blue-600 text-white'>
        <div className='flex justify-center items-center font-bold'>
            <Link to={"/"} className='flex justify-center items-center gap-5' >My E commerce <SlBasket className='text-3xl' /></Link>
        </div>
        <div className='hidden xl:flex lg:flex md:flex jusitfy-center items-center'>
            <input type="search" placeholder='Ürün ara'  className='py-2 px-4 rounded-tl-lg rounded-bl-lg w-[300px] text-black'/>
            <button className='bg-amber-600 px-4 py-2 hover:bg-blue-700 transition-all rounded-tr-xl rounded-br-xl'>Ara</button>
        </div>
        <div className='flex justify-center items-center gap-5'>
        <FaSearch className='text-2xl text-white pointer-cursor xl:hidden lg:hidden md:hidden' />
        <BsBasket3 className='text-2xl text-white cursor-pointer' />
        <VscAccount className='text-2xl text-white cursor-pointer' />
        </div>
    </div>
  )
}

export default Header