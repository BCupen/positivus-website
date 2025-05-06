import {
    CTASection,
    Hero,
    LogoCarousel,
    ServicesSection,
} from "../components";

const Home = () => {
    return (
        <main className="flex w-full flex-col gap-[70px]">
            <Hero />

            <LogoCarousel />

            <ServicesSection />

            <CTASection />
        </main>
    );
};

export default Home;
