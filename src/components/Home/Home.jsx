import { Link } from "react-router";
import Banner from "../Banner/Banner";
import useTransition from "../utilities/useTransition";

export default function Home() {
  const transition = useTransition();
  const btn = <Link to="dashboard" className={`btn bg-white hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 hover:text-white hover:border-none text-violet-800 font-bold rounded-full  ${transition}`}>Shop Now</Link>
  return (
    <div className="mt-96 lg:pt-80 pt-48">
      <div className="md:w-11/12 lg:w-10/12 mx-auto">
        <div>
          <Banner bannerTitle="Upgrade Your Tech Accessorize with Gadget Heaven Accessories" bannerDescription="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!" btn={btn} />
        </div>
        <h1>Home</h1>
      </div>
    </div>
  )
}
