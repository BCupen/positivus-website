import { Heading, Button } from ".";
import CTAImage from "../assets/cta-image.png";

export const CTASection = () => {
    const handleClick = () => {};
    return (
        <section className="rounded-card bg-light flex h-[345px] w-full items-center justify-between gap-16 p-9 lg:p-12">
            <div className="flex flex-col gap-5 lg:w-[500px]">
                <Heading as="h3">Let's make things happen</Heading>

                <p>
                    Contact us today to learn more about how our
                    digital marketing services can help your business
                    grow and succeed online.
                </p>

                <Button
                    label="Get your free proposal"
                    onClick={handleClick}
                    styles="w-full lg:w-2/3"
                />
            </div>

            <img
                src={CTAImage}
                alt="cta"
                className="hidden h-[360px] w-auto object-cover lg:block"
            />
        </section>
    );
};
