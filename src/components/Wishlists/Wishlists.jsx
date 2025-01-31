import { useContext } from "react";
import { DataContext } from "../Root/Root";
import Wishlist from "../Wishlist/Wishlist";
import { Helmet } from "react-helmet-async";
import useLocalStorage from "../utilities/useLocalStorage";
import { Link, } from "react-router";
import useTransition from "../utilities/useTransition";

export default function Wishlists() {
  const data = useContext(DataContext);
  const { storedList } = useLocalStorage("wishlist");
  const wishlistItem = data?.filter(wishlist => storedList.includes(wishlist?.id));
  const transition = useTransition();
  return (
    <div className={`px-2 md:w-11/12 lg:w-10/12 mx-auto ${transition}`}>
      <Helmet>
        <title>Wishlist | Gadget Heaven</title>
        <meta name="description" content="Explore your wishlist to see all your favorite gadgets." />
      </Helmet>
      <h1 className="text-2xl md:text-3xl font-bold my-4 md:my-8">Wishlist</h1>
      <div className={transition}>
        {
          wishlistItem?.length > 0 ? wishlistItem?.map(wishlists => <Wishlist key={wishlists?.id} wishlists={wishlists} />) 
            :
            <div className={`text-lg md:text-xl text-red-500 font-semibold text-center mb-12 md:mb-24 space-y-3 md:space-y-4 ${transition}`}>
              <p>There are no items in your wishlist.</p>
              <Link to="/" className={`btn hover:text-white hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 font-bold rounded-full text-purple-700 border-2 hover:border-purple-600 border-purple-500 ${transition}`}>Got to Home</Link>
            </div>
        }
      </div>
    </div>
  )
}
