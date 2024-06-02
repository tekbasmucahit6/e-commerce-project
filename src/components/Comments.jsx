import React from 'react'

function Comments({data,key}) {
  return (
    <div key={key} className='border-4 border-dark flex justify-center items-center mt-5 mb-10'>
        <div className='grid grid-rows-3'>


            <div className='grid grid-cols-2'>
                <div className='flex justify-center items-center'>
                    <b >{data.reviewerName}</b>
                </div>


                <div className='flex justify-center items-center'>
                    <i>{data.date}</i>
                </div>
            </div>

            <div className='grid mt-10'>
                <div className='flex justify-center items-center text-center'>
                    <i>{data.comment}</i>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Comments