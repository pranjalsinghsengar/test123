import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();
  const [activeMenu, setactiveMenu] = useState();
  const menu = [
    { name: "dashboard", location: "/" },
    { name: "items", location: "/items" },
  ];
  return (
    // <div className='x h-full   flex justify-center items-center'>
    <div className='w-[15%] text-center bg-slate-200 h-full rounded-2xl overflow-hidden px-3'>
      <div className='my-5 font-bold text-3xl text-red-500 '>LOGO</div>
      <div className='flex flex-col justify-center mt-52 '>
        {menu.map((item, i) => {
          return (
            <div
              key={i}
              className={`text-black  border-gray-300 w-full py-3 cursor-pointer text-lg font-semibold  hover:rounded-lg  
              ${
                activeMenu === location.pathname
                  ? "bg-black/10"
                  : "hover:bg-black/10"
              }
              `}
              onClick={() => setactiveMenu(item.location)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
