import PageHeading from "../UI/PageHeading";
import ArtworkSection from "../Gallery/ArtworkSection";
import {byCategory} from "../../Data/ArtworkQueries";

export default function Gallerypage({title, slug}) {
    return (
        <>
        <PageHeading>{title}</PageHeading>
        <ArtworkSection
            select={(items) => byCategory(items, slug)}
            emptyMessage="Work for this section is coming soon"
        />
        </>
        )
}