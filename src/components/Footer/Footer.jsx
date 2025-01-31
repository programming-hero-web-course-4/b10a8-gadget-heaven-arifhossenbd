import { Link } from "react-router";
import useTransition from "../utilities/useTransition";
import ReuseLinks from "../utilities/ReuseLinks";
import ReuseLinkStyle from "../utilities/ReuseLinkStyle";

export default function Footer() {
  const footerLinksTextStyle = `text-base font-normal`;
  const links = ReuseLinks(footerLinksTextStyle);
  const linksStyle = ReuseLinkStyle();
  const transition = useTransition()
  return (
    <footer className={`bg-base-50 py-5 md:py-10 px-2 md:px-0 m-0 flex flex-col gap-3 md:gap-5 lg:gap-8 ${transition}`}>
      <div className={`flex flex-col justify-center items-center text-center space-y-2 md:space-y-4 ${transition}`}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold">Gadget Heaven</h1>
        <p>
          Leading the way in cutting-edge technology and innovation.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div className={`flex justify-between w-full md:w-9/12 lg:w-10/12 mx-auto flex-wrap gap-5 md:gap-0 ${transition}`}>
        <nav className={`flex flex-col w-fit ${transition}`}>
          <h6 className="footer-title">Services</h6>
          <Link to="#" className={`${linksStyle} w-fit`}>Branding</Link>
          <Link to="#" className={`${linksStyle} w-fit`}>Design</Link>
          <Link to="#" className={`${linksStyle} w-fit`}>Marketing</Link>
          <Link to="#" className={`${linksStyle} w-fit`}>Advertisement</Link>
        </nav>
        <nav className={`flex flex-col w-fit ${transition}`}>
          <h6 className="footer-title">Company</h6>
          <ul>
            {links}
          </ul>
        </nav>
        <nav className={`flex flex-col w-fit ${transition}`}>
          <h6 className="footer-title">Legal</h6>
          <Link to="#" className={`${linksStyle} w-fit`}>Terms of use</Link>
          <Link to="#" className={`${linksStyle} w-fit`}>Privacy policy</Link>
          <Link to="#" className={`${linksStyle} w-fit`}>Cookie policy</Link>
        </nav>
      </div>
    </footer>
  )
}
