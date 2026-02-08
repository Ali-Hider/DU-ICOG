// src/components/NewsSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const newsData = [
  {
    id: 1,
    title: "FIO and ICOG Forecasting Site",
    date: "January 12, 2026",
    image: "https://ssl.du.ac.bd/fontView/images/news/1768195591ICOG_FIO.jpeg",
    description: "http://144.123.38.62:3100/#/"
  },
  {
    id: 2,
    title: "GNSS Buoy Deployment at the Rabnabad Channel",
    date: "January 11, 2026",
    image: "https://ssl.du.ac.bd/fontView/images/news/1768109422GNSSBuoy.jpeg",
    description: "GNSS Buoy Deployment at the Rabnabad Channel"
  },
  {
    id: 3,
    title: "Handover Ceremony of the FIO Ocean Reanalysis and Forecast Product to the University of Dhaka",
    date: "December 24, 2025",
    image: "https://ssl.du.ac.bd/fontView/images/news/1767776204ICOG_FIO.jpeg",
    description: "Handover Ceremony of the FIO Ocean Reanalysis and Forecast Product ..."
  }
];

const NewsCard = ({ news }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1">
      {/* Image on top */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          onError={(e) =>
            (e.target.src = "https://du.ac.bd/fontView/assets/img/default_logo.png")
          }
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Box under image */}
      <div className="p-4 flex flex-col justify-between h-36 bg-gray-50 transition-colors duration-300 hover:bg-gray-100">
        <h3 className="font-semibold text-md line-clamp-2 hover:text-gray-800">{news.title}</h3>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-gray-500 text-xs">{news.date}</span>
          <Link
            to="#"
            className="text-slate-600 font-medium flex items-center gap-1 hover:underline"
          >
            Read More <span className="text-sm">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const NewsSection = () => {
  return (
    <section className="py-12 bg-slate-200">
      <div className="container mx-auto px-4">
        {/* Recent News Title */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-12 relative inline-block cursor-pointer group"
            style={{
              fontFamily: `'Playfair Display', serif`,
              color: '#B91C1C', // DU red
            }}
          >
            Recent News
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded"></span>
          </h2>
        </div>

        {/* News cards row */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        {/* View all button */}
        <div className="mt-10 w-full">
          <Link
            to="/#"
            className="
              group
              relative flex items-center justify-center w-full
              py-6
              text-white text-lg font-semibold
              bg-amber-500
              overflow-hidden
              transition-transform duration-500 shadow-md hover:shadow-xl hover:scale-105
            "
          >
            <span className="relative z-10 flex items-center gap-2">
              View All News
              <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
            </span>

            {/* Gradient overlay on hover */}
            <span className="
              absolute inset-0
              bg-amber-600
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-500
              z-0
            "></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
