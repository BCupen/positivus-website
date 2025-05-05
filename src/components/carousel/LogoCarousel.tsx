import Amazon from "../../assets/logos/amazon.png";
import Dribble from "../../assets/logos/dribble.png";
import Notion from "../../assets/logos/notion.png";
import Netflix from "../../assets/logos/netflix.png";
import Zoom from "../../assets/logos/zoom.png";
import Hubspot from "../../assets/logos/hubspot.png";
import "./carousel.css";

const images = [Amazon, Hubspot, Dribble, Notion, Netflix, Zoom];

export const LogoCarousel = () => {
    return (
        <section>
            <div className="fles relative mb-10 h-[70px] w-[100%] overflow-hidden border md:mb-20">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Logo ${index + 1}`}
                        className="slide-left absolute top-1/2 left-[100%] h-auto w-[150px] -translate-y-1/2 bg-red-500 grayscale"
                    />
                ))}
            </div>
        </section>
    );
};
