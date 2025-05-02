import { Button } from ".";

export const Navbar = () => {
  const handleClick = () => {};
  return (
    <nav className="flex items-center gap-10">
      <ul className="flex items-center gap-10 text-dark">
        <li className="cursor-pointer">About us</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Use Cases</li>
        <li className="cursor-pointer">Pricing</li>
        <li className="cursor-pointer">Blog</li>
      </ul>
      <Button label="Request a quote" onClick={handleClick} variant="outline" />
    </nav>
  );
};
