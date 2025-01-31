import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import useTransition from "../utilities/useTransition";
import Navbar from "../Navbar/Navbar";
import { createContext } from "react";

export const DataContext = createContext()
export default function Root() {
  const data = useLoaderData();
  const transition = useTransition();
  const presentRoute = useLocation();
  return (
    <DataContext.Provider value={data}>
      <div className={`${transition}`}>
        <Navbar presentRoute={presentRoute} />
        <main className={`bg-base-300 ${transition}`}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </DataContext.Provider>
  )
}
