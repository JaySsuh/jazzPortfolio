import useScrolledPast from "../../Hooks/useScrolledPast";

export default function BackToTop({offset=200}) {
    const visible = useScrolledPast(offset)
    if (!visible) {
        return null
    }
    return (
        <button
            type="button"
            onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
            className="fixed bottom-5 left-1/2 -translate-x-1/2 cursor-pointer rounded-md bg-slate-800 px-5 py-2.5 text-white transition-colors hover:bg-slate-600"
        >
            Back To Top
        </button>
    )
}