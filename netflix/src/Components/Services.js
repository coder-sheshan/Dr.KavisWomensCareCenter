import React, {useState, useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({duration: 800});
  },[])
  return (
    <div className="h-100% w-[100vw] p-5 overflow-hidden">
      <h1 className="text-xl flex justify-center align-middle font-normal p-5">
        Our Services
      </h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <article className="rounded-lg border border-gray-100 bg-pink-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6" data-aos="fade-right">
          {/* <span className="inline-block rounded bg-blue-600 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </span> */}

          <a href="#">
            <h3 className="mt-0.5 text-lg font-medium text-rose-500">
              Intrauterine insemination (IUI)
            </h3>
          </a>

          <p className="mt-2  text-sm/relaxed ">
            Services Intrauterine insemination (IUI) Intrauterine insemination
            (IUI) — a type of artificial insemination — is a procedure for
            treating infertility. Sperm that have been washed and concentrated
            are placed directly in your uterus around the time your ovary
            releases one or more eggs to be fertilized.
          </p>

          <a
            href="#"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Read more
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </article>

        <article className="rounded-lg border border-gray-100 bg-pink-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6" data-aos="zoom-in">
          {/* <span className="inline-block rounded bg-blue-600 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </span> */}

          <a href="#">
            <h3 className="mt-0.5 text-lg font-medium text-rose-500">
              In vitro fertilization (IVF)
            </h3>
          </a>

          <p className="mt-2  text-sm/relaxed ">
            In vitro fertilisation is a process of fertilisation where an egg is
            combined with sperm in vitro. The process involves monitoring and
            stimulating a woman's ovulatory process, removing an ovum or ova
            from her ovaries and letting sperm fertilise them in a culture
            medium in a laboratory.
          </p>

          <a
            href="#"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Read more
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </article>

        <article className="rounded-lg border border-gray-100 bg-pink-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6" data-aos="fade-left">
          {/* <span className="inline-block rounded bg-blue-600 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </span> */}

          <a href="#">
            <h3 className="mt-0.5 text-lg font-medium text-rose-500">
              Intracytoplasmic sperm injection (ICSI)
            </h3>
          </a>

          <p className="mt-2  text-sm/relaxed ">
            Intracytoplasmic sperm injection is an in vitro fertilization
            procedure in which a single sperm cell is injected directly into the
            cytoplasm of an egg. This technique is used in order to prepare the
            gametes for the obtention of embryos that may be transferred to a
            maternal uterus.
          </p>

          <a
            href="#"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Read more
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
  );
};

export default Services;
