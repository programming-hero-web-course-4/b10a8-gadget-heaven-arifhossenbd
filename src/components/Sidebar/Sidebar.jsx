import { useContext, useState } from "react";
import { DataContext } from "../Root/Root";
import useTransition from "../utilities/useTransition";
import { NavLink } from "react-router";
import { Helmet } from "react-helmet-async";

export default function Sidebar({ handleCategoryChange }) {
    const [activeCategory, setActiveCategory] = useState("All Products")
    const data = useContext(DataContext);
    const uniqueCategories = [...new Set(data?.map(category => category?.category))]
    const transition = useTransition();

    const handleClick = (category) => {
        setActiveCategory(category)
        handleCategoryChange(category)
    }
    return (
        <div className="">
            <Helmet>
                <title>{activeCategory ? activeCategory : "Home | Gadget Heaven"}</title>
                <meta name="description" content={`Explore gadgets in the ${activeCategory}.`} />
            </Helmet>
            <nav className={`shadow bg-base-100 p-4 rounded-2xl ${transition}`}>
                <ul className={`flex md:flex-col flex-wrap gap-2 md:gap-3 ${transition}`}>
                    {
                        uniqueCategories?.map((category, idx) => <li key={idx}>
                            <NavLink onClick={() => handleClick(category)} key={idx} className={`btn border-none font-bold rounded-full w-full ${transition} ${activeCategory === category && `bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 text-white` || `text-violet-800 bg-base-200`}`}> {category} </NavLink>
                        </li>)
                    }
                </ul>
            </nav>
        </div>
    )
}