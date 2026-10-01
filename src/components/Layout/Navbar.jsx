import {NavLink} from "react-router-dom";
import {navItems} from "./NavItems";
import {profile} from "../../Data/Profile";

const linkClasses = ({isActive}) => `px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-200'}`

export default function Navbar() {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-y-3">
                <div>
                    <p className="text-xl font-semibold tracking-wide">{profile.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500"> My Portfolio</p>
=                </div>

                <nav aria-label="Main" className="flex flex-wrap gap-2">
                    {navItems.map((items) => (
                        <NavLink key={items.to} to={items.to} end={items.exact} className={linkClasses}>
                            {items.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    )
}