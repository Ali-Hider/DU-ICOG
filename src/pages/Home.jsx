import Banner from "../components/Banner";
import FeatureSection from "../components/Features";
import NewsSection from "../components/Newssec";
import ResearchEventsCombined from "../components/Combined";
import FacilitiesSection from "../components/Workshop";

export default function Home() {
  return (
    <>
      <Banner />
      <FeatureSection />
      <NewsSection />
      <ResearchEventsCombined />
      <FacilitiesSection />
    </>
  );
}
