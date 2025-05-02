export interface HeadProps {
  as?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  styles?: string;
}

export const Heading = ({ as = "h1", children, styles = "" }: HeadProps) => {
  const Tag = as;

  const getTagStyles = (tag: string) => {
    switch (tag) {
      case "h1":
      default:
        return "font-medium text-[43px] lg:text-[60px]";
      case "h2":
        return "font-medium text-[36px] lg:text-[40px]";
      case "h3":
        return "font-medium text-[26px] lg:text-[30px]";
      case "h4":
        return "font-medium text-[20px] lg:text-[18px]";
    }
  };

  return <Tag className={[getTagStyles(as), styles].join(" ")}>{children}</Tag>;
};
