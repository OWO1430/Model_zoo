import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import SearchBox from "@/components/searchBox";
import SearchBar from "@/components/searchBar";
import ModelBlock from "@/components/modelBlock";
import { main } from "@/dummyData/model"

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

export default function Home() {
    return (
        <div className="flex flex-col ml-24 bg-white">
            <SearchBar />
            <ModelBlocks />
        </div>
    );
}
