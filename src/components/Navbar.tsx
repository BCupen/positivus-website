import { useEffect, useState } from "react";
import { Button, CloseIcon, HamburgerIcon } from ".";

export const Navbar = () => {
    const handleClick = () => {};

    const [open, setOpen] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false); // Add a state for animation

    useEffect(() => {
        if (open) {
            setShouldRender(true);

            setTimeout(() => {
                setIsAnimating(true);
            }, 10); // Start enter animation when opening
        } else {
            setIsAnimating(false); // Start exit animation when closing
        }
    }, [open]);

    const handleTransitionEnd = () => {
        // After the transition ends, hide the element if it's closed
        if (!open) {
            setShouldRender(false);
        }
    };

    return (
        <>
            <button
                className="cursor-pointer lg:hidden"
                onClick={() => setOpen(!open)}
            >
                {!open ? <HamburgerIcon /> : <CloseIcon />}
            </button>

            {shouldRender && (
                <div
                    onTransitionEnd={handleTransitionEnd}
                    className={[
                        "absolute top-0 right-0 mt-12",
                        "border-dark rounded-custom border-2 bg-white shadow",
                        "linear w-full origin-top-right p-5 transition-all duration-500",
                        // Enter transition
                        isAnimating
                            ? "visible scale-100 opacity-100"
                            : "pointer-events-none invisible scale-0 opacity-0",
                        "lg:hidden",
                    ].join(" ")}
                >
                    <nav className="flex flex-col gap-4">
                        <ul className="text-dark flex flex-col gap-4">
                            <li className="cursor-pointer">
                                About us
                            </li>
                            <li className="cursor-pointer">
                                Services
                            </li>
                            <li className="cursor-pointer">
                                Use Cases
                            </li>
                            <li className="cursor-pointer">
                                Pricing
                            </li>
                            <li className="cursor-pointer">Blog</li>
                        </ul>
                        <Button
                            label="Request a quote"
                            onClick={handleClick}
                            variant="outline"
                        />
                    </nav>
                </div>
            )}

            {/* Desktop nav */}
            <nav className="hidden items-center gap-10 lg:flex">
                <ul className="text-dark flex items-center gap-10">
                    <li className="cursor-pointer">About us</li>
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">Use Cases</li>
                    <li className="cursor-pointer">Pricing</li>
                    <li className="cursor-pointer">Blog</li>
                </ul>
                <Button
                    label="Request a quote"
                    onClick={handleClick}
                    variant="outline"
                />
            </nav>
        </>
    );
};
