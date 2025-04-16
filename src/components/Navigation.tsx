import React from "react";
import { NavLink } from "react-router-dom";
const Navigation: React.FC = () => {
  return (
    <div className="pl-[70px] gap-[20%] z-10 absolute top-[10%] flex justify-between items-center text-black dark:text-white">
      <div className="text-md pr-8">
        <div className="text-slate">Work by</div>
        <div className="w-max">Alen Koikkara</div>
      </div>
      <div className="flex gap-[20%] text-md text-slate">
        <div>
          <NavLink className={({ isActive }) => isActive ? "text-white" : ""} to="/">[Home]</NavLink>
        </div>
        <div>
          <NavLink to="/blogs">Blogs</NavLink>
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
