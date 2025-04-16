import React from "react";
import LandingCard from "../components/LandingCard";
import WebLayout from "../layout/WebLayout";
import MobileLayout from "../layout/MobileLayout";
const Home: React.FC = () => {
  return (
    <div className="h-full w-full">
      {/* Mobile Layout (default) */}
      <div className="md:hidden h-full w-full">
        <MobileLayout>
          <LandingCard />
        </MobileLayout>
      </div>
      
      {/* Web Layout (md and up) */}
      <div className="hidden md:block h-full w-full">
        <WebLayout>
          <LandingCard />
        </WebLayout>
      </div>
    </div>
  );
};

export default Home;
