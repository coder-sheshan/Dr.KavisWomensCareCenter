import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Paronama from "../Components/Paronama";
import IUI from "../Assets/IUI.jpg";
import IVF from "../Assets/IVF.jpg";
import ICSI from "../Assets/ICSI.jpg";
import Hormon from "../Assets/Hormon.jpg";
import SpermDon from "../Assets/SpermDon.jpg";
import Andro from "../Assets/Andro.jpg";
import Scan from "../Assets/scan.jpg";
import Saro from "../Assets/Saro.jpg";
import PCOD from "../Assets/pcod.jpg";

const ServiceScr = () => {
  return (
    <div>
      <Paronama />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {/* phrase 1 */}

        <div className="p-5 m-5">
          <article class="group">
            <img
              alt="IUI"
              src={IUI}
              class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div class="p-4">
              <a href="#">
                <h3 class="text-lg font-medium text-pink-700">
                  Intra Uterine Insemination (IUI)
                </h3>
              </a>

              <p class="mt-2 text-justify text-sm/relaxed text-gray-500">
                Intrauterine insemination is a treatment; the sperm sample is
                washed and concentrated, then placed in a transfer catheter.
                This catheter is then inserted through the cervix and the sperms
                are injected into the uterine cavity. The sperms are then able
                to swim up to fallopian tubes where they may fertilize the egg.
              </p>
            </div>
          </article>
        </div>

        <div className="p-5 m-5">
          <article class="group">
            <img
              alt="ICSI"
              src={ICSI}
              class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div class="p-4">
              <a href="#">
                <h3 class="text-lg font-medium text-pink-700">
                  Intra Cytoplasmic Sperm Injection (ICSI)
                </h3>
              </a>

              <p class="mt-2 text-justify text-sm/relaxed text-gray-500">
                ICSI provides help for men with severe sperm dysfunction and
                very low sperm count. In this procedure, a single sperm is micro
                manipulated and captured in glass needle and is injected
                directly into the egg. After fertilization the embryo
                transferred into the uterine cavity.
              </p>
            </div>
          </article>
        </div>

        <div className="p-5 m-5">
          <article class="group">
            <img
              alt="IFV"
              src={IVF}
              class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div class="p-4">
              <a href="#">
                <h3 class="text-lg font-medium text-pink-700">
                  In Vitro Fertilization (IVF)
                </h3>
              </a>

              <p class="mt-2 text-justify text-sm/relaxed text-gray-500">
                The basic IVF treatment involve the development of many good
                quality eggs by fertility drugs, monitoring of the complete
                cycle by means of ultra sound and diagnostic tests, Collection
                of eggs, Fertilization of eggs outside the Woman’s Womb in a
                test tube and transfer of embryos into the woman’s womb.
              </p>
            </div>
          </article>
        </div>

        {/* phrase 2 */}

        <div className="p-5 m-5">
          <article class="group">
            <img
              alt="Hormon"
              src={Hormon}
              class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div class="p-4">
              <a href="#">
                <h3 class="text-lg font-medium text-pink-700">
                  Hormonal Analysis
                </h3>
              </a>

              <p class="mt-2 text-justify text-sm/relaxed text-gray-500">
                As hormonal imbalance is one of the commonest cause of
                infertility it is essential to assess and evaluate the hormones
                related to fertility problems. Ovarian function tests–These
                tests are looked to see how the hormones are functioning and
                working during your ovulation cycle.These hormone tests include
                the following: Luteinizing Hormone. Follicle Stimulating
                Hormone.
              </p>
            </div>
          </article>
        </div>

        <div className="p-5 m-5">
          <article class="group">
            <img
              alt="Sperm Donar"
              src={Andro}
              class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div class="p-4">
              <a href="#">
                <h3 class="text-lg font-medium text-pink-700">Sperm Donor</h3>
              </a>

              <p class="mt-2 text-justify text-sm/relaxed text-gray-500">
                AID (Artificial Insemination Donor) is generally advocated for
                males with a low semen counts (Oligospermia) or Zero counts
                (Azoospermia), where treatment with drugs , Surgery and ART
                treatments like AIH, IUI, and ICSI have proven unsuccessful. It
                is an acceptable alternative to adoption.
              </p>
            </div>
          </article>
        </div>

        <div className="p-5 m-5">
          <article class="group">
            <img
              alt="Andorlogy"
              src={SpermDon}
              class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div class="p-4">
              <a href="#">
                <h3 class="text-lg font-medium text-pink-700">
                  Advanced Andrology Lab
                </h3>
              </a>

              <p class="mt-2 text-justify text-sm/relaxed text-gray-500">
                Andrology lab deals with variety of diagnostic testing is done
                to assess the various factors causing male infertility, Semen
                Collection & analysis related to infertility, Sperm processing
                for assisted reproductive technology (ART) for IVF & ICSI, Semen
                freezing and storage, Post-vasectomy semen analysis, Testicular
                biopsy, TESA, PESA evaluations, and DNA fragmentation tests.
              </p>
            </div>
          </article>
        </div>

        {/* phrase 3 */}

        <div className="p-5 m-5">
          <article class="group">
            <img
              alt="Sacnning"
              src={Scan}
              class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div class="p-4">
              <a href="#">
                <h3 class="text-lg font-medium text-pink-700">
                  3D & 4D Ultrasound
                </h3>
              </a>

              <p class="mt-2 text-justify text-sm/relaxed text-gray-500">
                Used to assess the female reproductive system pathologies to
                near perfection which will help in treatments and predict the
                chances of conception. If there is any problems like, fibroids,
                Uteine septum and anamolies, Polycystic ovaries, endometriosis
                it can be diagnosed and treated. Like regular ultrasounds, 3D
                and 4D ultrasounds uses sound waves to create an image of your
                baby in your womb. What's different is that 3D ultrasounds
                create a three-dimensional image of your baby, while 4D
                ultrasounds create a live video effect, you can watch your baby
                smile or yawn it is in correct position.
              </p>
            </div>
          </article>
        </div>

        <div className="p-5 m-5">
          <article class="group">
            <img
              alt="PCOD"
              src={PCOD}
              class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div class="p-4">
              <a href="#">
                <h3 class="text-lg font-medium text-pink-700">
                  Poly Cystic Ovary Syndrome (PCOS)
                </h3>
              </a>

              <p class="mt-2 text-justify text-sm/relaxed text-gray-500">
                Poly Cystic Ovary Syndrome (PCOS) is a condition which can
                affect the woman’s menstrual cycle, fertility, hormones and
                aspects of her appearance. It can also affect long-term health.
                This information is about the effects on patient’s long-term
                health and does not cover specific treatment options for PCOS.
                The system may vary from woman to woman. Some women have mild
                symptoms; while others are affected more severely by a wider
                range of symptoms. PCOS is a cause of fertility problems in a
                woman.
              </p>
            </div>
          </article>
        </div>

        <div className="p-5 m-5">
          <article class="group">
            <img
              alt="Surrogacy"
              src={Saro}
              class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div class="p-4">
              <a href="#">
                <h3 class="text-lg font-medium text-pink-700">Surrogacy</h3>
              </a>

              <p class="mt-2 text-justify text-sm/relaxed text-gray-500">
                Surrogacy is an arrangement between women and a couple or a
                individual to carry and deliver a baby. Women or couples who
                choose surrogacy often do so because they are unable to conceive
                due to a missing abnormal uterus, have experienced multiple
                pregnancy losses, or have had multiple in vitro fertilization
                attempts that have failed. The advantage of gestational
                surrogacy to the parents is that the embryo is created from
                woman’s egg and man’s sperms, so it biologically theirs.
              </p>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceScr;
