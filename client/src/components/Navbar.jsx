import React from "react";

const landingPage = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6 font-poppins ">
      {/* <div className="max-w-5xl"> */}
      <div className="flex items-center flex-shrink-0  mr-6">
        <span className="font-semibold text-xl tracking-tight text-gray">
          Find Your Pg
        </span>
      </div>
      {/* <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> */}
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-gray mr-4 text-white"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-gray mr-4 text-white"
          >
            Examples
          </a>
        </div>
        <div>
          <button className="bg-transparent text-sm text-white border-white  hover:text-gray py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4">
            Login
          </button>
          <button className="bg-transparent text-sm text-white border-white  hover:text-gray py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Register
          </button>
          {/* <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a> */}
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default landingPage;
