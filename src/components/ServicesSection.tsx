import { Heading } from "./Heading";

export const ServicesSection = () => {
    return (
        <section className="mb-10 flex flex-col gap-20 md:mb-20">
            <div className="flex items-center justify-center gap-10 max-md:flex-col">
                <Heading
                    as="h2"
                    styles="text-dark bg-primary px-2 rounded"
                >
                    Services
                </Heading>
                <p>
                    At our digital marketing agency, we offer a range
                    of services to help businesses grow and succeed
                    online. These services include:
                </p>
            </div>
        </section>
    );
};
