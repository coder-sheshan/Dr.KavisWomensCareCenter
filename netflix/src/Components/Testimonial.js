import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Paro from "../Assets/paro.jpg";
import Marquee from "react-fast-marquee";
import Services from "./Services";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);
  return (
    <div data-aos="zoom-in">
      <h1 className="text-xl flex justify-center font-normal">Read trusted reviews from our customers</h1>
      <div className=" h-[250px] py-5 px-5 mb-5">
        <Marquee speed={30}>
          <div className=" h-[250px] mx-2">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
              <div className="h-32 rounded-lg bg-gray-100">
                <article className="rounded-lg border w-[400px] border-gray-100 bg-pink-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                  <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-pink-500">
                      Manoesruthy Yokesh Raj
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    "It's an amazing experience for me to take treatment here.I
                    have never been to hospital for any other treatment or for
                    any other reasons, but here when they were about to start
                    the treatment I was nervous and frightened.But when I met Dr
                    Kavitha Nagarajan mam, she interacted with us humbly and
                    explained about the treatment clearly. After that I felt
                    more comfortable. Even the staffs working there were nice
                    and they made me to get rid of my fear."
                  </p>

                  <a
                    href="/testimonial"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                  >
                    Find out more
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      &rarr;
                    </span>
                  </a>
                </article>
              </div>
              <div className="h-32 rounded-lg bg-gray-100">
                <article className="rounded-lg border w-[400px] border-gray-100 bg-pink-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                  <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-pink-500">
                      Manoesruthy Yokesh Raj
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    "It's an amazing experience for me to take treatment here.I
                    have never been to hospital for any other treatment or for
                    any other reasons, but here when they were about to start
                    the treatment I was nervous and frightened.But when I met Dr
                    Kavitha Nagarajan mam, she interacted with us humbly and
                    explained about the treatment clearly. After that I felt
                    more comfortable. Even the staffs working there were nice
                    and they made me to get rid of my fear."
                  </p>

                  <a
                    href="/testimonial"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                  >
                    Find out more
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      &rarr;
                    </span>
                  </a>
                </article>
              </div>
              <div className="h-32 rounded-lg bg-gray-100">
                <article className="rounded-lg border w-[400px] border-gray-100 bg-pink-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                  <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-pink-500">
                      Manoesruthy Yokesh Raj
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    "It's an amazing experience for me to take treatment here.I
                    have never been to hospital for any other treatment or for
                    any other reasons, but here when they were about to start
                    the treatment I was nervous and frightened.But when I met Dr
                    Kavitha Nagarajan mam, she interacted with us humbly and
                    explained about the treatment clearly. After that I felt
                    more comfortable. Even the staffs working there were nice
                    and they made me to get rid of my fear."
                  </p>

                  <a
                    href="/testimonial"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                  >
                    Find out more
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      &rarr;
                    </span>
                  </a>
                </article>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
