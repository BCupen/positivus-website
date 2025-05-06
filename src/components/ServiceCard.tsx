import { Heading, LinkCircle } from ".";

export interface ServiceCardProps {
    title: string;
    imgSrc: string;
    titleStyles?: string;
    cardStyles?: string;
    linkStyle?: {
        bg_color: string;
        fill: string;
    };
}

export const ServiceCard = ({
    title,
    titleStyles = "",
    cardStyles = "",
    imgSrc,
}: ServiceCardProps) => {
    return (
        <div
            className={`border-dark rounded-card shadow-bold h-[300px] border p-12 ${cardStyles} flex justify-between`}
        >
            <div className="flex flex-col justify-between">
                <Heading
                    as="h3"
                    styles={`rounded px-2 ${titleStyles}`}
                >
                    {title}
                </Heading>

                <button className="flex items-center">
                    <LinkCircle />
                    <p>Learn More</p>
                </button>
            </div>

            <img
                src={imgSrc}
                alt="service-image"
                className="hidden h-auto w-[210px] md:block"
            />
        </div>
    );
};
