import React, {useState, useEffect} from "react";
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Doctor = () => {
  useEffect(() => {
    AOS.init({duration: 3000});
  },[])
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full" data-aos="fade-left">
              <img
                alt="Doctor_Img"
                src="https://www.skshospital.org/wp-content/uploads/2021/03/Dr.kavita-nagarajan.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-xl font-semibold text-pink-500 sm:text-4xl">
                About Me
              </h2>

              <p className="mt-2 text-indigo-800 max-w-lg sm:text-xl/relaxed">
                <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: ["Dr.KAVITHA NAGARAJAN MD.,(OG), MRCOG (UK), Fellow (Repr.Med), MICG Clinical Director & Consultant Repr. Med"]
                }}
             />
            </p>

              <p className="mt-3 text-justify">
                A renowned consultant and secretary of salem chapter of Tapisar
                at salem. She started her carrier as an Obstetrician and
                gynaecologist in 2007 and proved to be outstanding in her field
                with good clinical skills and impeccable expertise. She went on
                to do her super speciality-Fellowship in reproductive medicine
                in the famous tertiary care centre - craft hospital kodungalur,
                kerala in 2010. Since 2012, she was associated with the pioneer
                of reproductive Medicine - Dr Mirudhubashini Govindarajan,
                women’s centre, Coimbatore and excelled as senior consultant and
                Centre head of women’s centre, Salem branch. A feather to her
                cap, was the most prestigious MRCOG from the Royal college of
                Obstetricians and Gynaecologists, UK in 2018, She also
                specialised in cosmetic gynaecology and went on to receive her
                masters in 2021 from ILAMED Delhi. She is known for her
                dedication, patient friendly nature, at most care and high level
                of precision and Knowledge in treating subfertile couples.She
                has changed the face of ART in Salem.
              </p>

              <div className="flow-root rounded-lg border border-gray-100 py-3 mt-5 shadow-sm">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">MBBS</dt>
                    <dd className="text-gray-700 sm:col-span-2">SRI SIDDHARTHA MEDICAL COLLEGE, TUMKUR 2002</dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">MD (OG)</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                    KASTURBA MEDICAL COLLEGE, MANGALORE 2007
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Fellow (Repr.Med)</dt>
                    <dd className="text-gray-700 sm:col-span-2">CRAFT HOSPITAL & RESEARCH INSTITUTE, KODUNGALLUR 2011</dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">MRCOG (UK)</dt>
                    <dd className="text-gray-700 sm:col-span-2">ROYAL COLLEGE, LONDON 2018.</dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">MICG</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                    MASTERS IN COSMETIC GYNAECOLOGY 2021
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctor;




// MBBS                            - SRI SIDDHARTHA MEDICAL COLLEGE, TUMKUR 2002

// MD (OG)                     - KASTURBA MEDICAL COLLEGE, MANGALORE 2007

// Fellow (Repr.Med)      - CRAFT HOSPITAL & RESEARCH INSTITUTE, KODUNGALLUR 2011

// MRCOG (UK)            - ROYAL COLLEGE, LONDON 2018.

// MICG                            - MASTERS IN COSMETIC GYNAECOLOGY 2021