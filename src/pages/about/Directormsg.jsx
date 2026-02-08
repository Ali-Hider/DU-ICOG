import HeroSection from "../../components/Herosection";
import React from "react";

export default function DirectorMessage() {
  return (
    <>
      {/* Hero Section stays the same */}
      <HeroSection
        title="Director's Message"
        tabs={[
          { label: "Mission & Vision", to: "/about/mission-vision" },
          { label: "Director's Message", to: "/about/director-message" },
        ]}
      />

      {/* Content Section */}
      <div className="bg-white rounded-md shadow-md p-6 mt-6 container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-6">
          {/* Director Photo */}
          <div className="flex-shrink-0 w-40 mx-auto lg:mx-0">
            <img
              src="https://ssl.du.ac.bd/fontView/assets/faculty_image/image_2312_new.jpeg"
              alt="Director Dr. K M Azam Chowdhury"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>

          {/* Director Info */}
          <div className="mt-6 lg:mt-0 flex-1 text-justify">
            <h3 className="text-2xl font-bold text-[#1C4370] mb-2">
              Dr. K M Azam Chowdhury
            </h3>
            <h5 className="text-lg font-semibold mb-1">
              Associate Professor & Director
            </h5>
            <h5 className="text-lg font-semibold mb-4">
              International Centre for Ocean Governance
            </h5>

            {/* Director Statement */}
            <p className="mb-4">
              After the delimitation of maritime boundary with Myanmar in 2012 and with India in 2014,
              the authority of University of Dhaka came forward to establish the Department of Oceanography
              in 2012 and the International Centre for Ocean Governance (ICOG) in 2017. We have started the
              capacity enhancement in oceanographic sector especially for the young faculty members and
              students through continuous training, workshop, seminars and exchange of visits. ICOG has
              started participating in number of cruises as a part of the International Indian Ocean Expedition
              (IIOE-2) in the Bay of Bengal from 2016 (unofficially) having joint research collaboration with
              the Department of Oceanography of Dhaka University using Bangladesh Navy ships. Efforts are being
              taken continuously to have research collaboration with other universities and research institutes
              in home and abroad. We have already signed MoU with many reputed universities and research
              organizations all over the world to train our young scientists in order to build the skilled
              manpower in oceanographic sector who would be the driving force for the blue economic growth of Bangladesh.
            </p>

            <p className="mb-4">
              In recent years, Bangladesh Government has taken steps for implementing strategy for Blue Economy
              growth. The Blue Economy approach could significantly contribute towards eradication of poverty,
              contributing to food security, mitigation and adaptation of climate change and generation of
              sustainable livelihoods. Blue Economy requires a balanced approach between conservation, development
              and utilization of marine and coastal ecosystems, all oceanic resources and services with a view to
              enhance their value and generates decent employment, secure productive marine economy and healthy
              marine ecosystems. The blue economic emerging sectors such as shipping and port facilities, seaborne
              trade, fisheries, hydrocarbon, shipping, coastal tourism, aquaculture, renewable energy etc. would
              add extra 3 to 4% to GDP if managed properly with a state-of-the-art blue economic management plan,
              policy and strategy.
            </p>

          
          </div>
        </div>
      </div>
    </>
  );
}
