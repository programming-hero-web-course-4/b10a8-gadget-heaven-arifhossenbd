import { NavLink, Outlet, useLocation } from "react-router";
import Banner from "../Banner/Banner";
import useTransition from "../utilities/useTransition";
import { Helmet } from "react-helmet-async";

export default function Dashboard() {
  const location = useLocation()
  const currentPageTitle =
    location.pathname.endsWith("/dashboard") || location.pathname.endsWith("/dashboard/cart")
      ? "Cart"
      : location.pathname.endsWith("/dashboard/wishlist")
        ? "Wishlist"
        : "Dashboard";
  const transition = useTransition();
  const btnContainer =
    <div className={`flex justify-center items-center gap-2 md:gap-4 ${transition}`}>
      <NavLink to="" end className={({ isActive }) =>
        `${isActive ? `bg-white text-purple-800` : `hover:text-white hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500`} font-bold rounded-full px-8 md:px-12 text-sm ${transition} py-4 border-2`
      }>
        Cart
      </NavLink>
      <NavLink to="wishlist" className={({ isActive }) =>
        `${isActive ? `bg-white text-purple-800` : ` hover:text-white hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500`} font-bold rounded-full px-8 md:px-12 text-sm ${transition} py-4 border-2`
      }>
        Wishlist
      </NavLink>
    </div>
  const bannerStyle = `py-8 md:py-12`
  return (
    <div className={transition}>
      <Banner
        bannerTitle="Dashboard"
        bannerDescription={`Explore your ${currentPageTitle.toLowerCase()} to see all related items.`}
        btn={null}
        btnContainer={btnContainer}
        bannerStyle={bannerStyle}
      />
      <div className="py-4">
        <Outlet />
      </div>
      <Helmet>
        <title>{currentPageTitle} | Gadget Heaven</title>
        <meta
          name="description"
          content={`Explore your ${currentPageTitle.toLowerCase()} to see all related items.`}
        />
      </Helmet>
    </div>
  )
}
