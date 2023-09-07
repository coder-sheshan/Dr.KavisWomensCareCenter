import React from "react";
import Offer from '../Assets/Surro.jpg'

const Appoint = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="fixed inset-0 backdrop-blur backdrop-filter backdrop-opacity-50">
        <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 h-[500px] mx-20 my-20">
          <img
            alt="Trainer"
            src={Offer}
            className="h-32 w-full object-cover md:h-full"
          />

          <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8 bg-pink-500">
            <div className="flex justify-end">
              <button
                className="inline-block rounded-lg border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                onClick={closeModal}
              >
              Close
              </button>
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest">
              Run with the packs
            </p>

            <h2 className="mt-6 font-black uppercase">
              <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
                Get 20% off
              </span>

              <span className="mt-2 block text-sm">
                On your next order over $50
              </span>
            </h2>

            <a
              className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
              href=""
            >
              Get Discount
            </a>

            <p className="mt-8 text-xs font-medium uppercase text-gray-400">
              Offer valid until 24th March, 2021 *
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Appoint;
