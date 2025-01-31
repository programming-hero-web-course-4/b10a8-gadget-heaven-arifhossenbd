import { toast } from "react-toastify";
import useLocalStorage from "../utilities/useLocalStorage";
import useTransition from "../utilities/useTransition";
import ReuseDashboardCard from "../utilities/ReuseDashboardCard";

export default function Wishlist({ wishlists }) {
    const { storedList: cartList, addToStoredItem: addToStoredCart } = useLocalStorage("cart");
    const { deleteToStoredItem:deletedToWishlist } = useLocalStorage("wishlist");
    const transition = useTransition();

    const handleAddToCart = (cartId) => {
        if (cartList?.length < 3) {
            addToStoredCart(cartId);
            return toast.success(`${wishlists?.title} has been add your cart`)
        } else {
            toast.error("You have reached the maximum limit of items in your cart.")
        }
    };
    const handleDeleteToWishlists = (id) => {
        deletedToWishlist(id);
        return toast.success(`${wishlists?.title} is deleted from your wishlist`);
    }
    const btn = <button onClick={() => handleAddToCart(wishlists?.id)} disabled={!wishlists?.availability} className={`btn border-none font-bold rounded-full ${transition} ${wishlists?.availability
        ? "bg-purple-600 hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 text-white"
        : "bg-gray-400 text-gray-300 cursor-not-allowed"
        }`}>Add to Cart</button>
    return (
        <ReuseDashboardCard allData={wishlists} btn={btn} onDelete={handleDeleteToWishlists} />
    )
}
