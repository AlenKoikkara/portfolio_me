import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => {
    return (
      <div 
        onMouseEnter={() => setHoveredItem(to)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <NavLink to={to}>
          {({ isActive }) => (
            <motion.div className="relative overflow-hidden">
              <motion.span
                className={`relative z-10 ${isActive ? "text-blackboard-black dark:text-white" : "text-slate"}`}
              >
                {children}
              </motion.span>
              <motion.span
                className={`absolute inset-0 z-20 ${isActive ? "text-blackboard-black dark:text-white" : "text-white"}`}
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: hoveredItem === to ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }}
                transition={{ duration: 0.6 }}
              >
                {children}
              </motion.span>
            </motion.div>
          )}
        </NavLink>
      </div>
    );
  };

  return (
    <div className="w-full md:w-min pl-[70px] pr-4 gap-[20%] z-10 absolute top-[7%] flex justify-between items-start md:items-center text-black dark:text-white">
      <div className="text-md md:pr-8">
        <div className="text-slate">Work</div>
        <div className="w-max">by Alen Koikkara</div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-[20%] text-right md:text-center text-md text-slate">
        <NavItem to="/">[Home]</NavItem>
        <NavItem to="/blogs">Blogs</NavItem>
        <NavItem to="/photography">Photography</NavItem>
        <NavItem to="/about">About</NavItem>
      </div>
    </div>
  );
};

export default Navigation;
