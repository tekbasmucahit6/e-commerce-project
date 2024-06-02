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
            <div className='flex justify-center items-center p-5'>
            <div className='grid'>
                
                
                <div className='flex justify-center items-center'>
                    <img className='max-h-48' src={product.thumbnail} alt="" />
                </div>


                <div className='flex justify-center items-center mt-10'>
                    <b>{product.title}</b>
                </div>

                <div className='flex justify-center items-center text-center mt-10'>
                    <i>{product.description}</i>
                </div>

                <div className='flex justify-center items-center gap-x-16 mt-10'>
                <b className='text-yellow-500 flex items-center gap-3'><FaRegStar /> {product.rating}</b>
                <b className='text-red-600 flex items-center gap-3'><IoPricetag /> {product.price} </b>
                </div>

                <div className='justify-center items-center mt-10'>
                   {
                    reviews.map((dt,i) => (
                        <Comments data={dt} key={i} />
                    ))
                   }
                </div>

            </div>


        </div>
        :
            <div className='text-3xl font-mono  text-center flex justify-center items-center h-screen'>YÜKLENİYOR</div>

        }
        
    </div>
  )
}

export default SingleProduct