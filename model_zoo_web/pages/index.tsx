import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import SearchBox from "@/components/searchBox";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

    return (
        <div className="flex bg-white h-full">
            <Navbar />

            <div className="flex ml-24">
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
