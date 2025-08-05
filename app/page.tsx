import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import AboutUs from "@/components/AboutUs";
import SolutionsOverview from "@/components/SolutionsOverview";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import WasteManagement from "@/components/WasteManagement";
import BuildTogether from "@/components/BuildTogether";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero  />
      {/* <TrustedBy /> */}
      <AboutUs />
      <SolutionsOverview />
      <IndustriesWeServe />
      <WasteManagement />
      <BuildTogether />
      <Footer />
    </main>
  );
}
