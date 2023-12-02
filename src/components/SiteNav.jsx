"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

// css
import "../../public/style.css";

function SiteNav() {
  // use state for mobile device toggle
  const [isOpen, setIsOpen] = useState(false);

  // current path for conditional background
  const currnetPath = usePathname();

  //
  const route = useRouter();

  const dynamicRoute = (path) => {
    route.push(path);
    setIsOpen((i) => !i);
  };

  return (
    <div
      className={`relative w-full ${
        currnetPath === "/" ? "bg-lemon" : "bg-slate-100"
      }`}
    >
      <div className="relative w-[90%] mx-auto h-20 flex justify-evenly items-center md:justify-end">
        {/* logo  */}
        <div className="w-[50%] md:w-[20%] flex items-center">
          <p className="text-lg font-extrabold">Design</p>
          <p className="text-lg font-bold text-red">AGENCY</p>
        </div>
        {/* large device  */}
        <div className="w-[80%] hidden md:flex justify-end items-center space-x-4">
          <Link href={"/"} className="w-[100px] font-semibold">
            Home
          </Link>
          <Link href={"/team"} className="w-[100px] font-semibold">
            Team
          </Link>
          <Link href={"/service"} className="w-[100px] font-semibold">
            Service
          </Link>
          <Link href={"/projects"} className="w-[100px] font-semibold">
            Projects
          </Link>
          <Link href={"/testimonial"} className="w-[100px] font-semibold">
            Testimonial
          </Link>
          <button className="w-[100px] h-10 border border-green rounded-xl font-semibold">
            Login
          </button>
          <button className="w-[100px] h-10 border-green rounded-xl bg-green text-white font-semibold">
            Register
          </button>
        </div>
        {/* mobile device */}
        <div className="md:hidden w-[50%] flex justify-end">
          <div>
            <button
              onClick={() => setIsOpen((i) => !i)}
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center   rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              {/* <span className="sr-only">Open main menu</span> */}
              <svg
                className="text-xl font-extrabold"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="bg-[#ffffff6e] absolute flex flex-col w-[60%] items-center !justify-center space-y-5 top-1 !right-[-5%] py-5 rounded-md">
              <div
                onClick={() => dynamicRoute("/")}
                className=" font-semibold cursor-pointer hover:text-green"
              >
                Home
              </div>
              <div
                onClick={() => dynamicRoute("/team")}
                className=" font-semibold cursor-pointer hover:text-green"
              >
                Team
              </div>
              <div
                onClick={() => dynamicRoute("/service")}
                className="font-semibold cursor-pointer hover:text-green"
              >
                Service
              </div>
              <div
                onClick={() => dynamicRoute("/projects")}
                className=" font-semibold cursor-pointer hover:text-green"
              >
                Projects
              </div>
              <div
                onClick={() => dynamicRoute("/testimonial")}
                className=" font-semibold cursor-pointer hover:text-green"
              >
                Testimonial
              </div>
              <button className="w-[100px] h-10 border border-green rounded-xl font-semibold cursor-pointer hover:text-green">
                Login
              </button>
              <button className="w-[100px] h-10 border-green rounded-xl bg-green text-white font-semibold cursor-pointer hover:text-green">
                Login
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="absolute top-0 right-[-10px] w-20 h-full liner_grediant"></div>
    </div>
  );
}

export default SiteNav;
