import React from "react";
import WebLayout from "../layout/WebLayout";

const Home: React.FC = () => {
  return (
    <WebLayout>
      <div className="flex py-[30px] flex-col justify-center items-start gap-[25px] text-4xl h-full w-full font-bold bg-blackboard-black dark:bg-white">
        <div className="w-full flex flex-col justify-center items-start gap-[16px] text-white dark:text-blackboard-black text-[clamp(2rem,6vw,6rem)] font-[300] transition-all duration-300 relative">
          <div className="px-[30px] leading-[1]">I believe in <span className="text-sun">change</span>,</div>
          <div className="h-[.5px] mt-2 w-full bg-slate opacity-50"></div>
          <div className="px-[30px] leading-[1]"><span className="text-sun">Change</span> that drives</div>
          <div className="h-[.5px] mt-2 w-full bg-slate opacity-50"></div>
          <div className="px-[30px] leading-[.8]">innovation.</div>
        </div>
        <div className="px-[30px] text-slate text-[clamp(1rem,1.3vw,1.3rem)] font-[300] transition-all duration-300">
          Developer | Designer | Photographer
        </div>
      </div>
    </WebLayout>
  );
};

export default Home;
