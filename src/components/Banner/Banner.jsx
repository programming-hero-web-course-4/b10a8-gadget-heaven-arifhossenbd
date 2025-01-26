import { useLocation } from "react-router-dom";
import TopBanner from "../TopBanner/TopBanner";
import useTransition from "../utilities/useTransition";

export default function Banner({ bannerTitle, bannerDescription, btn = null, btnContainer = null }) {
  const transition = useTransition();
  const presentRoute = useLocation();
  return (
    <div className={presentRoute?.pathname === "/" ? "absolute top-0 left-0 right-0 z-10 mt-2" : undefined}>
      <div className={presentRoute?.pathname === '/' ? `relative space-y-2 md:space-y-0 glass rounded-2xl ${transition}` : undefined}>
        <div className={presentRoute?.pathname === '/' ? `border p-1 border-gray-300 rounded-xl md:rounded-2xl glass ${transition}` : undefined}>
          <div className={`bg-gradient-to-t from-purple-900 via-purple-600 to-fuchsia-400 text-white text-center  ${transition} ${presentRoute?.pathname === '/' ? `rounded-xl md:rounded-2xl m-0.5 pt-16 pb-24 md:py-20 md:pb-32 lg:py-20 lg:pb-40` : `py-4 md:py-8`}`}>
            <div className={`w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto space-y-4 ${transition}`}>
              <h1 className="text-2xl lg:text-4xl font-bold md:font-extrabold">{bannerTitle}</h1>
              <p>{bannerDescription}</p>
              {btn}
              {btnContainer}
            </div>
          </div>
        </div>
        {
          presentRoute?.pathname === "/" ? <TopBanner /> : undefined
        }
      </div>
    </div>
  )
}
