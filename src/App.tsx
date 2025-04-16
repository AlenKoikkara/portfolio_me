import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Photography from './pages/Photography';
import About from './pages/About';
import './App.css';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div className="h-screen  bg-white dark:bg-blackboard-black">
        <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/about" element={<About />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
