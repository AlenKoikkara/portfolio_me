import React from "react";
import WebLayout from "../layout/WebLayout";

const Home: React.FC = () => {
  return (
    <WebLayout>
      <div className="p-[30px] flex flex-col justify-between items-start text-4xl h-full w-full font-bold bg-blackboard-black dark:bg-white">
        <div className="text-white dark:text-blackboard-black text-3xl sm:text-[50px] md:text-[50px] lg:text-[85px] xl:text-[100px] 2xl:text-[120px] font-[300]">I believe in <span className="text-sun">change</span>, <br /> <span className="text-sun">Change</span> that drives innovation.</div>
        <div className="text-slate text-[25px] font-[300]">Developer | Designer | Photographer</div>
      </div>
    </WebLayout>
  );
};

export default Home;
