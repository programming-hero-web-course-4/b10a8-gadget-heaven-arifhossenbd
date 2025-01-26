import { NavLink, Outlet } from "react-router";
import Banner from "../Banner/Banner";
import useTransition from "../utilities/useTransition";

export default function Dashboard() {
  const transition = useTransition();
  const btnContainer =
    <div className={`flex justify-center items-center gap-2 md:gap-4 ${transition}`}>
      <NavLink to="cart" className={({ isActive }) =>
        `${isActive ? `bg-transparent text-white` : `bg-white text-purple-800 hover:text-white hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500`} font-bold rounded-full px-8 md:px-12 text-sm ${transition} py-4 border-2`
      }>
        Cart
      </NavLink>
      <NavLink to="wishlist" className={({ isActive }) =>
        `${isActive ? `bg-transparent text-white` : `bg-white text-purple-800 hover:text-white hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500`} font-bold rounded-full px-8 md:px-12 text-sm ${transition} py-4 border-2`
      }>
       Wishlist
      </NavLink>
  </div>
  return (
      <div>
      <Banner bannerTitle="Dashboard" bannerDescription="Explore your dashboard to see all your recent transactions and orders." btnContainer={btnContainer} />
      <Outlet />
    </div>
  )
}
