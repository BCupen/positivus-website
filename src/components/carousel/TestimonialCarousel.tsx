import { useState, useRef, useEffect } from "react";

const testimonials = [
     { quote: "Amazing service!", name: "Alice", title: "CEO, Acme Inc." },
     { quote: "Loved the experience.", name: "Bob", title: "UX Designer" },
     { quote: "Would use again.", name: "Carol", title: "Software Engineer" },
     { quote: "Highly recommend!", name: "Dan", title: "Product Manager" },
     { quote: "Very professional.", name: "Eve", title: "Developer" },
];

const CARD_WIDTH = 600;
const GAP = 16;
const totalCards = testimonials.length;

export const TestimonialCarousel = () => {
     const [centerIndex, setCenterIndex] = useState(0);
     const [isAnimating, setIsAnimating] = useState(false);
     const [direction, setDirection] = useState<"next" | "prev" | null>(null);
     const containerRef = useRef<HTMLDivElement>(null);

     const getIndex = (offset: number) =>
          (centerIndex + offset + totalCards) % totalCards;

     const visibleOffsets = [-2, -1, 0, 1, 2]; // render more cards to allow full transition

     const handleNext = () => {
          if (isAnimating) return;
          setDirection("next");
          setIsAnimating(true);
     };

     const handlePrev = () => {
          if (isAnimating) return;
          setDirection("prev");
          setIsAnimating(true);
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
               containerRef.current.style.transform = `translateX(-300px)`;
               // Force reflow
               void containerRef.current.offsetWidth;
               containerRef.current.style.transition =
                    "transform 0.5s ease-in-out";
          }

          setCenterIndex(newIndex);
          setDirection(null);
          setIsAnimating(false);
     };

     // Animate when direction is set
     useEffect(() => {
          if (!direction || !containerRef.current) return;

          const distance = CARD_WIDTH * 1.5 + GAP;
          const offset = direction === "next" ? -distance : distance;

          containerRef.current.style.transform = `translateX(${offset}px)`;
     }, [direction]);

     return (
          <div className="bg-dark rounded-card mx-auto w-full overflow-hidden py-10 select-none">
               <div
                    className="relative h-[300px] w-full overflow-hidden"
                    style={{ width: CARD_WIDTH * 3 + GAP * 2 }}
               >
                    <div
                         ref={containerRef}
                         className="absolute top-0 left-0 flex h-full gap-4 transition-transform duration-500 ease-in-out"
                         onTransitionEnd={handleTransitionEnd}
                         style={{
                              width: (CARD_WIDTH + GAP) * visibleOffsets.length,
                              transform: "translateX(-300px)", // default, will animate via JS
                         }}
                    >
                         {visibleOffsets.map((offset) => {
                              const index = getIndex(offset);
                              const t = testimonials[index];
                              return (
                                   <div
                                        key={`${offset}-${index}`}
                                        className="h-full w-[600px] flex-shrink-0 rounded-lg bg-white p-4 shadow"
                                   >
                                        <p className="text-gray-600 italic">
                                             “{t.quote}”
                                        </p>
                                        <p className="mt-2 font-semibold">
                                             {t.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                             {t.title}
                                        </p>
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
