import React from "react";
import ResearchSection from "../components/Research";
import EventsSection from "../components/Events";

export default function ResearchEventsCombined() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Research */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <ResearchSection />
          </div>

          {/* Events */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <EventsSection />
          </div>

        </div>
      </div>
    </section>
  );
}