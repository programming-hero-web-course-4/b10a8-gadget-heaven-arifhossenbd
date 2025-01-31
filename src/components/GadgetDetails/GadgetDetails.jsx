import { useContext } from "react";
import { useNavigate, useParams } from "react-router"
import { DataContext } from "../Root/Root";
import Banner from "../Banner/Banner";
import useTransition from "../utilities/useTransition";
import { Helmet } from "react-helmet-async";
import useLocalStorage from "../utilities/useLocalStorage";
import { toast } from "react-toastify";

export default function GadgetDetails() {
    const data = useContext(DataContext);
    const gadgetId = useParams();
    const gadget = data?.find(gadget => gadget?.id === gadgetId?.id);
    const { id, title, image, price, description, specification, availability, rating } = gadget || {};
    const { storedList: cartList, addToStoredItem: addToCartItem } = useLocalStorage('cart');
    const { storedList: wishlistList, addToStoredItem: addToWishlistItem } = useLocalStorage('wishlist');
    const transition = useTransition();
    const bannerStyle = `relative py-8 md:py-12 md:pb-44 lg:pb-56`;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const navigate = useNavigate();
    const addToCart = (cartId) => {
        if (cartList?.length < 3) {
            if (!cartList?.includes(cartId)) {
                addToCartItem(cartId);
                toast.success(`${title} added to cart.`)
                navigate(-1);
            } else {
                toast.error(`${title} is already exists in cart`)
            }
        } else {
            toast.error("You have reached the maximum limit of items in your cart.");
            navigate(-1);
        }
    };
    const addToWishlist = (wishId) => {
        if (wishlistList?.length < 3) {
            if (!wishlistList?.includes(wishId)) {
                addToWishlistItem(wishId);
                toast.success(`${title} added to wishlist.`)
                navigate(-1);
            } else {
                toast.error(`${title} is already exists in wishlist`)
            }
        } else {
            toast.error("You have reached the maximum limit of items in your wishlist.");
            navigate(-1);
        }
    };
    return (
        <div className="bg-base-300 md:pb-96">
            <div className={`${transition} md:pb-44 lg:pb-24`}>
                <Helmet>
                    <title>{title} | Gadget Heaven</title>
                    <meta name="description" content="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!" />
                </Helmet>
                <Banner bannerTitle="Product Details" bannerDescription="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!" btn={null} btnContainer={null} bannerStyle={bannerStyle} />
                <div className={`md:absolute top-64 left-0 right-0 z-50 px-4 md:w-11/12 lg:w-10/12 mx-auto ${transition} py-6 mb-4 md:py-0`}>
                    <div className={`bg-gray-100 flex flex-col md:flex-row gap-2 lg:gap-5 flex-grow mt-4 md:mt-8 lg:mt-12 py-0 px-4 lg:px-12 rounded-2xl ${transition}`}>
                        <figure className="md:h-96 w-full md:w-1/2 my-auto">
                            <img
                                src={image}
                                alt={title} className={`rounded-xl object-cover h-full w-full scale-90 md:scale-110 lg:scale-x-100 lg:scale-y-110 ${transition}`} />
                        </figure>
                        <div className={`md:w-1/2 mx-auto space-y-2 p-4 md:p-8 ${transition}`}>
                            <h2 className="card-title font-bold text-2xl md:text-3xl lg:text-4xl">{title}</h2>
                            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Price: ${price}</h2>
                            <button className={`badge p-4 font-medium border-2 ${availability === true ? "bg-green-50 border-green-200 text-green-500" : "bg-red-50 border-red-200 text-red-500"}`}>
                                {
                                    availability ? "In Stock" : "Out of Stock"
                                }
                            </button>
                            <p>{description}</p>
                            <div className="flex flex-col gap-1 md:gap-2">
                                <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Specification</h2>
                                {specification?.map((specific, idx) => (
                                    <ul key={idx} className="font-medium text-black">
                                        <li> {idx + 1}. {specific}</li>
                                    </ul>
                                ))}
                            </div>

                            <div className={`space-y-1 md:space-y-2 ${transition}`}>
                                <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Rating</h2>
                                <div className={`flex flex-grow items-center gap-2 md:gap-4 ${transition}`}>
                                    <div className={`flex items-center md:text-xl font-semibold ${transition}`}>
                                        {[...Array(fullStars)].map((_, idx) => (
                                            <i key={idx} className="fa-solid text-yellow-400 fa-star" />
                                        ))}
                                        {hasHalfStar && (
                                            <i className="fa-solid text-yellow-400 fa-star-half-stroke" />
                                        )}
                                        {[...Array(emptyStars)].map((_, idx) => (
                                            <i key={idx} className="fa-regular text-yellow-400 fa-star" />
                                        ))}
                                    </div>
                                    <p className="bg-gray-100 w-fit rounded-full px-4 py-2 font-semibold">{rating}</p>
                                </div>
                            </div>
                            <div className={`flex flex-wrap items-center gap-2 md:gap-4 ${transition}`}>
                                <button
                                    onClick={() => addToCart(id)}
                                    disabled={!availability}
                                    className={`btn border-none font-bold rounded-full ${transition} bg-purple-600 hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 text-white`}
                                >
                                    Add to Cart <i className="fa-solid fa-shopping-cart"></i>
                                </button>
                                <button onClick={() => addToWishlist(id)} disabled={!availability}
                                    className={`btn border-none font-bold rounded-full h-12 w-12 ${transition} ${availability
                                        ? "bg-purple-600 hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 text-white"
                                        : "bg-gray-400 text-gray-300 cursor-not-allowed"
                                        }`}><i className="fa-regular fa-heart  text-xl md:text-2xl"></i> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
