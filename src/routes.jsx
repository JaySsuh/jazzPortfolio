import Home from "./components/Pages/Home";
import GalleryPage from "./components/Pages/GalleryPage";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import {categories} from "./Data/Categories";


const categoryRoutes = categories.map(({slug, label, title}) => ({
    path: `/${slug}`,
    label,
    element: <GalleryPage title={title} slug={slug} />
}))

export const routes =[
    {path:"/", label: "Home", element: <Home />},
    ...categoryRoutes,
    {path: "/Contact", label: "Contact", element: <Contact />},
    {path: "/About", label: "About Me", element: <About />},
]