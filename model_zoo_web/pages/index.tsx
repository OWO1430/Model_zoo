import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import SearchBox from "@/components/searchBox";
import SearchBar from "@/components/searchBar";
import ModelBlock from "@/components/modelBlock";
import { main } from "@/dummyData/models"

function ModelBlocks() {
    return (
        <div>
        {
            main.map((item, index) => (
                <ModelBlock
                    key={index} // Don't forget to provide a unique key when mapping through an array
                    link={item.link}
                    dataType={item.dataType}
                    description={item.description}
                    name={item.name}
                    style="" // Set your desired style here
                />
            ))
        }
        </div>
    )
}

const inter = Inter({ subsets: ["latin"] });
function SearchBoxes() {
    return (
        <div className="bg-white flex flex-col">
            <SearchBar />
            <div className="flex justify-center">
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
            <ModelBlocks />
        </div>
    );
}

export default function Home() {
    return (
        <div className="flex ml-24 bg-white">
            <SearchBoxes />
        </div>
    );
}
