import React from 'react'

function Comments({data,key}) {
  return (
    <div key={key} className='flex border border-orange-600 rounded-xl justify-center items-center mt-5 mb-10 p-5'>
        <div className='grid grid-rows-3'>


            <div className='grid bg-orange-600 text-white px-10'>
                <div className='flex justify-center items-center'>
                    <b >{data.reviewerName}</b>
                </div>
            </div>

            <div className='grid mt-10'>
                <div className='flex justify-center items-center text-center'>
                    <i>{data.comment}</i>
                </div>
            </div>

            <div className='grid mt-10'>
                <div className='flex justify-center items-center'>
                    <i>{data.date}</i>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Comments