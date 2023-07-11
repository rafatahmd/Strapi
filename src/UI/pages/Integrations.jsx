import React from 'react'
import Card from '../Card'

function Integrations() {
  return (
    <>
    
    <div className="mx-auto w-8/12  bg-gradient-to-b from-[#e8fafc] to-white my-10 ">
    <div className="border-none w-full py-8">
      <div className="">
        <p className="flex justify-center text-sm uppercase font-bold text-green-600 mt-24 pt-10">
        INTEGRATIONS
        </p>
        <p className="text-5xl font-bold w-4/5 mx-auto text-center text-indigo-900 flex justify-center mt-4 py-5">
        All your favorite dev tools work with Strapi.
        </p>
        <p className=" mx-auto text-center w-2/5 text-xl text-gray-700 mt-4 py-5   ">
        Connect your favorite databases, frontend frameworks, or static site generators. Choose where you want to host your websites. Integrate with your favorite tools, and work with the best of each world. No vendor lock-in.
        </p>
      </div>
    </div>
  </div>
    <Card/>
    </>
  )
}

export default Integrations
