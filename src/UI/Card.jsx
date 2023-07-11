import React from "react";

function Card(): JSX.Element {

    const cardInfo = [
        {
            logoUrl:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/algolia-blue-mark_954cfaaad8.svg",
            title:'Algolia',
            desc:'Algolia plugin for Strapi',
            foot:'get packages'
        },
        {
            logoUrl:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Ruby_On_Rails_Logo_e267507b7e.svg",
            title:'Rails',
            desc:'Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT',
            foot:'create project'
        },
        {
            logoUrl:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/algolia-blue-mark_954cfaaad8.svg",
            title:'Algolia',
            desc:'Algolia plugin for Strapi',
            foot:'get packages'
        },
        {
            logoUrl:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/algolia-blue-mark_954cfaaad8.svg",
            title:'Algolia',
            desc:'Algolia plugin for Strapi',
            foot:'get packages'
        },
        {
            logoUrl:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/algolia-blue-mark_954cfaaad8.svg",
            title:'Algolia',
            desc:'Algolia plugin for Strapi',
            foot:'get packages'
        },
        {
            logoUrl:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/algolia-blue-mark_954cfaaad8.svg",
            title:'Algolia',
            desc:'Algolia plugin for Strapi',
            foot:'get packages'
        },
        {
            logoUrl:"https://d2zv2ciw0ln4h1.cloudfront.net/uploads/algolia-blue-mark_954cfaaad8.svg",
            title:'Algolia',
            desc:'Algolia plugin for Strapi',
            foot:'get packages'
        },
    ]


  return (
    // // <div className='grid grid-cols-3 mx-auto  border shadow-lg' >
    // //     <div className='flex flex-row justify-center items-center'>
    // //     <img src='https://d2zv2ciw0ln4h1.cloudfront.net/uploads/algolia-blue-mark_954cfaaad8.svg' alt='sd'/>
    // //     <p>dfdfdf</p>
    // //     <p>dfdfdfdf</p>
    // //     </div>

    // </div>
    <>
    <div className="grid grid-cols-3 gap-6 mx-auto w-6/12 ">
        {cardInfo.map((item)=>(
      <div className="block shadow-lg rounded-lg py-4 bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className=" flex justify-center items-center mt-6 dark:border-neutral-600 dark:text-neutral-50">
          <img
           className="h-12 w-auto"
            src={item.logoUrl}
            alt="sd"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
            {item.title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {item.desc}
          </p>
        </div>
        <div className="flex gap-2 items-center   text-green-500 justify-center border-t-2 uppercase text-sm font-semibold border-neutral-100 px-6 py-3">
          <p className="">{item.foot}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
         
      </div>
       
      

        ))}
    </div>
    <div className="flex justify-center items-center py-10 text-gray-600 ">
        <button className=" border font-medium text-gray-500 p-2 px-5 uppercase bg-gray-100 text-sm rounded-lg my-10 ">see more</button>
        
    </div>
    </>
  );
}

export default Card;
