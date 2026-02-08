// src/components/ResearchSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const researchData = [
  {
    id: 1,
    title: "Future Plan",
    image: "https://ssl.du.ac.bd/fontView/images/rarea/1706680027Logo- Copy.jpg",
    link: "#" // placeholder
  }
];

const ResearchCard = ({ research }) => (
  <Link
    to={research.link}
    className="relative w-64 h-40 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mx-4 flex flex-col items-center justify-center my-4"
  >
    <img
      src={research.image}
      alt={research.title}
      className="w-16 h-16 object-contain mb-3"
      onError={(e) =>
        (e.target.src = "https://du.ac.bd/fontView/assets/img/default_logo.png")
      }
    />
    <h5 className="text-center text-lg font-semibold text-gray-800 px-2">
      {research.title}
    </h5>
  </Link>
);

const ResearchSection = () => {
  return (
    <section className="course-cats-area default-padding bottom-less bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="w-full bg-[#1E293B] rounded-md py-6 mb-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold relative inline-block cursor-pointer group"
            style={{
              fontFamily: `'Playfair Display', serif`,
              color: 'white',
            }}
          >
            Research/Workshop Area
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded"></span>
          </h2>
        </div>

        {/* Cards Row with View All inside */}
        <div className="flex justify-center flex-wrap items-stretch">
          {researchData.map((item) => (
            <ResearchCard key={item.id} research={item} />
          ))}

          {/* View All as last card */}
          <Link
            to="#"
            className="relative w-80 h-10 bg-amber-500 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mx-4 flex items-center justify-center my-4 group"
          >
            {/* Gradient hover effect */}
            <div className="absolute inset-0 bg-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

            {/* Text and arrow in one line */}
            <div className="flex items-center z-10 relative">
              <p className="text-sm text-white font-semibold">View All Research Area</p>
              <span className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
