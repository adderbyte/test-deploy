import Facebook from "@/public/images/socials/facebook.svg";
import Instagram from "@/public/images/socials/instagram.svg";
import X from "@/public/images/socials/x.svg";
import Youtube from "@/public/images/socials/youtube.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 overflow-clip">
      <div className="max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center  mb-8">
          <div className="grid md:grid-cols-5 gap-2">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">Polymarq</h3>
              <p className="text-gray-400 mb-4">
                Building the intelligence layer for real-world systems.
              </p>
              <p className="text-md text-gray-400 ">
                <b>Contact Address:</b> <br/> <b>Nigeria :</b> Otasunsmi Street, Ejigbo, Lagos, Nigeria.<br/>
                <b>South Korea :</b> 231-68, Mok2Dong, YangCheonGu, Seoul, South Korea
              </p>
              <p className="text-md text-gray-400 ">
                Company Registration: RC-7204929{" "}
              </p>
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
