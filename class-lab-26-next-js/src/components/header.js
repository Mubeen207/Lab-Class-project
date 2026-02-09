import React from "react";

function header() {
  return (
    <>
      <div>
        <nav className="bg-linear-to-r from-blue-700 to-blue-900 text-white px-6 md:px-20 py-6">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold tracking-wide cursor-pointer">
              Blogi
            </h3>

            <ul className="hidden md:flex gap-8 font-medium">
              <li className="hover:text-gray-200 cursor-pointer transition">
                Features
              </li>
              <li className="hover:text-gray-200 cursor-pointer transition">
                Pricing
              </li>
              <li className="hover:text-gray-200 cursor-pointer transition">
                Contact
              </li>
            </ul>
            <div className="flex gap-4">
              <button className="px-5 py-2">Login</button>
              <button className="px-5 py-2 border text-white font-semibold">
                Sign Up
              </button>
            </div>
          </div>

          <div className="text-center py-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Blogs
            </h1>
            <p className="text-lg text-blue-100">
              All new about blog in onr place
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}

export default header;
