// import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Return() {
  return (
    <>
      <div>
        <button className="text-2xl mb-5 px-4  border-gray-800 hover:bg-gray-200  rounded bg-gray-300">
          <Link to="/">Return</Link>
        </button>
      </div>
      <Outlet />
    </>
  );
}

export default Return;
