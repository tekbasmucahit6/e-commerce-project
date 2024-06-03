import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <div className='flex justify-center items-center bg-zinc-950 p-10'>
        <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-10'>
            <div className='flex justify-center items-center text-center'>
                <b className='text-white bg-red-600 p-5'>"The only way to do great work is to love what you do."</b>
            </div>
            <div className='flex justify-center items-center text-white'>
                <b>powered by <a href="https://mucahittekbas.com" className='text-red-600 animate-pulse transition-all'>mucahittekbas.com</a></b>
            </div>
            <div className='flex justify-center items-center gap-10'>
                <div className='grid grid-rows-2 gap-5'>
                    <div className='flex jsutify-center items-center text-center'>
                        <i className='text-white'>social media</i>
                    </div>
                    <div className='flex justify-center items-center text-center gap-5'>
                        <a href="https://github.com/tekbasmucahit6"><FaGithub className='text-white text-3xl hover:text-red-600' /></a>
                        <a href="https://www.instagram.com/mucahitxtekbs/ "><FiInstagram className='text-white text-3xl hover:text-purple-500' /></a>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Footer