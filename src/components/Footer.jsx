import CountryLoc from "./CountryLoc";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 text-sm text-white bg-neutral-900 w-full">
      <div className="border-b border-[#3c4043] px-8 py-3">
        <CountryLoc />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Advertising</li>
          <li className="hover:underline cursor-pointer">Business</li>
          <li className="hover:underline cursor-pointer">How search works</li>
        </ul>
        <ul className="flex items-center space-x-6">
          <li className="hover:underline cursor-pointer">Privacy</li>
          <li className="hover:underline cursor-pointer">Terms</li>
          <li className="hover:underline cursor-pointer">Settings</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
