import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import {routes} from "./routes";

export default function App() {
    return (
        <Layout>
            <Routes>
                {routes.map(({path, element}) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Layout>
    )
}