import { useNavigate } from "react-router-dom";
import { Navbar } from ".";
import { LogoBlack } from "./Icons";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <header
            className={[
                "sticky top-0 z-20 mb-10 w-full py-4 lg:mb-20",
                "flex items-center justify-between",
                "shadow-subtle bg-white",
                "slide-down-fade-in",
            ].join(" ")}
        >
            <button
                onClick={() => navigate("/")}
                className="cursor-pointer"
            >
                <LogoBlack />
            </button>

            <Navbar />
        </header>
    );
};
