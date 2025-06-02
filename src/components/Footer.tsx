import { Facebook, LinkedinIcon, LogoWhite, Twitter } from "./Icons.tsx";
import { Heading } from "./Heading.tsx";
import { Button } from "./Button.tsx";

export const Footer = () => {
     return (
          <footer
               className={
                    "bg-dark lg:rounded-t-card -mx-4 flex flex-col gap-10 p-6 lg:p-10"
               }
          >
               <nav
                    className={
                         "flex flex-col items-center justify-between max-lg:gap-6 lg:flex-row"
                    }
               >
                    <LogoWhite />
                    <ul
                         className={
                              "text-light flex flex-col gap-4 lg:flex-row lg:gap-10 lg:underline"
                         }
                    >
                         <li>About Us</li>
                         <li>Services</li>
                         <li>Use Cases</li>
                         <li>Pricing</li>
                         <li>Blog</li>
                    </ul>
                    <div className="hidden gap-4 lg:flex">
                         <LinkedinIcon />
                         <Facebook />
                         <Twitter />
                    </div>
               </nav>
               <div
                    className={
                         "flex flex-col justify-between gap-6 lg:flex-row"
                    }
               >
                    <div
                         className={
                              "text-light flex flex-col items-center gap-5 lg:items-start"
                         }
                    >
                         <Heading
                              as="h4"
                              styles="text-dark bg-primary rounded-md"
                         >
                              Contact us:
                         </Heading>
                         <p>Email: info@positivus.com</p>
                         <p>Phone: 555-567-8901</p>
                         <p className={"max-lg:text-center"}>
                              Address: 1234 Main Street <br />
                              Moonstone Valley, Stardust State 12345
                         </p>
                    </div>
                    <div
                         className={
                              "rounded-custom flex flex-col items-center gap-4 bg-[#292A32] p-6 lg:flex-row"
                         }
                    >
                         <input
                              type="text"
                              placeholder="Email"
                              className={
                                   "rounded-custom border-light placeholder-placeholder text-light border p-5 max-lg:w-full"
                              }
                         />
                         <Button
                              label={"Subscribe to news"}
                              onClick={() => {}}
                              variant={"secondary"}
                              styles={"max-lg:w-full"}
                         />
                    </div>
               </div>
               <div className="flex justify-center gap-4 lg:hidden">
                    <LinkedinIcon />
                    <Facebook />
                    <Twitter />
               </div>
               <div
                    className={
                         "border-placeholder text-light flex w-full flex-col border-t-2 p-4 text-center lg:flex-row lg:gap-5 lg:text-left"
                    }
               >
                    <p>© 2023 Positivus. All Rights Reserved.</p>
                    <p className={"cursor-pointer lg:underline"}>
                         Privacy Policy
                    </p>
                    <a
                         href={"http://github.com/BCupen/positivus-website"}
                         target={"_blank"}
                         className={
                              "hover:text-primary cursor-pointer text-lg font-semibold underline"
                         }
                    >
                         B. Cupen
                    </a>
               </div>
          </footer>
     );
};
