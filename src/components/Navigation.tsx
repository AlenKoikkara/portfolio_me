import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation: React.FC = () => {
  return (
    <div className="pl-[70px] gap-[45%] z-10 absolute top-[10%] flex justify-between items-center text-black dark:text-white">
      <div>
        <div>Alen</div>
        <div>Koikkara</div>
      </div>
      <div>
        <NavLink to="/">[Home]</NavLink>
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
  );
};

export default Navigation; 