import { useState, useRef, useEffect } from "react";
import { TestimonialCard } from "./TestimonialCard.tsx";

const testimonials = [
     {
          quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
          name: "Alice",
          title: "CEO, Acme Inc.",
     },
     {
          quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
          name: "Bob",
          title: "UX Designer",
     },
     {
          quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
          name: "Carol",
          title: "Software Engineer",
     },
     {
          quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
          name: "Dan",
          title: "Product Manager",
     },
     {
          quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
          name: "Eve",
          title: "Developer",
     },
];

const CARD_WIDTH = 600;
const GAP = 16;
const totalCards = testimonials.length;

export const TestimonialCarousel = () => {
     const [centerIndex, setCenterIndex] = useState(0);
     const [isAnimating, setIsAnimating] = useState(false);
     const [direction, setDirection] = useState<"next" | "prev" | null>(null);
     const containerRef = useRef<HTMLDivElement>(null);
     const [textVisible, setTextVisible] = useState(true);

     const getIndex = (offset: number) =>
          (centerIndex + offset + totalCards) % totalCards;

     const visibleOffsets = [-2, -1, 0, 1, 2]; // render more cards to allow full transition

     const baseOffset = -0.5 * (CARD_WIDTH + GAP);

     const handleNext = () => {
          if (isAnimating) return;
          setTextVisible(false);
          setTimeout(() => {
               setDirection("next");
               setIsAnimating(true);
          }, 30);
     };

     const handlePrev = () => {
          if (isAnimating) return;
          setTextVisible(false);
          setTimeout(() => {
               setDirection("prev");
               setIsAnimating(true);
          }, 20);
     };

     const handleTransitionEnd = () => {
          if (!direction) return;

          const newIndex =
               direction === "next"
                    ? (centerIndex + 1) % totalCards
                    : (centerIndex - 1 + totalCards) % totalCards;

          // Instantly snap back to center
          if (containerRef.current) {
               containerRef.current.style.transition = "none";
               containerRef.current.style.transform = `translateX(${baseOffset}px)`;
               // Force reflow
               void containerRef.current.offsetWidth;
               containerRef.current.style.transition =
                    "transform 0.5s ease-in-out";
          }

          setCenterIndex(newIndex);
          setDirection(null);
          setIsAnimating(false);

          setTimeout(() => {
               setTextVisible(true);
          }, 10);
     };

     // Animate when direction is set
     useEffect(() => {
          if (!direction || !containerRef.current) return;

          const distance = CARD_WIDTH + GAP;
          const offset =
               direction === "next"
                    ? baseOffset - distance
                    : baseOffset + distance;

          containerRef.current.style.transform = `translateX(${offset}px)`;
     }, [direction, baseOffset]);

     return (
          <div className="bg-dark rounded-card mx-auto w-full overflow-hidden py-10 select-none">
               <div
                    className="relative h-[300px] w-full overflow-hidden lg:h-[450px]"
                    style={{ width: CARD_WIDTH * 3 + GAP * 2 }}
               >
                    <div
                         ref={containerRef}
                         className="absolute top-0 left-0 flex h-full gap-4 transition-transform duration-500 ease-in-out"
                         onTransitionEnd={handleTransitionEnd}
                         style={{
                              width: (CARD_WIDTH + GAP) * visibleOffsets.length,
                              transform: `translateX(${baseOffset}px)`, // default, will animate via JS
                         }}
                    >
                         {visibleOffsets.map((offset) => {
                              const index = getIndex(offset);
                              const t = testimonials[index];
                              return (
                                   <div
                                        key={`${offset}-${index}`}
                                        className={`dark h-full w-[600px] flex-shrink-0 rounded-lg p-4 shadow`}
                                   >
                                        <TestimonialCard
                                             {...t}
                                             textVisible={textVisible}
                                        />
                                   </div>
                              );
                         })}
                    </div>
               </div>

               <div className="mt-4 flex justify-center gap-4">
                    <button
                         onClick={handlePrev}
                         disabled={isAnimating}
                         className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300 disabled:opacity-50"
                    >
                         Prev
                    </button>
                    <button
                         onClick={handleNext}
                         disabled={isAnimating}
                         className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300 disabled:opacity-50"
                    >
                         Next
                    </button>
               </div>
          </div>
     );
};
