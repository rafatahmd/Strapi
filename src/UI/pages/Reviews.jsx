import React from 'react'
import ReviewCard from '../ReviewCard'

function Reviews() {
  return (
    <div>
        <div className="mx-auto w-full  bg-gradient-to-b from-[#e8fafc] to-white my-10 ">
    <div className="border-none w-full py-8">
      <div className="">
        <p className="flex justify-center text-sm uppercase font-bold text-green-600 mt-24 pt-10">
        reviews
        </p>
        <p className="text-5xl font-bold w-4/5 mx-auto text-center text-indigo-900 flex justify-center mt-4 py-5">
        Here’s what people have to say about us.
        </p>
       
      </div>
    </div>
    <ReviewCard/>
  </div>
 
    </div>
  )
}

export default Reviews
