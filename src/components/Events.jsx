// src/components/EventsSection.jsx
import React from "react";
import { Link } from "react-router-dom";

// Sample events data (empty for now)
const eventsData = []; // if empty, show "No data found"

const EventCard = ({ event }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-4 flex flex-col items-center justify-center w-64 h-40 mx-4 my-4">
    <h4 className="text-center text-lg font-semibold text-gray-800 mb-2">
      {event.title}
    </h4>
    <p className="text-gray-500 text-sm">{event.date}</p>
    <Link
      to="#"
      className="mt-3 text-blue-600 hover:underline flex items-center gap-1"
    >
      <i className="fas fa-plus"></i> Read More
    </Link>
  </div>
);

const EventsSection = () => {
  return (
    <section className="event-area default-padding bg-gray-50 min-h-[400px] flex flex-col justify-between">
      <div className="container mx-auto px-4 flex flex-col flex-1">

        {/* Title Section with slate background */}
        <div className="w-full bg-[#1E293B] rounded-md py-6 mb-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold relative inline-block cursor-pointer group"
            style={{
              fontFamily: `'Playfair Display', serif`,
              color: 'white', // DU red
            }}
          >
            Recent &amp; Upcoming Events
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded"></span>
          </h2>
        </div>

        {/* Event Cards Row */}
        <div className="flex flex-wrap justify-center items-stretch flex-1">
          {eventsData.length === 0 ? (
            <h4 className="text-center text-gray-500 my-4 w-full">
              No data found
            </h4>
          ) : (
            eventsData.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          )}
        </div>

        {/* View All Events Button */}
        <div className="w-full flex justify-center mt-auto pt-6 pb-6">
          <Link
            to="#"
            className="w-80 h-10 bg-amber-500 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center relative group"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

            {/* Text + Arrow */}
            <span className="text-sm font-semibold z-10 flex items-center gap-1 text-white transition-colors duration-300">
              View All Events <span className="text-base">→</span>
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default EventsSection;
