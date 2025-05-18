import { Heading } from "./Heading.tsx";
import { Collapsible } from "./collapsible";
import { useState } from "react";

const steps = [
     {
          stepNumber: "01",
          title: "Consultation",
          description:
               "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
     },
     {
          stepNumber: "02",
          title: "Research and Strategy Development",
          description:
               "We will then develop a strategy to help you achieve your goals. This will include creating a marketing plan, developing a marketing campaign, and implementing a marketing strategy.",
     },
     {
          stepNumber: "03",
          title: "Implementation",
          description:
               "We will then implement your marketing strategy. We will work with you to ensure that your marketing campaign is successful.",
     },
     {
          stepNumber: "04",
          title: "Monitoring and Optimization",
          description:
               "We will monitor your marketing campaign and optimize it to ensure that it is successful.",
     },
     {
          stepNumber: "05",
          title: "Reporting and Communication",
          description:
               "We will report on your marketing campaign and communicate the results to you. We will also provide you with a detailed report on your marketing campaign.",
     },
     {
          stepNumber: "06",
          title: "Continual Improvement",
          description:
               "We will continually improve our services to ensure that you receive the best results.",
     },
];

export const WorkingProcess = () => {
     const [activeStep, setActiveStep] = useState("01");

     const handleActiveStep = (stepNumber: string) => {
          if (stepNumber === activeStep) {
               setActiveStep("");
               return;
          }
          setActiveStep(stepNumber);
     };
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

               <div className="flex flex-col gap-6">
                    {steps.map((step, index) => (
                         <Collapsible
                              key={index}
                              {...step}
                              activeStep={activeStep}
                              setActiveStep={handleActiveStep}
                         />
                    ))}
               </div>
          </section>
     );
};
