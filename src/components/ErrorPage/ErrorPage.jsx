import { Link, useRouteError } from "react-router"
import useTransition from "../utilities/useTransition";
import { Helmet } from "react-helmet-async";

export default function ErrorPage() {
    const error = useRouteError();
    const transition = useTransition();
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-1 md:gap-2">
            <Helmet>
                <title>Error | Gadget Heaven</title>
                <meta name="description" content="An error occurred on Gadget Heaven. Please try again later or contact support if the issue persists." />
            </Helmet>
            <h1 className="text-4xl font-bold text-red-500">{error?.statusText}</h1>
            <p className="text-2xl font-bold text-red-500">{error?.status}</p>
            <p className="text-gray-500">Please try again later.</p>
            <p className="text-gray-500">If the problem persists, please contact support.</p>
            <p className="text-gray-500">If you are still experiencing issues, please provide more details so that we can assist you better.</p>
            <p className="text-gray-500">Thank you for your patience.</p>
            <Link to="/"><button className={`btn border-2 border-purple-500 bg-transparent text-purple-800 hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 hover:text-white font-bold rounded-full  ${transition}`}>Go back Home</button></Link>
        </div>
    )
}
