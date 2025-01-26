import { Link } from "react-router";
import useLinks from "../utilities/useLinks";
import useLinksStyle from "../utilities/useLinksStyle";

export default function Footer() {
  const footerLinksTextStyle = `text-base font-normal`;
  const links = useLinks(footerLinksTextStyle);
  const linksStyle = useLinksStyle();
  return (
    <div>
      <footer className="bg-white p-10 m-0 flex flex-col gap-3 md:gap-5 lg:gap-8">
        <div className="flex flex-col justify-center items-center text-center space-y-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold">Gadget Heaven</h1>
          <p>
            Leading the way in cutting-edge technology and innovation.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div className="flex justify-between md:w-11/12 lg:w-8/12 mx-auto flex-wrap gap-5 md:gap-0">
          <nav className="flex flex-col w-fit">
            <h6 className="footer-title">Services</h6>
            <Link to="#" className={`${linksStyle} w-fit`}>Branding</Link>
            <Link to="#" className={`${linksStyle} w-fit`}>Design</Link>
            <Link to="#" className={`${linksStyle} w-fit`}>Marketing</Link>
            <Link to="#" className={`${linksStyle} w-fit`}>Advertisement</Link>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Company</h6>
            <ul className="space-y-1">
              {links}
            </ul>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Legal</h6>
            <Link to="#" className={`${linksStyle} w-fit`}>Terms of use</Link>
            <Link to="#" className={`${linksStyle} w-fit`}>Privacy policy</Link>
            <Link to="#" className={`${linksStyle} w-fit`}>Cookie policy</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
