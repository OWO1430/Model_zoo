import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import SearchBox from "@/components/searchBox";
import SearchBar from "@/components/searchBar";
import ModelBlock from "@/components/modelBlock";

// const inter = Inter({ subsets: ["latin"] });
// function SearchBoxes() {
//     return (
//         <div className="bg-white flex flex-col">
//             <SearchBar />
//             <ModelBlock />
//         </div>
//     );
// }

export default function Home() {
    return (
        <div className="flex ml-24 bg-white">
            <ModelBlock />
        </div>
    );
}