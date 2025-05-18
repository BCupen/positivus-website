import { useState } from "react";
import { MinusIcon, PlusIcon } from "../Icons.tsx";

export interface CollapsibleProps {
     stepNumber?: string;
     title?: string;
     description?: string;
}

export const Collapsible = ({
     stepNumber = "01",
     title = "Title",
     description = "Description",
}: CollapsibleProps) => {
     const [isActive, setIsActive] = useState(true);
     return (
          <div
               className={`${isActive ? "bg-primary" : "bg-light"} shadow-bold border-dark lg:rounded-card text-dark rounded-full border p-12`}
          >
               <div className="flex w-full justify-between">
                    <span className="flex items-center gap-5">
                         <h3 className="text-5xl font-medium">{stepNumber}</h3>
                         <h4 className="text-xl font-medium">{title}</h4>
                    </span>

                    <button onClick={() => setIsActive(!isActive)}>
                         {isActive ? <MinusIcon /> : <PlusIcon />}
                    </button>
               </div>
               <div>{description}</div>
          </div>
     );
};
