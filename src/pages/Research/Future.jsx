import HeroSection from "../../components/Herosection";
export default function Future(){
    return(
        <>
        <HeroSection 
        title="Future Research"
        tabs={[
          { label: "Current Research", to: "/research/current" },
          { label: 'Completed Research', to: '/research/completed' },
          { label: 'Future Research', to: '/research/future' },
          { label: 'Research Areas', to: '/research/areas' },
          { label: 'Research Facilities', to: '/research/facilities' },
        ]}
        />
            <section className="bg-gray-100 flex justify-center items-center py-12">
        <div className="bg-white rounded-md shadow-md w-full max-w-4xl min-h-[600px] flex items-center justify-center">
          <h4 className="text-3xl font-semibold text-gray-600 text-center">
            No data found
          </h4>
        </div>
      </section>
        </>
    )
}