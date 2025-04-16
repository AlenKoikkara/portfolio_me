import React from "react";
import { NavLink } from "react-router-dom";
const Navigation: React.FC = () => {
  return (
    <div className="w-full md:w-min pl-[70px] pr-4 gap-[20%] z-10 absolute top-[10%] flex justify-between items-start md:items-center text-black dark:text-white">
      <div className="text-md md:pr-8">
        <div className="text-slate">Work by</div>
        <div className="w-max">Alen Koikkara</div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-[20%] text-right md:text-center text-md text-slate">
        <div>
          <NavLink className={({ isActive }) => isActive ? "text-blackboard-black dark:text-white" : ""} to="/">[Home]</NavLink>
        </div>
        <div>
          <NavLink className={({ isActive }) => isActive ? "text-blackboard-black dark:text-white" : ""} to="/blogs">Blogs</NavLink>
        </div>
        <div>
          <NavLink to="/photography">Photography</NavLink>
        </div>
        <div>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
