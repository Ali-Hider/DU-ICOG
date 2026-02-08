import HeroSection from "../../components/Herosection";
import ContentCard from "../../components/Contencard";

export default function MissionVision() {
  return (
    <>
      <HeroSection
        title="Mission & Vision"
        tabs={[
          { label: "Mission & Vision", to: "/about/mission-vision" },
          { label: "Director's Message", to: "/about/director-message" },
        ]}
      />

      <ContentCard>
        <h2 className="text-[#1C4370] text-2xl font-bold mb-4">Mission</h2>
        <p className="mb-2">
          Specific missions of the centre are (but not limited to):
        </p>

        <ul className="list-disc list-inside space-y-2 text-justify">
          <li>
            To provide higher education, training and conduct research regarding the survey, exploitation, long term planning as well as proper utilization of living and non-living resources in the Bay of Bengal and to build up efficient manpower in the different fields of oceanography.
          </li>
          <li>
            To give higher education, training and conduct research on Marine Spatial Planning, Ocean Governance, Marine Protected Area (MPA), Marine Conservation, Marine Biogeography, Marine Biodiversity, Area Beyond National Jurisdiction i.e., the international laws of the sea in the High Sea/Deep Sea (especially UNCLOS), Genetic Diversity and Biological Resource Management in the international waters i.e., area beyond national jurisdiction (ABNJ).
          </li>
          <li>
            To arrange training and higher education for the officers and staffs from the government, NGOs and associated organizations with a view to enhance the capability of the Government of Bangladesh to ensure the proper utilization and sustainable management of the oceanic resources.
          </li>
          <li>
            To collaborate with different renowned universities in the world for collaborative research and higher education program by exchanging students and academics.
          </li>
          <li>
            In order to pursue regular national or international seminar/symposium/workshop/lecture and speech on different fields of oceanography.
          </li>
          <li>
            To conduct joint research collaboration on ocean governance.
          </li>
        </ul>

        <h2 className="text-[#1C4370] text-2xl font-bold mt-10 mb-4">Vision</h2>
        <p className="text-justify">
          To become an internationally recognized centre of excellence for ocean governance research, education and advisory services provision, thereby developing, enhancing and contributing to a greater understanding and delivery of knowledge on ocean governance issues for the benefit of Bangladesh and the world.
        </p>
      </ContentCard>
    </>
  );
}
