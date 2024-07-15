import React from 'react'
import { AiOutlineStock } from "react-icons/ai";
import { IoPricetagsOutline } from "react-icons/io5";
function Product({dt}) {
  return (
    <div className='flex justify-center items-center my-10 h-screen'>
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10'>
            <div className='flex justify-center items-center'>
                <img src={dt.thumbnail} className='' alt="" />
            </div>
            <div className='flex flex-col justify-start items-center text-center gap-10'>
                {/* title section */}
                <div className='text-2xl text-blue-600 font-bold'>
                    <strong>{dt.title}</strong>
                </div>
                {/* description section */}
                <div className='text-gray-500'>
                    <p>{dt.description}</p>
                </div>
                {/* price and stock section */}
                <div className='flex justify-center items-center gap-16'>
                    {/* price section */}
                    <div className='flex justify-center items-center text-2xl'>
                        <strong className='flex justify-center items-center gap-2'><IoPricetagsOutline className='text-3xl text-blue-600' />{dt.price}</strong>
                    </div>
                    {/* stock section */}
                    <div className='flex justify-center items-center text-2xl'>
                        <p className='flex justify-center items-center gap-2'><AiOutlineStock className='text-3xl text-blue-600' />{dt.stock}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product