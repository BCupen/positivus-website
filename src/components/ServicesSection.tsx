import { Heading } from "./Heading";
import { ServiceCard } from "./ServiceCard";
import Service1 from "../assets/service_cards/service1.png";
import Service2 from "../assets/service_cards/service2.png";
import Service3 from "../assets/service_cards/service3.png";
import Service4 from "../assets/service_cards/service4.png";
import Service5 from "../assets/service_cards/service5.png";
import Service6 from "../assets/service_cards/service6.png";

const services = [
    {
        title: "Search engine optimization",
        img: Service1,
        titleStyles: "text-dark bg-primary",
        cardStyles: "bg-light",
    },
    {
        title: "Pay-per-click advertising",
        img: Service2,
        titleStyles: "bg-white text-dark",
        cardStyles: "bg-primary",
    },
    {
        title: "Social media marketing",
        img: Service3,
        titleStyles: "bg-white text-dark",
        cardStyles: "bg-dark",
    },
    {
        title: "Email marketing",
        img: Service4,
        titleStyles: "bg-primary text-dark",
        cardStyles: "bg-light",
    },
    {
        title: "Content Creation",
        img: Service5,
        titleStyles: "bg-white text-dark",
        cardStyles: "bg-primary",
    },
    {
        title: "Analytics and tracking",
        img: Service6,
        titleStyles: "bg-primary text-dark",
        cardStyles: "bg-dark",
    },
];

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

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        imgSrc={service.img}
                        titleStyles={service.titleStyles}
                        cardStyles={service.cardStyles}
                    />
                ))}
            </div>
        </section>
    );
};
