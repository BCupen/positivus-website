import {
     CaseStudies,
     CTASection,
     Hero,
     LogoCarousel,
     ServicesSection,
     TeamSection,
     TestimonialSection,
     WorkingProcess,
     ContactSection,
     Footer,
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

               <ContactSection />

               <Footer />
          </main>
     );
};

export default Home;
