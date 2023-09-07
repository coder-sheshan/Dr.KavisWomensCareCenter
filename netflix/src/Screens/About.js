import React from "react";
import Footer from "../Components/Footer";
import Paronama from "../Components/Paronama";

const About = () => {
  return (
    <div>
      <Paronama/>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-pink-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                  <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    We turn your Hope into Happiness
                  </h2>

                  <p className=" text-pink-500 md:mt-4 md:block text-justify">
                    Dr. Kavis Fertility & Women's Care Centre, the fertility
                    specialist centre devoted exclusively to getting you
                    pregnant. We have been providing fertility expertise for
                    over two decades, helping couples have children across three
                    continents. And now we are a part of Salem's leading IVF
                    group, We offer the latest technology in fertility medicine.
                  </p>
                  <p className=" text-pink-500 md:mt-4 md:block text-justify">
                    Since our establishment, Dr. Kavis Fertility & Women's Care
                    Centre has strived to continuously improve on the fertility
                    specialist treatment provided, and attend to your needs with
                    the utmost care. At our fertility centre, we also provide
                    support links to help ensure you make positive changes to
                    your diet and lifestyle to achieve better outcomes.
                  </p>

                  {/* <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
