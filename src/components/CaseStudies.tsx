import { Heading, Link } from ".";

export const CaseStudies = () => {
    return (
        <section className="mb-10 flex flex-col gap-20 lg:mb-20">
            <div className="flex items-center gap-10 max-md:flex-col">
                <Heading
                    as="h2"
                    styles="text-dark bg-primary px-2 rounded text-nowrap"
                >
                    Case studies
                </Heading>
                <p>
                    Explore Real-Life Examples of Our Proven Digital
                    Marketing Success through Our Case Studies
                </p>
            </div>

            <div className="lg:bg-dark rounded-card flex flex-col bg-transparent max-lg:gap-5 lg:flex-row lg:py-12">
                <div className="text-light bg-dark rounded-card flex flex-col justify-between gap-5 px-12 max-lg:py-12 lg:rounded-none">
                    <p>
                        For a local restaurant, we implemented a
                        targeted PPC campaign that resulted in a 50%
                        increase in website traffic and a 25% increase
                        in sales.
                    </p>
                    <button className="text-primary flex items-center gap-4">
                        <p>Learn More</p>
                        <Link />
                    </button>
                </div>
                <div className="text-light lg:border-light bg-dark rounded-card flex flex-col justify-between gap-5 px-12 max-lg:py-12 lg:rounded-none lg:border-x-2">
                    <p>
                        For a B2B software company, we developed an
                        SEO strategy that resulted in a first page
                        ranking for key keywords and a 200% increase
                        in organic traffic.
                    </p>
                    <button className="text-primary flex items-center gap-4">
                        <p>Learn More</p>
                        <Link />
                    </button>
                </div>
                <div className="text-light bg-dark rounded-card flex flex-col justify-between gap-5 px-12 max-lg:py-12 lg:rounded-none">
                    <p>
                        For a national retail chain, we created a
                        social media marketing campaign that increased
                        followers by 25% and generated a 20% increase
                        in online sales.
                    </p>
                    <button className="text-primary flex items-center gap-4">
                        <p>Learn More</p>
                        <Link />
                    </button>
                </div>
            </div>
        </section>
    );
};
