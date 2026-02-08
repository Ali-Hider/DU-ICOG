import React from "react";
import { Link } from "react-router-dom";

export default function FeatureSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-12 relative inline-block cursor-pointer group"
            style={{
              fontFamily: `'Playfair Display', serif`,
              color: '#B91C1C', // DU red #8A1C1C #B91C1C


            }}
          >
            Explore the International Centre for Ocean Governance
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded"></span>
          </h2>
        </div>

        {/* ONE CARD */}
        <div className="bg-[#f8fafc] rounded-2xl shadow-lg overflow-hidden">

          {/* 1️⃣ Headline Section (STATIC) */}
          <div className="w-full bg-[#1E293B] text-center px-8 py-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              International Centre for Ocean Governance
            </h3>
          </div>

          {/* 2️⃣ Content Section (SUBTLE HOVER) */}
          <div
            className="
              w-full
              px-8
              py-10
              transition-colors
              duration-300
              hover:bg-slate-100
            "
          >
            <div className="flex flex-col md:flex-row gap-6">

              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src="https://ssl.du.ac.bd/fontView/assets/rsearch_center_image/logo/COG-1706676361.jpg"
                  alt="ICOG Logo"
                  className="w-full h-64 md:h-full object-cover rounded-xl"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 text-gray-700 text-justify text-xl leading-relaxed">
                <p className="mb-4">
                  International Centre for Ocean Governance (ICOG) is established
                  as a cooperative research centre by the joint initiative of
                  the Department of Oceanography at the University of Dhaka and
                  the School of Law, University of Western Sydney, Australia on
                  27th March 2017.
                </p>
                <p>
                  ICOG is the first research centre of its kind in Bangladesh and
                  plays a crucial role in protecting the Bay of Bengal
                  environment and ensuring sustainable marine governance.
                </p>
              </div>

            </div>
          </div>

          {/* 3️⃣ CTA SECTION (LIFT + GRADIENT) - SPA INTERNAL LINK */}
<Link
  to="/#"
  className="
    block
    w-full
    text-center 
    font-semibold
    px-8
    py-6
    bg-amber-500
    text-white font-semibold
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
    hover:bg-amber-600
  "
>
  Read more →
</Link>

        </div>
      </div>
    </section>
  );
}
