import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between items-center gap-10 absolute bottom-5 right-5 text-black dark:text-white text-center text-sm">
      <div>LI | GH</div>
      <div className="text-xs">© 2025 Alen Koikkara</div>
    </div>
  );
};

export default Footer;
