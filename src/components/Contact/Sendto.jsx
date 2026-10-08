import Formfield from "./Formfield";

export default function Sendto({action, fields, note, method="post", encType="text/plain", submitLabel="Send Email",}) {
    return (
        <form action={action} method={method} encType={encType}>
            {fields.map((field) => (
                <FormField key={field.name} {...field} />
            ))}
            {note && <p className="mb-4">{note}</p>}
            <button type="submit" className="cursor-pointer rounded bg-slate-800 px-4 py-2 text-white transition-colors hover:bg-highlight hover:text-black">
                {submitLabel}
            </button>
        </form>
    )
}