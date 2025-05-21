import { Heading } from "./Heading.tsx";
import { TestimonialCarousel } from "./carousel";

export const TestimonialSection = () => {
     return (
          <section className="mb-10 flex flex-col gap-20 md:mb-20">
               <div className="flex items-center gap-10 max-md:flex-col">
                    <Heading as="h2" styles="text-dark bg-primary px-2 rounded">
                         Testimonials
                    </Heading>
                    <p>
                         Hear from Our Satisfied Clients: Read Our Testimonials
                         to Learn More about Our Digital Marketing Services
                    </p>
               </div>

               <TestimonialCarousel />
          </section>
     );
};
