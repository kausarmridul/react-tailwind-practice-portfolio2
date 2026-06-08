import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./sections/Navbar";
import MobileMenu from "./sections/MobileMenu";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "./sections/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <ToastContainer theme="dark" autoClose={3000} />
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
      >
        <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <MobileMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
