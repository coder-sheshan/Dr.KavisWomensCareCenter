import React, { useCallback, useState } from "react";
import Logo from "../Assets/LOGO.png";
import Appoint from "./Appoint";

const MobileMenuItems = () => {
  return (
    <div class="md:hidden bg-pink-600">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          href="/#"
        >
          Home
        </a>
        <a
          class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
          href="/#"
        >
          Gallery
        </a>
        <a
          class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          href="/#"
        >
          Content
        </a>
        <a
          class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          href="/#"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    <Appoint />;
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return (
    <div>
      <nav class="bg-white dark:bg-gray-800  shadow ">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12 pb-3">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <img src={Logo} alt="Logo" />
              </a>
            </div>
            <div class="hidden md:block">
              <div class="flex items-baseline ml-10 space-x-10">
                <a
                  class="text-pink-800 antialiased hover:bg-pink-600 rounded-xl px-5 hover:text-white font-poppins text-xl  transition"
                  href="/"
                >
                  Home
                </a>
                <a
                  class="text-pink-800 antialiased hover:bg-pink-600 rounded-xl px-5 hover:text-white font-poppins text-xl  transition"
                  href="/about"
                >
                  About
                </a>
                <a
                  class="text-pink-800 antialiased hover:bg-pink-600 rounded-xl px-5 hover:text-white font-poppins text-xl  transition"
                  href="/service"
                >
                  Services
                </a>
                <a
                  class="text-pink-800 antialiased hover:bg-pink-600 rounded-xl px-5 hover:text-white font-poppins text-xl  transition"
                  href="/consultant"
                >
                  Consultant
                </a>
                <a
                  class="text-pink-800 antialiased hover:bg-pink-600 rounded-xl px-5 hover:text-white font-poppins text-xl  transition"
                  href="/testimonial"
                >
                  Testimonials
                </a>
                <a
                  class="text-pink-800 antialiased hover:bg-pink-600 rounded-xl px-5 hover:text-white font-poppins text-xl  transition"
                  href="/contact"
                >
                  Contact
                </a>
              </div>
            </div>

            <div class="block">
              <div class="flex items-center ml-4 md:ml-6">
                <a
                  className="rounded-md bg-pink-500 px-5 py-2.5 text-xs font-medium text-white shadow"
                  href="/"
                  onClick={togglePopup}
                >
                  APPOINTMENT
                </a>
              </div>
            </div>
            <div class="flex -mr-2 md:hidden">
              <button
                onClick={toggleMobileMenu}
                class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* to do design the nav bar  */}
        {isMobileMenuOpen ? <MobileMenuItems /> : null}
      </nav>
    </div>
  );
  return (
    <div className="mb-3">
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <img src={Logo} alt="Logo" />
              </a>
            </div>

            <div className="hidden lg:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-pink-800 antialiased hover:bg-pink-600 rounded-xl px-5 hover:text-white font-poppins text-lg  transition"
                      href="/"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-pink-800 antialiased hover:bg-pink-600 rounded-xl px-5 hover:text-white font-poppins text-lg  transition"
                      href="/about"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-pink-800 antialiased hover:bg-pink-600 rounded-xl px-5 hover:text-white font-poppins text-lg  transition"
                      href="/service"
                    >
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-pink-800 antialiased hover:bg-pink-600 rounded-xl px-5 hover:text-white font-poppins text-lg  transition"
                      href="/consultant"
                    >
                      Consultant
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-pink-800 antialiased hover:bg-pink-600 rounded-xl px-5 hover:text-white font-poppins text-lg  transition"
                      href="/"
                    >
                      Testimonials
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-pink-800 antialiased hover:bg-pink-600 rounded-xl px-5 hover:text-white font-poppins text-lg  transition"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 ">
                <a
                  className="rounded-md bg-pink-500 px-5 py-2.5 text-xs font-medium text-white shadow"
                  href="/"
                  onClick={togglePopup}
                >
                  APPOINTMENT
                </a>
                {/* <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="/"
                  >
                    Register
                  </a>
                </div> */}
              </div>

              {/* <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </header>{" "}
    </div>
  );
};

export default Navbar;
