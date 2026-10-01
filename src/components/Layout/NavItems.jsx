import {routes} from "../../routes";

export const NavItems = routes.map(({path, label}) => ({
    to: path,
    label,
    exact: path === "/",
}))