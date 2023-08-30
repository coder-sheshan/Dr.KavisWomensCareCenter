import React from "react";
import Logo from '../Assets/LOGO.png';

const Navbar = () => {
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

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-pink-800 antialiased hover:bg-pink-600 rounded-xl px-5 hover:text-white font-poppins text-lg  transition"
                      href="/"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-pink-800 antialiased hover:bg-pink-600 rounded-xl px-5 hover:text-white font-poppins text-lg  transition"
                      href="/"
                    >
                      Services
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
                      href="/"
                    >
                      Gallery
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-pink-800 antialiased hover:bg-pink-600 rounded-xl px-5 hover:text-white font-poppins text-lg  transition"
                      href="/"
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
