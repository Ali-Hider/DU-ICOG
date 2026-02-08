import HeroSection from "../../components/Herosection";
export default function Workshop(){
    return(
        <>
           <HeroSection 
           title="Workshop"
           tabs={[
             { label: "Seminar", to: "/events/seminar" },
            { label: "Workshop", to: "/events/workshop" },
            { label: "Conference", to: "/events/conference" },
            { label: "Training", to: "/events/training" },
            
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