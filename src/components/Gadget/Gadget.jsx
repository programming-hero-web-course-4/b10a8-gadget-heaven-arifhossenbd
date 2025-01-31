import { Link } from "react-router";
import useTransition from "../utilities/useTransition";

export default function Gadget({ gadget }) {

    const { id, title, image, price } = gadget || {}
    const transition = useTransition()

    return (
        <Link to={`/gadget/${id}`}>
            <div className={`card bg-base-100 shadow-lg flex flex-col h-full rounded-xl w-full ${transition}`}>
                <div className={`flex-grow space-y-2 md:space-y-4 ${transition}`}>
                    <figure className="rounded-t-xl h-80 md:h-60">
                        <img
                            src={image}
                            alt={title}
                            className={`rounded-xl object-cover h-full w-full scale-90 hover:scale-110 lg:scale-100 hover:lg:scale-125 cursor-zoom-in ${transition} w-full`} />
                    </figure>
                    <div className={`p-4 space-y-2 ${transition}`}>
                        <h2 className="card-title font-bold">{title}</h2>
                        <p>Price: ${price}</p>
                        <div>
                            <button className={`btn bg-white hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 hover:text-white border-2 border-purple-500 text-violet-800 font-bold rounded-full  ${transition} w-fit`}>Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
