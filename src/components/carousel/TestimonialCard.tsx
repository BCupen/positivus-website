import { Heading } from "../Heading.tsx";

export interface TestimonialCardProps {
     quote: string;
     name: string;
     title: string;
     textVisible: boolean;
}

export const TestimonialCard = ({
     quote,
     name,
     title,
     textVisible,
}: TestimonialCardProps) => {
     return (
          <div
               className={
                    "flex w-full flex-col items-center gap-4 bg-transparent"
               }
          >
               <div
                    className={
                         "rounded-card border-primary relative min-h-[200px] w-full border p-6 lg:h-1/3 lg:p-12"
                    }
               >
                    <p
                         className={`text-light transition-opacity duration-500 ease-in-out ${textVisible ? "opacity-100" : "opacity-0"}`}
                    >
                         {quote}
                    </p>
                    <div className={"triangle-wrapper top-[100%]"}>
                         <div className={"triangle-down"}>
                              <div className={"inner-triangle"} />
                         </div>
                    </div>
               </div>
               <div>
                    <Heading
                         as="h4"
                         styles={`text-primary transition-opacity duration-500 ease-in-out ${textVisible ? "opacity-100" : "opacity-0"}`}
                    >
                         {name}
                    </Heading>
                    <p
                         className={`text-light transition-opacity duration-500 ease-in-out ${textVisible ? "opacity-100" : "opacity-0"}`}
                    >
                         {title}
                    </p>
               </div>
          </div>
     );
};
