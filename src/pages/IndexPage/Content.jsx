import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Product from './components/Product'
import Loading from '../../components/Loading'

function Content() {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false) 
    useEffect(() => {
        setLoading(true)
        const check = async () => {
            const wait = await fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(dt => setData(dt.products));
            setLoading(false)
        }
        check()
    },[])
    console.log(data)
  return (
    <>
        {
            loading?
            <Loading />
            :
            <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-5 my-10 mx-5'>
                {
                    data.map((dt,i) => (
                        <Product dt={dt} i={i} />
                    ))
                }
            </div>
        }
    </>
  )
}

export default Content