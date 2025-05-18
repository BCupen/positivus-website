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
               <div
                    id="carousel"
                    className="relative mb-10 flex h-[50px] w-[100%] overflow-hidden md:mb-20 md:h-[70px] md:min-w-[900px]"
               >
                    {images.map((image, index) => (
                         <img
                              key={index}
                              src={image}
                              alt={`Logo ${index + 1}`}
                              style={{
                                   animationDelay: `calc(4s * ${6 - index} * -1)`, // 30s/6 * index
                              }}
                              className="slide-left absolute top-1/2 left-[100%] h-auto w-[100px] -translate-y-1/2 grayscale md:w-[150px]"
                         />
                    ))}
               </div>

               <div
                    id="carousel"
                    className="relative mb-10 flex h-[50px] w-[100%] overflow-hidden md:mb-20 md:hidden md:h-[70px] md:min-w-[900px]"
               >
                    {images.map((image, index) => (
                         <img
                              key={index}
                              src={image}
                              alt={`Logo ${index + 1}`}
                              style={{
                                   animationDelay: `calc((4s * ${6 - index} * -1) + 4s)`, // 30s/6 * index
                              }}
                              className="slide-right absolute top-1/2 left-[-100%] h-auto w-[100px] -translate-y-1/2 grayscale md:w-[150px]"
                         />
                    ))}
               </div>
          </section>
     );
};
