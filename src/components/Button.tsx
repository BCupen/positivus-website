export interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: "primary" | "secondary" | "outline";
    styles?: string;
}

export const Button = ({
    label,
    onClick,
    disabled = false,
    variant = "primary",
    styles = "",
}: ButtonProps) => {
    const getButtonStyles = (variant: string) => {
        switch (variant) {
            case "primary":
            default:
                return [
                    "bg-dark border-dark text-light",
                    "hover:bg-light hover:text-dark hover:scale-105",
                    "transition-all duration-300",
                ].join(" ");
            case "secondary":
                return [
                    "bg-primary border-primary text-dark",
                    "hover:bg-light hover:text-dark hover:scale-105",
                    "transition-all duration-300",
                ].join(" ");
            case "outline":
                return [
                    "border-dark bg-transparent text-dark",
                    "hover:bg-dark hover:text-light hover:scale-105",
                    "transition-all duration-300",
                ].join(" ");
        }
    };
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={[
                "rounded-[14px] border px-9 py-5",
                "cursor-pointer",
                styles,
                getButtonStyles(variant),
            ].join(" ")}
        >
            {label}
        </button>
    );
};
