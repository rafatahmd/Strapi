import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import strapiIcon from "../public/Strapi.full.logo.dark.jpg";
import strapiVartical from "../public/Strapi.vertical.logo.light.jpg";

const navigation = [
  { name: "Product ", href: "#", current: false },
  { name: "Solutions ", href: "#", current: false },
  { name: "Community ", href: "#", current: false },
  { name: "Docs", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
  { name: "Cloud ", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navbar() {
  return (
    <>
      <div className=" w-full top-0 h-full ">
        <Disclosure as="nav" className="bg-white border-white py-2 w-full ">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src={strapiIcon}
                        alt="Your Company"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src={strapiIcon}
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex items-center text-center gap-40">
                        <div className="flex space-x-5">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-700 hover:bg-gray-600 hover:text-white",
                                "rounded-md px-3 py-2  font-semibold"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <div className="flex items-center text-center gap-10">
                          <div className="flex items-center text-center gap-2">
                            <div className="border border-gray-300  flex gap-x-1 px-1 items-center rounded-sm bg-slate-100 ml-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                viewBox="12 12 40 40"
                              >
                                <path
                                  fill="%23333"
                                  d="M32 13.4c-10.5 0-19 8.5-19 19 0 8.4 5.5 15.5 13 18 1 .2 1.3-.4 1.3-.9v-3.2c-5.3 1.1-6.4-2.6-6.4-2.6-.9-2.1-2.1-2.7-2.1-2.7-1.7-1.2.1-1.1.1-1.1 1.9.1 2.9 2 2.9 2 1.7 2.9 4.5 2.1 5.5 1.6.2-1.2.7-2.1 1.2-2.6-4.2-.5-8.7-2.1-8.7-9.4 0-2.1.7-3.7 2-5.1-.2-.5-.8-2.4.2-5 0 0 1.6-.5 5.2 2 1.5-.4 3.1-.7 4.8-.7 1.6 0 3.3.2 4.7.7 3.6-2.4 5.2-2 5.2-2 1 2.6.4 4.6.2 5 1.2 1.3 2 3 2 5.1 0 7.3-4.5 8.9-8.7 9.4.7.6 1.3 1.7 1.3 3.5v5.2c0 .5.4 1.1 1.3.9 7.5-2.6 13-9.7 13-18.1 0-10.5-8.5-19-19-19z"
                                />
                              </svg>
                              <p className="text-xs font-medium">Star</p>
                            </div>
                            <div className="border border-gray-300  flex gap-x-1 px-1 items-center rounded-sm bg-slate-100">
                              <p className="text-xs font-medium">12389</p>
                            </div>
                          </div>
                          <div>
                            <button className="border rounded-lg bg-blue-700 border-blue-700 text-white p-2 px-6 hover:px-7 font-semibold  ">
                              Get Started
                            </button>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}

export default Navbar;
