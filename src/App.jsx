import LandingPage from "./components/Landing/LandingPage";
import Navbar from "./components/Landing/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About/About";
import TechStack from "./components/About/TechStack";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/projects/Projects";
import Blogs from "./components/Blogs/Blogs";

function App() {
  const location = useLocation();

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage key={location} />
              <About />
              <TechStack />
              <Contact />
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <Blogs key={location} />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Projects key={location} />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
