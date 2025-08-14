import Facebook from "@/public/images/socials/facebook.svg";
import Instagram from "@/public/images/socials/instagram.svg";
import X from "@/public/images/socials/x.svg";
import Youtube from "@/public/images/socials/youtube.svg";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 overflow-clip">
      <div className="max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center  mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-3">Polymarq</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Building the intelligence layer for real-world systems.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-gray-300">
                      Nigeria: Otasunsmi Street, Ejigbo, Lagos
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-gray-300">
                      South Korea: 231-68, Mok2Dong, YangCheonGu, Seoul
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300 text-sm">
                    Company Registration: RC-7204929
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                {/* <li><a href="#features" className="hover:text-white">Features</a></li> */}
                <li>
                  <a href="#solutions" className="hover:text-white">
                    Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="https://pricing.polymarq.com/"
                    className="hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 l text-gray-400">
                <li>
                  <a href="#about-us" className="hover:text-white">
                    About
                  </a>
                </li>
                {/* <li><a href="#" className="hover:text-white">Careers</a></li> */}
                <li>
                  <a href="#about-us" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                {/* <li><a href="#" className="hover:text-white">Documentation</a></li> */}
                <li>
                  <a
                    href="/blogs/polymarq-waste-management-blog"
                    className="hover:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#about-us" className="hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="hover:text-white">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4 mt-8 md:mt-0 md:ml-auto">
            <a href="https://www.facebook.com/profile.php?id=100092599872279">
              <Image
                src={Facebook}
                alt="Facebook"
                className="w-8 h-8 inline-block"
              />
            </a>
            <a href="https://twitter.com/true_polymarq">
              <Image src={X} alt="X" className="w-8 h-8 inline-block " />
            </a>
            {/* <a href="https://www.youtube.com/@true_polymarq">
              <Image
                src={Youtube}
                alt="Youtube"
                className="w-8 h-8 inline-block "
            /></a> */}
            <a href="https://www.instagram.com/true_polymarq/">
              <Image
                src={Instagram}
                alt="Instagram"
                className="w-8 h-8 inline-block"
              />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Polymarq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
