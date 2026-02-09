import React from "react";

function header() {
  return (
    <>
      <div>
        <nav className="px-20 bg-blue-700 text-white pt-7">
          <div className="flex justify-between items-center">
            <h3 className="text-4xl">Blogi</h3>
            <ul className="flex gap-6">
              <li>Featers</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
            <div>
              <button className="py-1 px-5">Login</button>
              <button className="py-1 px-5 border">Sign Up</button>
            </div>
          </div>
          <div className="text-center py-10">
            <h1 className="text-4xl">Blogs</h1>
            <p>All New About Blog In One Place</p>
          </div>
        </nav>
      </div>
    </>
  );
}

export default header;
