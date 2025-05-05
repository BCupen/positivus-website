import Amazon from "../assets/logos/amazon.png";
import Dribble from "../assets/logos/dribble.png";
import Notion from "../assets/logos/notion.png";
import Netflix from "../assets/logos/netflix.png";
import Zoom from "../assets/logos/zoom.png";
import Hubspot from "../assets/logos/hubspot.png";

const images = [Amazon, Hubspot, Dribble, Notion, Netflix, Zoom];

export const LogoCarousel = () => {
    return (
        <section>
            <div className="relative flex w-full items-center overflow-hidden">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Logo ${index + 1}`}
                        className="h-auto w-[150px] grayscale"
                    />
                ))}
            </div>
        </section>
    );
};
