import React from "react";

function Section() {
  return (
    <>
      <div className="flex gap-4 justify-center items-center text-center ">
        <p className=" px-2  rounded-md text-white bg-[#a57cd6] text-sm uppercase font-semibold my-10">
          Cloud
        </p>
        <p className="text-gray-300">
          Try Strapi Cloud for 14 days{" "}
          <a className="text-[#ab7be7]" href="#">
            deploy your app!
          </a>
        </p>
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-6xl p-2 text-white text-center leading-[70px] ">
          Manage Any Content. <br />
          Anywhere.
        </p>
      </div>
      <div>
        <p className="text-gray-300 flex justify-center p-2 mt-2 text-lg">
          Strapi is the leading open-source headless CMS. 100% JavaScript and
          fully customizable.
        </p>
      </div>
      <div className="flex justify-center"></div>
      <div className=" md:w-1/4 mx-auto flex flex-col gap-4 pb-4 justify-center ">
        <div className="flex justify-center w-full">
          <input
            className="bg-[#111736] appearance-none w-full   rounded  py-3 px-4 text-white leading-tight mt-10"
            id="inline-password"
            type="password"
            placeholder="npx create-strapi-app@latest my-project"
          />
        </div>
        <div className="flex justify-between gap-10 w-full mt-1 ">
          <button className="border w-full rounded-md bg-blue-700 border-blue-700 font-semibold text-white p-2 py-3  ">
            Get Started
          </button>
          <button className="border w-full rounded-md bg-white border-blue-700 text-gray-800 font-semibold p-2    ">
            Try the live demo
          </button>
        </div>
      </div>
    </>
  );
}

export default Section;
