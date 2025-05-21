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
          </main>
     );
};

export default Home;
