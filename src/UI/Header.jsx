import React from 'react'

function Header() {
  return (
    <div className="mx-auto w-8/12  bg-gradient-to-b from-[#e8fafc] to-white ">
    <div className="border-none w-full">
      <div className="">
        <p className="flex justify-center text-sm uppercase font-bold text-blue-600 mt-24 pt-10">
          step-by-step-guide
        </p>
        <p className="text-5xl font-bold text-indigo-900 flex justify-center mt-4 py-5">
          How does it work?
        </p>
        <p className=" mx-auto text-center w-2/5 text-xl text-gray-700 mt-4 py-5   ">
          Get your backend done in minutes instead of weeks. Easily build
          customizable content API and use them with a modern tech stack.
        </p>
      </div>
      
    </div>
  </div>
  )
}

export default Header
