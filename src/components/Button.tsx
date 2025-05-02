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
        return "bg-dark border-dark text-light";
      case "secondary":
        return "bg-primary border-primar text-dark";
      case "outline":
        return "border-dark bg-transparent text-dark";
    }
  };
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={[
        "rounded-[14px] border py-5 px-9",
        "cursor-pointer",
        styles,
        getButtonStyles(variant),
      ].join(" ")}
    >
      {label}
    </button>
  );
};
