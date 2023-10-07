import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import SearchBox from "@/components/searchBox";
import SearchBar from "@/components/searchBar";

const inter = Inter({ subsets: ["latin"] });
function SearchBoxes() {
    return (
        <div className="bg-white">
            <SearchBar />
            <div className="flex ">
                <SearchBox
                    title="Data Modality"
                    searchItems={["Text", "Image", "Audio", "Video"]}
                />
                <SearchBox
                    title="Data Type"
                    searchItems={["Experimental Performance", "RNA Sequencing", "Image"]}
                />
                <SearchBox
                    title="Biological Type"
                    searchItems={["Text", "Image", "Audio", "Video"]}
                />
                <SearchBox title="Special" searchItems={["Text", "Image", "Audio", "Video"]} />
                <SearchBox title="Source" searchItems={["Text", "Image", "Audio", "Video"]} />
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <div className="flex justify-end bg-white">
            <Navbar />
            <SearchBoxes />
        </div>
    );
}
