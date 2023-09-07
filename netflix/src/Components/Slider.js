import React, {useState, useEffect} from "react";
import slide from "../Assets/Slider1.jpg";
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Slider = () => {
  useEffect(() => {
    AOS.init({duration: 3000});
  },[])
  return (
    <div data-aos="fade-in">
      <section className="relative bg-cover bg-center bg-no-repeat"
        style={{backgroundImage:`url(${slide})`}}
      >
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-2xl text-pink-500 font-extrabold sm:text-3xl">
              <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["தாய்மை கனவு மெய்ப்பட வேண்டும்"]
              }}
              />
              <strong className="block  text-3xl font-semibold mt-5 font-poppins text-rose-700">
                Hope to Happiness
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Dr.KAVITHA NAGARAJAN MD.,(OG), MRCOG (UK), Fellow (Repr.Med), MICG
              Clinical Director & Consultant Repr. Med
            </p>

            {/* <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
