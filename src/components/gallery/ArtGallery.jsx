import ArtCards from "./ArtCards";

const LAYOUT = {
    spaced: "gap-x-36 gap-y-12",
    tight: "gap-0",
}

export default function ArtGallery({items, variant="spaced", emptyMessage}) {
    if (items.length === 0) {
        return <p className="mt-12 text-center">{emptyMessage ?? "Nothing here yet."}</p>
    }

    return (
        <div className={`flex flex-wrap justify-center ${LAYOUT[variant] ?? LAYOUT.spaced}`}>
            {items.map((item) => (
                <ArtCards key={item.id} {...item} />
            ))}
        </div>
    )
}