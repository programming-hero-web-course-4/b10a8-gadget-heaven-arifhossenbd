import { Link } from "react-router-dom"
import useTransition from "../utilities/useTransition";
import useLinks from "../utilities/useLinks";

export default function Navbar({presentRoute}) {
    const navLinksTextStyle = `text-base`;
    const links = useLinks(navLinksTextStyle);
    const transition = useTransition();
    return (
        <div className={presentRoute?.pathname === '/' ? 'relative z-50' : 'bg-white z-50'}>
            <div className={`px-2 md:px-8 lg:px-28 flex items-center justify-between ${transition} py-4`}>
                <div className={`navbar flex justify-between items-center ${transition}`}>
                    <div>
                        <Link to="/" className={`text-xl font-semibold md:font-bold text-purple-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-600 ${transition}`}>GadgetHeaven</Link>
                    </div>
                    <div className="hidden md:flex">
                        <ul className={`flex items-center gap-4 ${transition} ${presentRoute?.pathname === "/" ? "" : undefined}`}>
                            {links}
                        </ul>
                    </div>
                    <div className={`hidden md:flex items-center gap-2 md:gap-3 lg:gap-5 ${transition}`}>
                        <Link to="dashboard/cart" className={`flex justify-center items-center rounded-full h-8 w-8 relative ${transition}  ${presentRoute.pathname === "/" ? "bg-fuchsia-100 hover:bg-fuchsia-200 border-none" : "hover:bg-purple-300 bg-transparent"} border-2 border-gray-300`}>
                            <i className={`fa-solid fa-cart-shopping h-fit w-fit text-violet-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-600 ${transition}`}></i>
                            <span className="text-sm font-semibold absolute -top-3 left-7">10</span>
                        </Link>
                        <Link to="dashboard/wishlist" className={`flex justify-center items-center rounded-full h-8 w-8 relative ${transition}  ${presentRoute.pathname === "/" ? "bg-fuchsia-100 hover:bg-fuchsia-200 border-none" : "hover:bg-purple-300 bg-transparent"} border-2 border-gray-300`}>
                            <i className={`fa-solid fa-heart h-fit w-fit text-violet-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-600 ${transition}`}></i>
                            <span className="text-sm font-semibold absolute -top-3 left-7">10</span>
                        </Link>
                    </div>
                </div>
                <div className={`dropdown dropdown-end md:hidden ${transition} w-fit`}>
                    <div tabIndex={0} role="" className="md:hidden ${transition}">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-purple-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className={`dropdown dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-fit py-4 px-6 shadow ${transition} text-violet-800 text-left`}>             {links}
                        <div className="flex justify-between items-center pt-3">
                            <Link to="dashboard/cart" className={`flex justify-center items-center bg-violet-700 hover:bg-violet-800 rounded-full h-5 w-5 p-3 relative border-spacing-11 border-gray-500 ${transition}`}>
                                <i className="fa-solid fa-cart-shopping h-fit w-fit text-white hover:text-gray-50 text-xs"></i>
                                <span className="text-sm font-semibold absolute -top-3 left-5">10</span>
                            </Link>
                            <Link to="dashboard/wishlist" className={`flex justify-center items-center bg-violet-700 hover:bg-violet-800 rounded-full h-5 w-5 p-3 relative border border-gray-500 ${transition}`}>
                                <i className="fa-solid fa-heart h-fit w-fit text-white hover:text-gray-50 text-xs"></i>
                                <span className="text-sm font-semibold absolute -top-3 left-5">20</span>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
