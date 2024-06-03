import React, { useEffect, useState } from 'react'
import SingleData from './SingleData'

function Products() {

    const [veri,setVeri] = useState()


    useEffect(() => {
        fetch('https://dummyjson.com/products').then(res => res.json()).then(data => setVeri(data.products))
    }, [])
  return (
    <>
        <div className='flex justify-center items-center mt-10 mb-10'>
            <b className='font-mono bg-orange-600 p-5 rounded text-white'>KEYİFLİ ALIŞVERİŞLER :)</b>
        </div>
    <div className='grid grid-cols-1 p-5 gap-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 justify-center items-cente'>
        {
            veri?
            veri.map((dt,i) => (
                <SingleData dt={dt} i={i} />
            ))
            :
            <div>
                <div className='text-center text-3xl flex justify-center items-center border h-72 border-dark animate-pulse'></div>
            </div>
        }
    </div>
        </>
  )
}

export default Products