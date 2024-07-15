import React from 'react'
import Button from '../../../components/Button'
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';
function Product({dt,i}) {
    console.log(dt)
  return (
    <div className='flex flex-col justify-center items-center border border-blue-600 p-5 gap-10 bg-slate-100 rounded-lg bg-opacity-30' key={i}>
        <div className='flex justify-center items-center text-center'>
            <img src={dt.thumbnail} className='w-40' alt="" />
        </div>
        <div className='flex justiy-start items-center text-blue-500 font-bold'>
            <p>{dt.title}</p>
        </div>
        <div className='flex justiy-start items-center text-gray-500 font-bold'>
            <p>{dt.description}</p>
        </div>
        <hr />
        <div className='flex justify-center items-center gap-16'>
                <strong>${dt.price}</strong>
                <Link to={`/product/${dt.id}`} >
                <Button feature={<SlBasket />} />
                </Link>
        </div>
    </div>
  )
}

export default Product