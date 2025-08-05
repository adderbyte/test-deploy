import Industry1 from "../public/images/industries/i_007 1.svg";
import Industry2 from "../public/images/industries/i_005 1.svg";
import Industry3 from "../public/images/industries/i_009 1.svg";
import Industry4 from "../public/images/industries/i_004 1.svg";
import Industry5 from "../public/images/industries/i_003 1.svg";
import Image from "next/image";

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "Intelligent Infrastructure",
      description: "Urban infrastructure integrated with digital tools to manage energy, waste, and water.",
      position: "large-left",
      image: Industry1,
    },
    {
      title: "Telecom & Edge Networks",
      description: "Telecom infrastructure, fiber, 5G, and distributed edge computing systems.",
      position: "top-right",
      image: Industry2,
    },
    {
      title: "Connected Mobility",
      description: "Smart transportation systems, connected vehicles, and intelligent fleet operations.",
      position: "top-far-right",
      image: Industry4,
    },
    {
      title: "Platform Ecosystems",
      description: "Multi-sided, data platforms enabling coordination across producers and users.",
      position: "bottom-right",
      image: Industry3,
    },
    {
      title: "Autonomous Systems & Automation",
      description: "Industrial robotics, factory control, and intelligent automation for production.",
      position: "bottom-far-right",
      image: Industry5,
    },
  ];

  return (
    <section id="focus-areas" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16">
          Focus Areas
        </h2>

        {/* Mobile Layout - Single column stack */}
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
              <p className="text-gray-600 text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tablet Layout - 2x3 grid with featured card */}
        <div className="hidden sm:block lg:hidden">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
            {/* Smart Cities - Featured card spanning full width */}
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
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Improve municipal services, traffic, and waste systems
                </p>
              </div>
            </div>
          </div>

          {/* Other industries in 2x2 grid */}
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
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Original custom grid */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-6 h-[70vh] xl:h-[80vh]">
          {/* Smart Cities - Large card on the left */}
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
              <p className="text-gray-600 text-sm leading-relaxed">
                Improve municipal services, traffic, and waste systems
              </p>
            </div>
          </div>

          {/* Utilities - Top middle */}
          <div className="bg-white border border-gray-300 rounded-lg p-4 xl:p-6 flex flex-col justify-center">
            <Image
              src={Industry2}
              alt="Telecom & Edge Networks"
              className="w-full h-32 xl:h-42 object-contain mb-3 xl:mb-4"
              width={300}
              height={168}
            />
            <h3 className="text-base xl:text-lg font-bold text-gray-900 mb-2">
              Telecom & Edge Networks
            </h3>
            <p className="text-gray-600 text-xs xl:text-sm leading-relaxed">
              Optimize water, power, and shared resource delivery
            </p>
          </div>

          {/* Logistics - Top right */}
          <div className="bg-white border border-gray-300 rounded-lg p-4 xl:p-6 flex flex-col justify-center">
            <Image
              src={Industry4}
              alt="Connected Mobility"
              className="w-full h-32 xl:h-42 object-contain mb-3 xl:mb-4"
              width={300}
              height={168}
            />
            <h3 className="text-base xl:text-lg font-bold text-gray-900 mb-2">
              Connected Mobility
            </h3>
            <p className="text-gray-600 text-xs xl:text-sm leading-relaxed">
              Enable real-time fleet management and route intelligence
            </p>
          </div>

          {/* Public-Private Partnerships - Bottom middle */}
          <div className="bg-white border border-gray-300 rounded-lg p-4 xl:p-6 flex flex-col justify-center">
            <Image
              src={Industry3}
              alt="Platform Ecosystems"
              className="w-full h-32 xl:h-42 object-contain mb-3 xl:mb-4"
              width={300}
              height={168}
            />
            <h3 className="text-base xl:text-lg font-bold text-gray-900 mb-2">
              Platform Ecosystems
            </h3>
            <p className="text-gray-600 text-xs xl:text-sm leading-relaxed">
              Collaborate through shared platforms and data
            </p>
          </div>

          {/* Infrastructure & Mobility - Bottom right */}
          <div className="bg-white border border-gray-300 rounded-lg p-4 xl:p-6 flex flex-col justify-center">
            <Image
              src={Industry5}
              alt="Autonomous Systems
& Automation "
              className="w-full h-32 xl:h-42 object-contain mb-3 xl:mb-4"
              width={300}
              height={168}
            />
            <h3 className="text-base xl:text-lg font-bold text-gray-900 mb-2">
              Autonomous Systems & Automation
            </h3>
            <p className="text-gray-600 text-xs xl:text-sm leading-relaxed">
              Build intelligent, self-optimizing networks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
