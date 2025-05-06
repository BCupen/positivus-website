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
            className={`border-dark rounded-card shadow-bold h-[300px] border p-12 ${cardStyles} flex justify-between gap-4`}
        >
            <div className="flex w-full flex-col justify-between">
                <Heading
                    as="h3"
                    styles="leading-tight w-full text-wrap"
                >
                    <mark className={`rounded px-2 ${titleStyles}`}>
                        {title}
                    </mark>
                </Heading>

                <button className="flex cursor-pointer items-center gap-4">
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
            </div>

            <img
                src={imgSrc}
                alt="service-image"
                className="h-[100px] w-auto object-cover lg:h-[150px]"
            />
        </div>
    );
};
