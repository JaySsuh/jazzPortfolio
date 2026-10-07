export default function ArtCards({src, alt, title, description}) {
    return (
        <figure className="group relative m-1 inline-block">
            <img 
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                className="block h-auto max-h-[500px] max-w-full"
            />
            <figcaption className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none">
                <div className="translate-y-5 text-3xl font-bold transition-transform duration-300 group-hover:translate-y-0 motion-reduce:transition-none">
                    {title}
                </div>
                {description && (
                    <p className="mt-1 translate-y-5 text-xl transition-transform duration-300 group-hover:translate-y-0 motion-reduce:transition-none">
                        {description}
                    </p>
                )}
            </figcaption>
        </figure>
    )
}