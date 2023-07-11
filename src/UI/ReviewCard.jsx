import React from 'react'

function ReviewCard() {
  return (
    <div className='grid grid-cols-3 border-none rounded-lg  w-2/3 mx-auto '>
        <div>
        <div className='p-10 bg-white border-none rounded-lg shadow-lg'>
            <img src='https://d2zv2ciw0ln4h1.cloudfront.net/uploads/vercel_logotype_dark_bdcc70f85c.png ' alt='sd' className='h-10 w-auto'/>
            <p className='mt-10'>Strapi and Next.js both build on the same philosophy: open source is the path to success. Combine them with Vercel deployment and you have a stack with virtually infinite scalability, global performance, and security.</p>
        </div>
        </div>
        <div className='p-20'>
            <img src='https://d2zv2ciw0ln4h1.cloudfront.net/uploads/vercel_logotype_dark_bdcc70f85c.png ' alt='sd' className='h-10 w-auto'/>
            <p className='mt-4'>Strapi and Next.js both build on the same philosophy: open source is the path to success. Combine them with Vercel deployment and you have a stack with virtually infinite scalability, global performance, and security.</p>
        </div>
        <div className='p-20'>
            <img src='https://d2zv2ciw0ln4h1.cloudfront.net/uploads/vercel_logotype_dark_bdcc70f85c.png ' alt='sd' className='h-10 w-auto'/>
            <p className='mt-4'>Strapi and Next.js both build on the same philosophy: open source is the path to success. Combine them with Vercel deployment and you have a stack with virtually infinite scalability, global performance, and security.</p>
        </div>
      
    </div>
  )
}

export default ReviewCard
