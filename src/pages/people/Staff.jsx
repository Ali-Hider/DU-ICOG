import HeroSection from "../../components/Herosection";
export default function Staff(){
    return(
        <>
         <HeroSection 
                title="Officers and Staff"
                tabs={[
                  { label: "Executive Committee", to: "/people/committee" },
                  { label: 'Officers and Staff', to: '/people/staff' },
                 
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