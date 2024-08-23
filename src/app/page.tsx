import Herosection from "./components/Herosection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/whyChooseUs";
import MordernSchoolTesimonials from "./components/TestimonialCards";
import UpcomingWebinar from "./components/UpcomingWebinar";
import InstructorsDetail from "./components/Instructors";
import Footer from "./components/Footer";






export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MordernSchoolTesimonials/>
      <UpcomingWebinar/>
      <InstructorsDetail/>
      <Footer/>
      </main>
    
    </>
  );
}

