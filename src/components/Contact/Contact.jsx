export default function Contact({phone, avatarSrc}) {
    return (
        <div>
            <img src={avatarSrc} alt="Profile" className="mb-3 h-[150px] w-[150px] rounded-full object-cover" />
            <div>{phone}</div>
        </div>
    )
}