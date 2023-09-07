import React, {useState, useEffect} from "react";
import Doctor from "../Components/Doctor";
import Footer from "../Components/Footer";
import Paronama from "../Components/Paronama";

const Consultant = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-pink-50">
      <div className={`fade-in-container ${isVisible ? 'fade-in' : ''}`}>
      <Paronama />
      <Doctor />
      <Footer />
      </div>
    </div>
  );
};

export default Consultant;
