import { Button, Heading } from "../components";
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image";
import MobileHero from "../assets/hero.png";
import DesktopHero from "../assets/hero-desktop.png";

const Home = () => {
  const handleButtonClick = () => {};
  return (
    <section
      className={[
        "grid grid-cols-1 lg:grid-cols-2 gap-8",
        "mb-10 lg:mb-20",
      ].join(" ")}
    >
      <Heading as="h1" styles="order-1 text-dark">
        Navigating the digital landscape for success
      </Heading>

      <div className="order-3 flex flex-col gap-8">
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button
          label="Book a consultation"
          styles="lg:w-1/2 w-full"
          onClick={() => handleButtonClick}
        />
      </div>

      <div className="order-2 row-span-2">
        <ResponsiveImage>
          <ResponsiveImageSize default minWidth={0} path={MobileHero} />
          <ResponsiveImageSize minWidth={768} path={DesktopHero} />
        </ResponsiveImage>
      </div>
    </section>
  );
};

export default Home;
