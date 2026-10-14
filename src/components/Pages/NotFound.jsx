import {Link} from "react-router-dom";
import PageHeading from "../UI/PageHeading";

export default function NotFound() {
    return (
        <>
        <PageHeading>Page Not Found</PageHeading>
        <p className="text-center">
            <Link to="/" className="underline">Back To Home</Link>
        </p>
        </>
    )
}