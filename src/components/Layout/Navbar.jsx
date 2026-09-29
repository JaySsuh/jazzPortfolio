import {NavLink} from "react-router-dom";
import {navItems} from "./NavItems";

const linkClasses = ({isActive}) => `px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-200'}`

export default function Navbar() {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold tracking-wide">
                        Jasmynne Kang
                    </h1>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500"> My Portfolio</p>
                </div>

                <nav className="flex gap-2">
                    {navItems.map((item) => {
                        <Navlink
                        key={item.to}
                        to={item.to}
                        end={item.exact}
                        className={linkClasses}
                    >
                        {item.label}
                    </Navlink>
                    })}
                </nav>
            </div>
        </header>
    )
}