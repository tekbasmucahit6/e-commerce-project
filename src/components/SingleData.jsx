import React from 'react'
import { IoPricetag } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function SingleData({dt,i}) {
    const navigate = useNavigate()
    console.log(dt)
  return (
    <div key={i} className='border border-dark p-5 rounded shadow-lg'>
        {/* products img start */}
        <div className='flex justify-center items-center'>
            <img className='max-w-48' src={dt.thumbnail} alt="" />
        </div>
        {/* products img finish */}
        {/* availebility status start */}
        <div className='flex justify-end items-center mt-10  mb-10'>
            <b className='bg-red-700 p-4 text-white font-mono rounded-lg animate-pulse transition-all'>{dt.availabilityStatus}</b>
        </div>
        {/* availebility status finish */}
        {/* products title start */}
        <div className='flex justify-center items-center'>
            <b>{dt.title}</b>
        </div>
        {/* products title finish */}
        {/* products description start */}
        <div className='flex justify-center items-center text-center h-40'>
            <i>{dt.description}</i>
        </div>
        {/* products description finish */}
        {/* products price start */}
        <div className='flex justify-center items-center mt-10'>
            <div className='grid grid-cols-2 gap-10'>
                <b className='text-yellow-500 flex items-center gap-3'><FaRegStar /> {dt.rating}</b>
                <b className='text-red-600 flex items-center gap-3'><IoPricetag /> {dt.price} </b>
            </div>
        </div>
        {/* products price finish */}
        {/* products info start */}
        <div className='flex justify-center items-center mt-10'>
            <button onClick={() => navigate(`/product/${dt.id}`)} className='border py-2 px-3 rounded-lg shadow bg-blue-500 flex justify-center items-center text-center text-white hover:bg-blue-700'>İNCELE</button>
        </div>
        {/* products info finish */}
    </div>
  )
}

export default SingleData