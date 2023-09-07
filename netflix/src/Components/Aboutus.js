import React, { useEffect, useState } from 'react';
import Baby from '../Assets/Smallbaby.jpg';

const Aboutus = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`transform transition-opacity duration-500 ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
    }`}>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            We turn your Hope into Happiness
            </h2>

            <p className=" text-pink-500 md:mt-4 md:block text-justify">
            Dr. Kavis Fertility & Women's Care Centre, the fertility specialist centre devoted exclusively to getting you pregnant. We have been providing fertility expertise for over two decades, helping couples have children across three continents. And now we are a part of Salem's leading IVF group, We offer the latest technology in fertility medicine.
            </p>
            <p className=" text-pink-500 md:mt-4 md:block text-justify">
                Since our establishment, Dr. Kavis Fertility & Women's Care Centre has strived to continuously improve on the fertility specialist treatment provided, and attend to your needs with the utmost care. At our fertility centre, we also provide support links to help ensure you make positive changes to your diet and lifestyle to achieve better outcomes.
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

        <img
          alt="Baby"
        src={Baby}
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </div>
  );
};

export default Aboutus;
