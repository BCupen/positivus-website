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
        className="lg:hidden cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {!open ? <HamburgerIcon /> : <CloseIcon />}
      </button>

      {shouldRender && (
        <div
          onTransitionEnd={handleTransitionEnd}
          className={[
            "absolute top-0 mt-12 right-0",
            "bg-white border-2 border-dark rounded-custom shadow",
            "w-full p-5 transition-all duration-500 linear origin-top-right",
            // Enter transition
            isAnimating
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-0 invisible pointer-events-none",
            "lg:hidden",
          ].join(" ")}
        >
          <nav className="flex flex-col gap-4">
            <ul className="flex flex-col gap-4 text-dark">
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
        </div>
      )}

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-10">
        <ul className="flex items-center gap-10 text-dark">
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
