import { useNavigate } from "react-router-dom";
import { Navbar } from ".";
import { LogoBlack } from "./Icons";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      className={[
        "w-full sticky top-0 mb-10 lg:mb-20 py-4",
        "flex justify-between items-center",
        "bg-white shadow-subtle",
        "slide-down-fade-in",
      ].join(" ")}
    >
      <button onClick={() => navigate("/")} className="cursor-pointer">
        <LogoBlack />
      </button>

      <Navbar />
    </header>
  );
};
