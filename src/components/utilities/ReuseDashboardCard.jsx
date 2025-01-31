import useTransition from "./useTransition";

export default function ReuseDashboardCard({ allData, btn, onDelete }) {
    const { id, title, image, description, price } = allData || [];
    const transition = useTransition()
    return (
        <div className={`my-4 md:my-8 ${transition}`}>
            <div className="card bg-base-100 flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-8 flex-grow items-center border border-gray-200 p-4">
                <figure className="md:w-1/3 lg:h-56 py-4 lg:py-8 rounded-xl my-auto bg-gray-100">
                    <img
                        src={image}
                        alt={title} className={`rounded-lg object-contain scale-100 hover:scale-125 cursor-zoom-in ${transition}`} />
                </figure>
                <div className="flex md:justify-between md:items-baseline md:w-2/3 lg:5/6 items-end">
                    <div className="space-y-2 md:space-y-4">
                        <h2 className="card-title font-bold">{title}</h2>
                        <p>Description: {description}</p>
                        <p className="font-semibold">Price: ${price}</p>
                        <div>
                            {btn}
                        </div>
                    </div>
                    <button data-tip="Delete" onClick={() => onDelete(id)} className={` hover:text-red-600 cursor-pointer text-red-500 flex items-center justify-center text-2xl md:text-4xl ${transition} pb-1 tooltip tooltip-warning`}><i className="fa-regular fa-circle-xmark"></i></button>
                </div>
            </div>
        </div>
    )
}

