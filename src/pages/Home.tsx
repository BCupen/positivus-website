import { Hero, LogoCarousel } from "../components";

const Home = () => {
    return (
        <main className="flex w-full flex-col gap-[70px]">
            <Hero />

            <LogoCarousel />
        </main>
    );
};

export default Home;
