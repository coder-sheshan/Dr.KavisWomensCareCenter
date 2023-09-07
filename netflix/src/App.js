import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";
import ServiceScr from "./Screens/ServiceScr";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import ContactsSrc from "./Screens/ContactsSrc";
import Consultant from "./Screens/Consultant";
import { useEffect, useState } from "react";
import Testimonial from "./Components/Testimonial";
import TestimoSrc from "./Screens/TestimoSrc";
import Appoint from "./Components/Appoint";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <div className=" scroll-smooth transition-opacity duration-500">
        <div>
          <Header />
          <Navbar />
          {/* <Appoint isOpen={isModalOpen} closeModal={closeModal} /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<ServiceScr />} />
            <Route path="/contact" element={<ContactsSrc />} />
            <Route path="/consultant" element={<Consultant />} />
            <Route path="/testimonial" element={<TestimoSrc />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
