import ArtworkSection from "../Gallery/ArtworkSection";
import {featured} from "../../Data/ArtworkQueries";

export default function Home() {
    return <ArtworkSection select={featured} variant="tight" emptyMessage="Featured work is coming soon." />
    
}