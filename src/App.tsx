import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Photography from "./pages/Photography";
import AboutPage from "./pages/About";
import SplashScreen from "./components/SplashScreen";
import { useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomBar";
import { CarouselProvider } from "./context/CarouselContext";

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (!isInitialLoad && isHomePage) {
      navigate("/", { state: { isInitialLoad: false } });
    }
  }, [isInitialLoad, isHomePage, navigate]);

  return (
    <CarouselProvider>
      <div className="h-dvh max-w-[1600px] relative mx-auto bg-white dark:bg-blackboard-black">
        {isInitialLoad && (
          <SplashScreen onAnimationComplete={() => setIsInitialLoad(false)} />
        )}
        {!isInitialLoad && (
          <div className="md:fixed z-50">
            <Navigation />
          </div>
        )}
        <Routes>
          <Route path="/" element={!isInitialLoad ? <Home /> : null} />
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
