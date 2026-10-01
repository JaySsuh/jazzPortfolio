import Home from "./components/Pages/Home";
import GalleryPage from "./components/Pages/GalleryPage";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import {illustrations} from "./Data/Artworks";

export const routes =[
    {path:"/", label: "Home", element: <Home />},
    {path:"/illustration", label: "Illustration", element:<GalleryPage title="Illustrations" items={illustrations} />},
    {path: "/Graphic Design", label: "Graphic Design", element: <GalleryPage title="Graphic Design" items={GD} />},
    {path: "/visual-development", label: "Visual Development", element: <GalleryPage title="Visual Development" items={VD} />},
    {path: "/Contact", label: "Contact", element: <Contact />},
    {path: "/About", label: "About Me", element: <About />},
]