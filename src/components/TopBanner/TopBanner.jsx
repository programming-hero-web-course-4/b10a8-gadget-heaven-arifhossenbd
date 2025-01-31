
export default function TopBanner() {
  return (
    <div>
      <div className="fixed -bottom-28 md:-bottom-44 lg:-bottom-52 left-0 right-0 w-3/4 md:w-1/2 mx-auto border-t-2 rounded-2xl p-2 glass z-10">
        <figure>
          <img src="/assets/banner.jpg" className="md:h-64 lg:h-80 h-full w-full md:rounded-2xl rounded-xl object-cover" />
       </figure>
      </div>
    </div>
  )
}
