import { useState, useRef, useEffect, useMemo } from "react";
import { TestimonialCard } from "./TestimonialCard.tsx";
import { ArrowLeft, ArrowRight, DotIndictor } from "../Icons.tsx";

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

export const TestimonialCarousel = () => {
     const [centerIndex, setCenterIndex] = useState(0);
     const [isAnimating, setIsAnimating] = useState(false);
     const [direction, setDirection] = useState<"next" | "prev" | null>(null);
     const containerRef = useRef<HTMLDivElement>(null);
     const containerWidthRef = useRef<HTMLDivElement>(null);
     const [cardWidth, setCardWidth] = useState(600); // default
     const [offsetFactor, setOffsetFactor] = useState<number>(0.5);

     const [textVisible, setTextVisible] = useState(true);

     const GAP = 16;
     const totalCards = testimonials.length;

     const getIndex = (offset: number) =>
          (centerIndex + offset + totalCards) % totalCards;

     const visibleOffsets = [-2, -1, 0, 1, 2]; // render more cards to allow full transition

     const baseOffset = useMemo(() => {
          return -offsetFactor * (cardWidth + GAP);
     }, [offsetFactor, cardWidth, GAP]);

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

          const distance = cardWidth + GAP;
          const offset =
               direction === "next"
                    ? baseOffset - distance
                    : baseOffset + distance;

          containerRef.current.style.transform = `translateX(${offset}px)`;
     }, [direction, baseOffset]);

     useEffect(() => {
          const updateWidth = () => {
               const screenWidth = window.innerWidth;
               if (!containerWidthRef.current) return;
               if (screenWidth < 1025) {
                    setCardWidth(containerWidthRef?.current.offsetWidth);
                    setOffsetFactor(1);
               } else {
                    setCardWidth(600); // desktop
                    setOffsetFactor(0.5);
               }
          };
          updateWidth();
          window.addEventListener("resize", updateWidth);
          return () => window.removeEventListener("resize", updateWidth);
     }, []);

     return (
          <div
               className="bg-dark rounded-card mx-auto w-full overflow-hidden py-10 select-none"
               ref={containerWidthRef}
          >
               <div
                    className="relative h-[450px] w-full overflow-hidden"
                    style={{ width: cardWidth * 3 + GAP * 2 }}
               >
                    <div
                         ref={containerRef}
                         className="absolute top-0 left-0 flex h-full gap-4 transition-transform duration-500 ease-in-out"
                         onTransitionEnd={handleTransitionEnd}
                         style={{
                              width: (cardWidth + GAP) * visibleOffsets.length,
                              transform: `translateX(${baseOffset}px)`, // default, will animate via JS
                         }}
                    >
                         {visibleOffsets.map((offset) => {
                              const index = getIndex(offset);
                              const t = testimonials[index];
                              return (
                                   <div
                                        key={`${offset}-${index}`}
                                        className={`dark h-full flex-shrink-0 rounded-lg p-4 shadow`}
                                        style={{
                                             width: cardWidth,
                                        }}
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

               <div className="mx-auto mt-4 flex w-full max-w-md justify-between">
                    <button
                         onClick={handlePrev}
                         disabled={isAnimating}
                         className={"cursor-pointer disabled:opacity-20"}
                    >
                         <ArrowLeft />
                    </button>
                    <div className={"flex items-center gap-4"}>
                         {testimonials.map((_, index) => (
                              <DotIndictor isActive={index === centerIndex} />
                         ))}
                    </div>
                    <button
                         onClick={handleNext}
                         disabled={isAnimating}
                         className={"cursor-pointer disabled:opacity-20"}
                    >
                         <ArrowRight />
                    </button>
               </div>
          </div>
     );
};
