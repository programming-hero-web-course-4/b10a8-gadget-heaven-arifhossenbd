import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import useTransition from "../utilities/useTransition";
import Navbar from "../Navbar/Navbar";

export default function Root() {
  const transition = useTransition();
  const presentRoute = useLocation();
  return (
    <div className={`${transition} flex flex-col min-h-screen`}>
      <Navbar presentRoute={presentRoute} />
      <main className="bg-base-200 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
