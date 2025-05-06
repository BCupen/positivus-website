import { Heading, LinkCircle } from ".";

export interface ServiceCardProps {
    title: string;
    imgSrc: string;
    titleStyles?: string;
    cardStyles?: string;
    linkStyle?: {
        bgColor: string;
        fill: string;
        textColor: string;
    };
}

export const ServiceCard = ({
    title,
    titleStyles = "",
    cardStyles = "",
    imgSrc,
    linkStyle = {
        bgColor: "white",
        fill: "#b9ff66",
        textColor: "text-dark",
    },
}: ServiceCardProps) => {
    return (
        <div
            className={`border-dark rounded-card shadow-bold h-[300px] border p-10 ${cardStyles} grid grid-cols-2 gap-4`}
        >
            <Heading
                as="h3"
                styles="leading-tight w-full text-wrap col-span-2 lg:col-span-1 order-1"
            >
                <mark className={`rounded px-2 ${titleStyles}`}>
                    {title}
                </mark>
            </Heading>

            <button className="order-2 col-span-1 flex cursor-pointer items-center gap-4 max-lg:self-end lg:order-3">
                <LinkCircle
                    bgColor={linkStyle.bgColor}
                    fill={linkStyle.fill}
                />
                <p
                    className={`${linkStyle.textColor} hidden lg:block`}
                >
                    Learn More
                </p>
            </button>

            <img
                src={imgSrc}
                alt="service-image"
                className="order-3 row-span-1 h-[100px] w-auto object-cover lg:order-2 lg:row-span-2 lg:h-[150px] lg:self-center"
            />
        </div>
    );
};
