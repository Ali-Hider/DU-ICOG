// src/components/FacilitiesSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const facilitiesData = [
  {
    id: 1,
    title: "FIO Forecasting site",
    description: "http://144.123.38.62:3100/#/",
    image: "https://ssl.du.ac.bd/fontView/images/rfacility/1768195281ICOG_FIO.jpeg",
    link: "#" // changed to placeholder
  }
  // Add more items here as needed
];

const FacilityCard = ({ facility }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
    {/* Image */}
    <div className="w-full h-48 overflow-hidden">
      <img
        src={facility.image}
        alt={facility.title}
        onError={(e) =>
          (e.target.src = "https://du.ac.bd/fontView/assets/img/default_logo.png")
        }
        className="w-full h-full object-cover"
      />
    </div>

    {/* Info */}
    <div className="p-4 flex flex-col flex-1">
      <h4 className="text-lg font-semibold mb-2 line-clamp-2">{facility.title}</h4>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{facility.description}</p>
      <Link
        to="#"
        className="mt-auto bg-amber-500 text-white font-semibold text-center px-4 py-2 rounded-lg            
              hover:-translate-y-1
              hover:shadow-xl
              hover:bg-amber-600 transition-colors duration-300"
      >
        Read more →
      </Link>
    </div>
  </div>
);

const FacilitiesSection = () => {
  return (
    <section className="popular-courses-area weekly-top-items default-padding bottom-less py-12 bg-slate-200">
      <div className="container mx-auto px-4 text-center">
        {/* Section Heading */}
        <div className="mb-10">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-12 relative inline-block cursor-pointer group"
            style={{
              fontFamily: `'Playfair Display', serif`,
              color: '#B91C1C', // DU red
            }}
          >
            Research/Workshop Facilities
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded"></span>
          </h2>
        </div>

        {/* Facility Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {facilitiesData.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10">
          <Link
            to="#"
            className="bg-amber-500 text-white font-semibold px-6 py-2 rounded-lg shadow 
              hover:-translate-y-1
              hover:shadow-xl
              hover:bg-amber-600 transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
