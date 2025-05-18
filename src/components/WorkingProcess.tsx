import { Heading } from "./Heading.tsx";
import { Collapsible } from "./collapsible";

export const WorkingProcess = () => {
     return (
          <section className="mb-10 flex flex-col gap-20 md:mb-20">
               <div className="flex items-center gap-10 max-md:flex-col">
                    <Heading as="h2" styles="text-dark bg-primary px-2 rounded">
                         Our Working Process
                    </Heading>
                    <p>
                         Step-by-Step Guide to Achieving
                         <br />
                         Your Business Goals
                    </p>
               </div>

               <div>
                    <Collapsible />
               </div>
          </section>
     );
};
