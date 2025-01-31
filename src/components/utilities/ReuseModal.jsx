import useTransition from "./useTransition"
export default function ReuseModal(modalId, modalContent) {
    const transition = useTransition()
    return (
        <dialog id={modalId} className={`modal space-y-2 mx-auto flex flex-col flex-grow my-auto h-full w-4/6 md:w-fit ${transition}`} onClick={(e) => e.target.tagName === "DIALOG" && e.target.close()}>
            <div className={`modal-box my-auto w-fit h-fit ${transition}`}>
                {modalContent}
                <div className="pt-2 md:pt-4">
                    <button onClick={() => document.getElementById(modalId).close()} className={`btn bg-purple-100 hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 hover:text-white border-2 border-purple-500 text-violet-800 font-bold rounded-full w-full ${transition}`}>Close</button>
                </div>
            </div>
        </dialog>
    )
}
