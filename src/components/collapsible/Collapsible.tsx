import { MinusIcon, PlusIcon } from "../Icons.tsx";

export interface CollapsibleProps {
     activeStep: string;
     setActiveStep: (step: string) => void;
     stepNumber?: string;
     title?: string;
     description?: string;
}

export const Collapsible = ({
     activeStep,
     setActiveStep,
     stepNumber = "01",
     title = "Title",
     description = "Description",
}: CollapsibleProps) => {
     const isActive = stepNumber === activeStep;
     return (
          <div
               className={`${isActive ? "bg-primary rounded-card" : "bg-light rounded-full"} shadow-bold border-dark lg:rounded-card text-dark border p-12`}
          >
               <div className="flex w-full items-center justify-between">
                    <span className="flex items-center gap-5">
                         <h3 className="text-5xl font-medium">{stepNumber}</h3>
                         <h4 className="text-xl font-medium">{title}</h4>
                    </span>

                    <button
                         onClick={() => setActiveStep(stepNumber)}
                         className="cursor-pointer"
                    >
                         {isActive ? <MinusIcon /> : <PlusIcon />}
                    </button>
               </div>
               <div
                    className={`${isActive ? "h-52 border-t border-gray-700 lg:h-20" : "h-0"} mt-6 overflow-hidden transition-all duration-200`}
               >
                    <p className="py-6">{description}</p>
               </div>
          </div>
     );
};
