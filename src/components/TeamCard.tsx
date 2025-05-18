import { Linkedin } from "./Icons.tsx";
import { Heading } from "./Heading.tsx";

export interface TeamCardProps {
     imgSrc: string;
     name: string;
     position: string;
     description: string;
     index: number;
}

export const TeamCard = ({
     imgSrc,
     name,
     position,
     description,
     index,
}: TeamCardProps) => {
     return (
          <div
               className={`${index > 3 ? "max-md:hidden" : "block"} bg-light border-dark shadow-bold rounded-card border p-7 lg:p-10`}
          >
               <div
                    className={
                         "relative mb-4 flex gap-4 border-b border-gray-700 pb-4"
                    }
               >
                    <img src={imgSrc} alt="team-image" className={"flex-1"} />

                    <span className={"flex-2 self-end"}>
                         <Heading as="h4" styles="text-dark">
                              {name}
                         </Heading>
                         <p className="text-dark">{position}</p>
                    </span>

                    <span className={"absolute top-0 right-0"}>
                         <Linkedin />
                    </span>
               </div>

               <p>{description}</p>
          </div>
     );
};
