import HeroSection from "../../components/Herosection";
import ContentCard from "../../components/Contencard";
import React from "react";
export default function Publications(){
    return (<>
              <HeroSection
                    title="Publications"
                    // No `tabs` prop needed
                  />
                        <ContentCard>
                            <div className="space-y-4 text-justify">
                            <p className="font-semibold text-lg">Address:</p>
                            <p>
                              International Centre for Ocean Governance (ICOG)<br />
                              Faculty of Earth and Environmental Sciences, University of Dhaka,<br />
                              Dhaka-1000, Bangladesh
                            </p>
                  
                            <p><span className="font-semibold">Phone:</span> +8801678-061858</p>
                            <p><span className="font-semibold">Email:</span> icog@du.ac.bd</p>
                            <p><span className="font-semibold">Website:</span> www.icog.du.ac.bd</p>
                  
                            <p>
                              If you have an issue or suggestion relating to the Dhaka University
                              website, please contact the{" "}
                              <a className="text-blue-700 underline" href="mailto:webmaster@du.ac.bd">
                                webmaster
                              </a>.
                            </p>
                          </div>
                        </ContentCard>
        </>)
}