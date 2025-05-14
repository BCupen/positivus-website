import {
    CaseStudies,
    CTASection,
    Hero,
    LogoCarousel,
    ServicesSection,
    WorkingProcess
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
        </main>
    );
};

export default Home;
