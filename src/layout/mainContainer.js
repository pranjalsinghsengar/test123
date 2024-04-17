import React from "react";
import SideNav from "../components/sideNav";

const MainContainer = ({ children }) => {
  return (
    <div className='bg-white h-screen flex items-center '>
      <div className='h-[95vh] w-full flex items-center mx-5 gap-3'>
        <SideNav />
        <div className='bg-slate-200 w-full h-full rounded-2xl p-3 '>{children}</div>
      </div>
    </div>
  );
};

export default MainContainer;
