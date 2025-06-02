import {
     CaseStudies,
     CTASection,
     Hero,
     LogoCarousel,
     ServicesSection,
     TeamSection,
     TestimonialSection,
     WorkingProcess,
} from "../components";
import { ContactSection } from "../components/ContactSection.tsx";

const Home = () => {
     return (
          <main className="flex w-full flex-col gap-[70px]">
               <Hero />

               <LogoCarousel />

               <ServicesSection />

               <CTASection />

               <CaseStudies />

               <WorkingProcess />

               <TeamSection />

               <TestimonialSection />

               <ContactSection />
          </main>
     );
};

export default Home;
