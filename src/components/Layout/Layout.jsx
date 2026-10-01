import Navbar from "./Navbar";
import BackToTop from "../UI/BacktoTop";

export default function Layout({children}) {
    return (
        <div className="min-h-screen text-slate-900">
           <Navbar /> 
           <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
           <BackToTop />
        </div>
    )
}