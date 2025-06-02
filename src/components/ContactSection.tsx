import { Heading } from "./Heading.tsx";
import Contact from "../assets/contact.png";
import { Button } from "./Button.tsx";

export const ContactSection = () => {
     return (
          <section className="mb-10 flex flex-col gap-20 md:mb-20">
               <div className="flex items-center gap-10 max-md:flex-col">
                    <Heading as="h2" styles="text-dark bg-primary px-2 rounded">
                         Contact Us
                    </Heading>
                    <p>
                         Connect with Us: Let's Discuss Your Digital Marketing
                         Needs
                    </p>
               </div>

               <div
                    className={
                         "rounded-card lg:bg-light relative flex justify-between bg-transparent lg:py-12"
                    }
               >
                    <form className="flex w-full flex-col gap-6 lg:ml-12 lg:w-1/2">
                         <div className="bg-light rounded-card flex flex-col gap-6 max-lg:p-6">
                              <div className={"mb-4 flex gap-4"}>
                                   <label
                                        htmlFor="say-hi"
                                        className="flex cursor-pointer items-center gap-2"
                                   >
                                        <div className="grid place-items-center">
                                             <input
                                                  type="radio"
                                                  name="contact-type"
                                                  id={"say-hi"}
                                                  defaultChecked
                                                  className="peer border-dark col-start-1 row-start-1 h-7 w-7 shrink-0 appearance-none rounded-full border bg-white"
                                             />
                                             <div className="peer-checked:bg-primary col-start-1 row-start-1 h-4 w-4 rounded-full" />
                                        </div>
                                        <p>Say Hi</p>
                                   </label>
                                   <label
                                        htmlFor="request-quote"
                                        className="flex cursor-pointer items-center gap-2"
                                   >
                                        <div className="grid place-items-center">
                                             <input
                                                  type="radio"
                                                  name="contact-type"
                                                  id={"request-quote"}
                                                  className="peer border-dark col-start-1 row-start-1 h-7 w-7 shrink-0 appearance-none rounded-full border bg-white"
                                             />
                                             <div className="peer-checked:bg-primary col-start-1 row-start-1 h-4 w-4 rounded-full" />
                                        </div>
                                        <p>Request a Quote</p>
                                   </label>
                              </div>
                              <div className={"flex flex-col gap-2"}>
                                   <label htmlFor="name">
                                        <p>Name</p>
                                   </label>
                                   <input
                                        type="text"
                                        id="name"
                                        className={
                                             "placeholder-placeholder w-full rounded-lg bg-white p-4"
                                        }
                                        placeholder={"Name"}
                                   />
                              </div>
                              <div className={"flex flex-col gap-2"}>
                                   <label htmlFor="email">
                                        <p>Email*</p>
                                   </label>
                                   <input
                                        type="text"
                                        id="email"
                                        className={
                                             "placeholder-placeholder w-full rounded-lg bg-white p-4"
                                        }
                                        placeholder={"Email"}
                                   />
                              </div>
                              <div className={"flex flex-col gap-2"}>
                                   <label htmlFor="message">
                                        <p>Message*</p>
                                   </label>
                                   <textarea
                                        id="message"
                                        placeholder={"Message"}
                                        className={
                                             "placeholder-placeholder h-[190px] w-full rounded-lg bg-white p-4"
                                        }
                                   />
                              </div>
                         </div>
                         <Button
                              label={"Send Message"}
                              onClick={() => {}}
                              variant={"primary"}
                         />
                    </form>
                    <img
                         src={Contact}
                         alt="contact"
                         className={"absolute left-[65%] hidden lg:block"}
                    />
               </div>
          </section>
     );
};
