import useTransition from "./useTransition";

export default function ReuseLinkStyle() {
    const transition = useTransition()
    const link = `hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-950 via-purple-700 to-fuchsia-700 relative after:absolute inline-block after:left-0 after:bottom-0 after:border-b-2 after:border-violet-800 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${transition}`
    return link;
}
