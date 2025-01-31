import { Link, Outlet } from "react-router";
import Banner from "../Banner/Banner";
import useTransition from "../utilities/useTransition";
import Gadgets from "../Gadgets/Gadgets";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

export default function Home() {
  const transition = useTransition();
  const btn = <Link to="dashboard" className={`btn bg-white hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 hover:text-white border-none text-violet-800 font-bold rounded-full  ${transition}`}>Shop Now</Link>
  const [category, setCategory] = useState();
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  return (
    <div className={`px-2 md:px-0 md:w-11/12 mx-auto ${transition}`}>
      <Banner bannerTitle="Upgrade Your Tech Accessorize with Gadget Heaven Accessories" bannerDescription="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!" btn={btn} />
      <div className="flex flex-col md:flex-row gap-8">
        <Sidebar handleCategoryChange={handleCategoryChange} />
        <Outlet />
        <Gadgets category={category} handleCategoryChange={handleCategoryChange} />
      </div>
    </div>
  )
}
