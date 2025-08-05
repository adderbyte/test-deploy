import Industry1 from "../public/images/industries/i_007 1.svg";
import Industry1Webp from "../public/images/industries/i_007 1.webp";
import Industry2 from "../public/images/industries/i_005 1.svg";
import Industry2Webp from "../public/images/industries/i_005 1.webp";
import Industry3 from "../public/images/industries/i_009 1.svg";
import Industry3Webp from "../public/images/industries/i_009 1.webp";
import Industry4 from "../public/images/industries/i_004 1.svg";
import Industry4Webp from "../public/images/industries/i_004 1.webp";
import Industry5 from "../public/images/industries/i_003 1.svg";
import Industry5Webp from "../public/images/industries/i_003 1.webp";
import Image from "next/image";

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "Intelligent Infrastructure",
      description:
        "Urban infrastructure integrated with digital tools to manage energy, waste, and water.",
      examples:
        "Digital twins, smart grid, city operations dashboards, municipal utilities.",
      position: "large-left",
      image: Industry1Webp,
    },
    {
      title: "Telecom & Edge Networks",
      description:
        "Telecom infrastructure, fiber, 5G, and distributed edge computing systems.",
      examples:
        "Rakuten’s 5G stack, Open RAN, MEC platforms, fiber rollout planners.",
      position: "top-right",
      image: Industry2Webp,
    },
    {
      title: "Connected Mobility",
      description:
        "Smart transportation systems, connected vehicles, and intelligent fleet operations.",
      examples: "Fleet routing.",
      position: "top-far-right",
      image: Industry4Webp,
    },
    {
      title: "Platform Ecosystems",
      description:
        "Multi-sided, data platforms enabling coordination across producers and users.",
      examples: "Logistics API, smart waste platforms.",
      position: "bottom-right",
      image: Industry3Webp,
    },
    {
      title: "Autonomous Systems & Automation",
      description:
        "Industrial robotics, factory control, and intelligent automation for production.",
      examples:
        "Robots, smart factories, distributed PLCs, AI-driven quality control.",
      position: "bottom-far-right",
      image: Industry5Webp,
    },
  ];

  return (
    <section id="focus-areas" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16">
          Focus Areas
        </h2>

        {/* Mobile Layout */}
        <div className="block sm:hidden space-y-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col"
            >
              <Image
                src={industry.image}
                alt={industry.title}
                className="w-full h-32 object-contain mb-4"
                width={200}
                height={128}
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-sm mb-1 leading-relaxed">
                {industry.description}
              </p>
              <p className="text-gray-500 text-xs italic">
                <strong>Example systems:</strong> {industry.examples}
              </p>
            </div>
          ))}
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:block lg:hidden">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
            {/* Intelligent Infrastructure - Featured card */}
            <div className="col-span-2 bg-white border border-gray-300 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <Image
                src={Industry1}
                alt="Intelligent Infrastructure"
                className="w-full sm:w-1/2 h-32 sm:h-40 object-contain"
                width={300}
                height={160}
              />
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Intelligent Infrastructure
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2">
                  Urban infrastructure integrated with digital tools to manage energy, waste, and water.
                </p>
                <p className="text-gray-500 text-xs italic">
                  <strong>Example systems:</strong> Digital twins, smart grid, city operations dashboards, municipal utilities.
                </p>
              </div>
            </div>
          </div>

          {/* Other Industries */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {industries.slice(1).map((industry, index) => (
              <div
                key={index + 1}
                className="bg-white border border-gray-300 rounded-lg p-4 sm:p-6 flex flex-col justify-center"
              >
                <Image
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-24 sm:h-32 object-contain mb-3 sm:mb-4"
                  width={200}
                  height={128}
                />
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-1">
                  {industry.description}
                </p>
                <p className="text-gray-500 text-xs italic">
                  <strong>Example systems:</strong> {industry.examples}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-6 h-[70vh] xl:h-[80vh]">
          {/* Large Card - Intelligent Infrastructure */}
          <div className="row-span-2 bg-white border border-gray-300 rounded-lg p-6 xl:p-8 flex flex-col justify-around h-full">
            <Image
              src={Industry1}
              alt="Intelligent Infrastructure"
              className="w-full h-64 xl:h-84 object-contain"
              width={400}
              height={336}
            />
            <div>
              <h3 className="text-lg xl:text-xl font-bold text-gray-900 mb-3">
                Intelligent Infrastructure
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Urban infrastructure integrated with digital tools to manage energy, waste, and water.
              </p>
              <p className="text-gray-500 text-xs italic">
                <strong>Example systems:</strong> Digital twins, smart grid, city operations dashboards, municipal utilities.
              </p>
            </div>
          </div>

          {/* Remaining 4 Industries */}
          {industries.slice(1).map((industry, index) => (
            <div
              key={index + 1}
              className="bg-white border border-gray-300 rounded-lg p-4 xl:p-6 flex flex-col justify-center"
            >
              <Image
                src={industry.image}
                alt={industry.title}
                className="w-full h-32 xl:h-42 object-contain mb-3 xl:mb-4"
                width={300}
                height={168}
              />
              <h3 className="text-base xl:text-lg font-bold text-gray-900 mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-xs xl:text-sm mb-1">
                {industry.description}
              </p>
              <p className="text-gray-500 text-xs italic">
                <strong>Example systems:</strong> {industry.examples}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
