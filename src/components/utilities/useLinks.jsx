import { useTransition } from "react";
import { NavLink } from "react-router";
import useLinksStyle from "./useLinksStyle";

export default function useLinks( textStyle ) {
    const transition = useTransition();
    const linksStyle = useLinksStyle();
    const links = [{ path: '/', label: 'Home' }, { path: '/statistics', label: 'Statistics' }, { path: '/dashboard', label: 'Dashboard' }]
    const link = links.map((link, idx) => (
        <li className="list-none" key={idx}>
            <NavLink to={link?.path}
                className={({ isActive }) =>
                    `${isActive ? `text-violet-800 border-b-2 border-violet-800` : `${linksStyle}`} ${textStyle} text-sm font-semibold ${transition}`
                }
            >
                {link?.label}
            </NavLink>
        </li>
    ));
  return link
}
