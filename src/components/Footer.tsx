import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between items-center gap-10 absolute bottom-5 right-5 text-black dark:text-white text-center">
      <div className="flex text-md gap-2">
        <div className="cursor-pointer hover:text-linkedin transition-all duration-300">LI</div>
        <div>|</div>
        <div className="cursor-pointer hover:text-github transition-all duration-300">GH</div>
      </div>
      <div className="text-xs">© 2025 Alen Koikkara</div>
    </div>
  );
};

export default Footer;
