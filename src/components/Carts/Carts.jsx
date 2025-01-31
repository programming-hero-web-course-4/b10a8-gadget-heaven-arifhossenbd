import { useContext, useState } from "react"
import { DataContext } from "../Root/Root"
import Cart from "../Cart/Cart";
import useLocalStorage from "../utilities/useLocalStorage";
import useTransition from "../utilities/useTransition";
import { Link } from "react-router";
import ReuseModal from "../utilities/ReuseModal";

export default function Carts() {
  const data = useContext(DataContext);
  const transition = useTransition();
  const [ sortOrder, setSortOrder ] = useState("asc");
  const [ saveTotalCartPrice, setSaveTotalCartPrice ] = useState();
  const { storedList, clearStoredList } = useLocalStorage("cart");
  const { addToStored: addToStatistic } = useLocalStorage("statistics");
  const cartItems = data?.filter(item => storedList?.includes(item?.id));
  const cartId = cartItems?.map(cart => cart?.id);
  const totalPriceOfCart = cartItems?.reduce((acc, item) => acc + item.price, 0);
  const sortedPrice = cartItems?.sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price)) || [];

  const handleSortByPrice = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  }
  const handlePurchase = () => {
    clearStoredList();
    setSaveTotalCartPrice(totalPriceOfCart);
    addToStatistic(cartId);
    document.getElementById("modal_1").showModal();
  };

  const modalSuccessContent = (
    <div className="w-fit space-y-1 text-center">
      <figure>
        <img src="/assets/Group.png" alt="checkout" className="w-24 mx-auto my-2 md:my-4" />
      </figure>
      <h3 className="font-bold text-xl md:text-2xl">Payment Successfully</h3>
      <p className="md:text-lg font-semibold">Total: ${saveTotalCartPrice}</p>
      <p>Thanks for purchasing.</p>
      <p>Have a great day!</p>
    </div>);
  const modalSuccessId = "modal_1";
  const modalSuccess = ReuseModal(modalSuccessId, modalSuccessContent);
  return (
    <div className={`px-4 md:w-11/12 lg:w-10/12 mx-auto ${transition}`}>
      <div className={`flex justify-center md:justify-between items-center gap-5 md:gap-0 flex-wrap ${transition} mt-2 md:mt-5`}>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold space-y-5 ">Cart</h1>
        <div className={`flex items-center gap-3 md:gap-5 flex-wrap ${transition}`}>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Total Cost: $<span>{totalPriceOfCart}</span></h2>
          <div className={`flex items-center gap-3 md:gap-5 flex-wrap ${transition}`}>
            <button disabled={cartItems?.length < 2} onClick={handleSortByPrice} className={`btn hover:text-white hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 font-bold rounded-full text-purple-700 border-2 hover:border-purple-600 border-purple-500 ${transition}`
            }> Sort By Price <i className="fa-solid fa-sliders rotate-90"></i></button>
            <button disabled={!cartItems?.length} onClick={handlePurchase} className={`btn text-white bg-purple-600 hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 font-bold rounded-full border-2 hover:border-purple-600 border-purple-500 ${transition}`
            }>Purchase</button>
          </div>
        </div>
      </div>
      <div className={`${transition} my-12`}>
        {
          sortedPrice?.length > 0 ? cartItems?.map(carts => <Cart key={carts?.id} carts={carts} />)
            :
            <div className={`text-lg md:text-xl text-red-500 font-semibold text-center mb-12 md:mb-24 space-y-3 md:space-y-4 ${transition}`}>
              <p>There are no items in your cart.</p>
              <Link to="/" className={`btn hover:text-white hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 font-bold rounded-full text-purple-700 border-2 hover:border-purple-600 border-purple-500 ${transition}`}>Got to Home</Link>
            </div>
        }
      </div>
      <div>
        {modalSuccess}
      </div>
    </div>
  )
}
