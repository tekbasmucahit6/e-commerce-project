import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import { IoPricetag } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import Comments from '../components/Comments';

function SingleProduct() {
    // parametrenin alınması
    const id = useParams()

    // product state nin tanımlaması
    const [product,setProduct] = useState()
    console.log(product)

    // yorumlar için state tanımlaması
    const [reviews,setReviews] = useState();
    console.log(reviews)

    console.log(id)
    // linkin id ye göre yeniden yapılandırlıması
    const link = `https://dummyjson.com/products/${id.id}`
    // sayfa yüklendiğinde apide ki verilerin çekilmesi
    useEffect(() => {
        fetch(link).then(res => res.json()).then(data => {setProduct(data); setReviews(data.reviews)})
    },[])



   
  return (
    <div>
        <div>
            <Header />
        </div>
        {
            product?
            <div className='justify-center items-center p-5'>

                <div className='grid  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 '>
                    <div className='flex justify-center items-center'>
                        <img src={product.thumbnail} alt="" />
                    </div>

                    <div className='grid gird-rows-4'>
                        <div className='flex justify-center items-center mt-10'>
                            <b>{product.title}</b>
                        </div>
                        <div className='flex justify-center items-ceter text-center mt-10'>
                            <i>{product.description}</i>
                        </div>
                        <div className='flex justify-center items-center mt-10'>
                            <b className='text-red-600 text-center text-2xl'>{product.price}</b>
                        </div>
                        <div className='flex justify-center items-center mt-16 gap-10'>
                            <b className='bg-red-600 text-white p-4 rounded-xl'>SEPETE EKLE</b>
                            <b className='bg-green-600 text-white p-4 rounded-xl'>SATIN AL</b>
                        </div>
                    </div>
                </div>
            

                <div className='flex justify-center items-center mt-32 '>
                    <div className='grid-rows-2'>
                        <div className='flex  text-3xl gap-5 text-yellow-500'>
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>

                        <div className='flex justify-center items-center mt-5'>
                            <b className='font-mono text-2xl'>{product.rating}</b>
                        </div>
                    </div>
                </div>

                <div className='justify-center items-center mt-10'>
                   {
                    reviews.map((dt,i) => (
                        <Comments data={dt} key={i} />
                    ))
                   }
                </div>

            </div>


      
        :
            <div className='text-3xl font-mono  text-center flex justify-center items-center h-screen'>YÜKLENİYOR</div>

        }
        
    </div>
  )
}

export default SingleProduct