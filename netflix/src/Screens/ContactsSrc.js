import React from "react";
import Footer from "../Components/Footer";
import Paronama from "../Components/Paronama";

const ContactsSrc = () => {
  return (
    <div>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.333085311671!2d78.14133387366925!3d11.670789742063663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf13215c6d615%3A0x1c56b1be99908a92!2sSKS%20Women&#39;s%20Centre%20%26%20Fertility%20Foundation!5e0!3m2!1sen!2sin!4v1693406174781!5m2!1sen!2sin" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-gray-300">
          <iframe
            class="w-full h-full absolute top-0 left-0  contrast-125 opacity-60"
            frameborder="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.33315931504!2d78.14133387505518!3d11.670784488537684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf13215c6d615%3A0x1c56b1be99908a92!2sSKS%20Women&#39;s%20Centre%20%26%20Fertility%20Foundation!5e0!3m2!1sen!2sin!4v1694027150118!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-pink-700 text-lg mb-1 font-medium title-font">
              BOOK AN APPOINTMENT
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Book an Appointment for Diagnosis and Treatment
            </p>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Mobile Number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button class="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
              Sumbit
            </button>
            <p class="text-xs text-gray-500 mt-3">
            “Faith is taking the first step, even when you don’t see the whole staircase.”
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactsSrc;
