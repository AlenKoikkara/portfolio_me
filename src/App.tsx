import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Photography from "./pages/Photography";
import AboutPage from "./pages/About";
import SplashScreen from "./components/SplashScreen";
import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomBar";
import { CarouselProvider } from "./context/CarouselContext";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  return (
    <CarouselProvider>
      <div className="h-dvh max-w-[1600px] relative mx-auto bg-white dark:bg-blackboard-black">
        {isInitialLoad && (
          <SplashScreen onAnimationComplete={() => setIsInitialLoad(false)} />
        )}
        {!isInitialLoad && (
          <div className="fixed z-50">
            <Navigation />
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        {isHomePage && !isInitialLoad && (
          <>
            <Footer />
            <BottomBar />
          </>
        )}
      </div>
    </CarouselProvider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
//
