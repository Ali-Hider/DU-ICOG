import { NavLink } from "react-router-dom";

export default function HeroSection({ title, tabs }) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('https://du.ac.bd/fontView/assets/img/details_info.jpg')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* content container */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        {/* Breadcrumb */}
        <p className="text-sm font-bold mb-3">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>{" "}
          / <span className="text-amber-200">{title}</span>
        </p>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">{title}</h1>

        {/* Tabs */}
        {tabs && tabs.length > 0 && (
          <div className="mt-8 sm:mt-10 flex justify-center gap-2 sm:gap-4 flex-wrap">
            {tabs.map((tab) => (
              <NavLink
                key={tab.to}
                to={tab.to}
                className={({ isActive }) =>
                  `px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#7b1e1e] shadow-lg"
                      : "border border-white/40 hover:bg-white/10"
                  }`
                }
              >
                {tab.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
