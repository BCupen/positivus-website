import { useNavigate } from "react-router-dom";
import { Navbar } from ".";
import { LogoBlack } from "./Icons";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full relative flex justify-between items-center  slide-down-fade-in">
      <button onClick={() => navigate("/")} className="cursor-pointer">
        <LogoBlack />
      </button>

      <Navbar />
    </header>
  );
};
