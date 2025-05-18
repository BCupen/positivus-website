import { Heading } from "./Heading.tsx";
import { TeamCard } from "./TeamCard.tsx";
import Team1 from "../assets/team/team1.png";
import Team2 from "../assets/team/team2.png";
import Team3 from "../assets/team/team3.png";
import Team4 from "../assets/team/team4.png";
import Team5 from "../assets/team/team5.png";
import Team6 from "../assets/team/team6.png";
import { Button } from "./Button.tsx";

const team = [
     {
          imgSrc: Team1,
          name: "John Doe",
          position: "CEO and Founder",
          description:
               "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
     },
     {
          imgSrc: Team2,
          name: "Jane Doe",
          position: "Director of Operations",
          description:
               "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
     },
     {
          imgSrc: Team3,
          name: "Michael Brown",
          position: "Senior SEO Specialist",
          description:
               "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
     },
     {
          imgSrc: Team4,
          name: "Emily Johnson",
          position: "PPC Manager",
          description:
               "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
     },
     {
          imgSrc: Team5,
          name: "Brian Williams",
          position: "Social Media Specialist",
          description:
               "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
     },
     {
          imgSrc: Team6,
          name: "Sarah Kim",
          position: "Content Creator",
          description:
               "2+ years of experience in content creation. Proficient in writing and editing content for social media and blogs",
     },
];

export const TeamSection = () => {
     return (
          <section className="mb-10 flex flex-col gap-20 md:mb-20">
               <div className="flex items-center gap-10 max-md:flex-col">
                    <Heading as="h2" styles="text-dark bg-primary px-2 rounded">
                         Team
                    </Heading>
                    <p>
                         Meet the skilled and experienced team behind our
                         successful digital marketing strategies
                    </p>
               </div>

               <div className="grid grid-cols-1 gap-10 max-md:grid-rows-4 md:grid-cols-2 lg:grid-cols-3">
                    {team.map((member, index) => (
                         <TeamCard key={index} {...member} index={index} />
                    ))}
               </div>
               <Button
                    label={"See all team"}
                    onClick={() => {}}
                    variant={"primary"}
                    styles={"lg:w-60 lg:self-end"}
               />
          </section>
     );
};
