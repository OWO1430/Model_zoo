import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import SearchBox from "@/components/searchBox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="bg-white">
            <Navbar />
            <SearchBox title="Data Modality" searchItems={["Text", "Image", "Audio", "Video"]} />
        </div>
    );
}
