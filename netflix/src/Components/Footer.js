import React from "react";
import Logo from "../Assets/LOGO.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-800">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="bg-gray-100 rounded-xl mr-24 pl-5 p-2">
                <img src={Logo} alt="logo" />
              </div>
              <h2 className="mt-2 max-w-xs text-pink-600 dark:text-pink-200">
                Visit our Center
              </h2>
              <p className="mt-2 max-w-xs text-gray-100 dark:text-gray-200">
                50, 3rd Floor, SKS Towers, 1, Brindavan Rd, Salem, Tamil Nadu
                636004
              </p>

              <ul className="mt-8 flex gap-6">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-blue-700 transition hover:opacity-75 dark:text-blue-200"
                  >
                    <span className="sr-only">Facebook</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-orange-700 transition hover:opacity-75 dark:text-orange-200"
                  >
                    <span className="sr-only">Instagram</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-blue-700 transition hover:opacity-75 dark:text-blue-200"
                  >
                    <span className="sr-only">Twitter</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
              </ul>
              <p className="text-xs text-pink-500 mt-4 dark:text-gray-200">
            Opening Hours :  Mon - Sat : 9:30am to 10:00pm  Sunday : 10:30am to 2:00pm
          </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-pink-600 dark:text-white">
                  Services
                </p>

                <ul className="mt-6 space-y-5 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75 dark:text-gray-200"
                    >
                      Intra Uterine Insemination (IUI)
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75 dark:text-gray-200"
                    >
                      In Vitro Fertilization (IVF)
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75 dark:text-gray-200"
                    >
                      Intra Cytoplasmic Sperm Injection (ICSI)
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-pink-600 dark:text-white">
                  Advanced
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75 dark:text-gray-200"
                    >
                      Advanced Andrology Lab
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75 dark:text-gray-200"
                    >
                      3D & 4D Ultrasound
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75 dark:text-gray-200"
                    >
                      Poly Cystic Ovary Syndrome (PCOS)
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75 dark:text-gray-200"
                    >
                      Cryopreservation of Sperms and Embryos
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75 dark:text-gray-200"
                    >
                      Surrogacy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-pink-600 dark:text-white">
                  Call Us Now
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75 dark:text-gray-200"
                    >
                      +91 94434 57747
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75 dark:text-gray-200"
                    >
                      +91 94434 57747
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-pink-600 dark:text-white">
                  Mail Us
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75 dark:text-gray-200"
                    >
                      drkaviprakash@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-100 dark:text-gray-200">
            &copy; 2023. Dr.Kavi's Womens Care center. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
