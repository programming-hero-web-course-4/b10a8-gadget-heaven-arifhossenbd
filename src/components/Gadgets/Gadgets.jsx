import { useContext } from "react"
import { DataContext } from "../Root/Root"
import Gadget from "../Gadget/Gadget"
import useTransition from "../utilities/useTransition";

export default function Gadgets({ category, handleCategoryChange }) {
    const allData = useContext(DataContext);
    const defaultData = allData?.filter(gadget => gadget?.title);
    const filterData = category ? allData?.filter(gadget => gadget?.category === category && gadget?.title) : defaultData;
    const gadgets = category === "All Products" ? defaultData : filterData;
    const transition = useTransition()
    const handleClick = () => {
        handleCategoryChange("All Products")
    }
    return (
        <div className={`pb-8 md:pb-12 ${transition}`}>
            {
                gadgets?.length > 0 ? (
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ${transition}`}>
                        {
                            gadgets?.map(gadget => <Gadget key={gadget?.id} gadget={gadget} />)
                        }
                    </div>
                )
                    : <div className={`text-lg md:text-xl text-red-500 font-semibold text-center mb-12 md:mb-24 space-y-3 md:space-y-4 ${transition}`}>
                        <p>No gadgets found in this category.</p>
                        <button onClick={handleClick} className={`btn hover:text-white hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 font-bold rounded-full text-purple-700 border-2 hover:border-purple-600 border-purple-500 ${transition}`}>Got to Shop</button>
                    </div>
            }
        </div>
    )
};
