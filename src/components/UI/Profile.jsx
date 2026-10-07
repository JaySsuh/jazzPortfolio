export default function Profile({heading, entries}) {
    return (
        <section className="mt-8">
            <h2 className="mb-2 font-sans text-2xl font-semibold">{heading}</h2>
            {entries.map(({id, title, detail}) => (
                <div key={id} className="mb-3">
                    <strong>{title}</strong>
                    <div>{detail}</div>
                </div>
            ))}
        </section>
    )
}