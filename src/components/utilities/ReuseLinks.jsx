import { useTransition } from "react";
import { NavLink } from "react-router";
import ReuseLinkStyle from "./ReuseLinkStyle";

export default function ReuseLinks(textStyle) {
    const transition = useTransition();
    const linksStyle = ReuseLinkStyle();
    const links = [{ path: '/', label: 'Home' }, { path: '/statistics', label: 'Statistics' }, { path: '/dashboard', label: 'Dashboard' }, { path: '/contact', label: 'Contact' }]
    const link = links.map((link, idx) => (
        <li className={`list-none ${transition}`} key={idx}>
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
