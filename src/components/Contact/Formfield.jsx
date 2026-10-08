const baseClasses = "w-full rounded border border-slate-300 bg-white px-3 py-2 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"

const controls = {
    textarea: ({type, ...props}) => <textarea {...props} />,
}
const DefaultControl = (props) => <input {...props} />

export default function Formfield({name, label, type="text", ...rest}) {
    const id = `field-${name}`
    const Control = controls[type] ?? DefaultControl

    return (
        <div className="mb-4">
            <label htmlFor={id} className="mb-1 block">{label}</label>
            <Control id={id} name={name} type={type} required className={baseClasses} {...rest} />
        </div>
    )
}