import React from "react";
import doctor from "../Assets/doctor.jpg";

const Doctor = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Doctor_Img"
                src={doctor}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>

              <p className="mt-4 text-pink-500 text-justify">
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

              <a
                href="#"
                className="mt-8 inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-rose-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Know more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctor;
