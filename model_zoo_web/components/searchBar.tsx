import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const router = useRouter();
    return (
        <div className="flex justify-start text-center  border rounded-full border-hidden mx-2 mb-1 p-2  bg-slate-400/0">
            <Image
                src="/return_icon_154912.png"
                width={40}
                height={15}
                alt='return_icon'
            />
            <Image
                src="/serach.png"
                width={40}
                height={15}
                alt="searchIcon"
                className="bg-black p-1 mx-2"
                onClick={() => {
                    router.push({
                        pathname: "/searchModel",
                        query: {
                            name: searchInput,
                        },
                    });
                }}
            />
            <input
                className="bg-transparent"
                type="text"
                placeholder="Search a model..."
                onChange={(event) => {
                    setSearchInput(event.target.value);
                }}
            />

            <div className="border-2 border-black w-200">
                <button
                    className="bg-black border-2 border-black my-1.5 mx-2 w-40"
                    onClick={() => {
                        router.push({
                            pathname: "/searchModel",
                            query: {
                                name: searchInput,
                            },
                        });
                    }}
                >
                    Earth's Surface
                </button>
                <button
                    className="bg-white text-black border-2 border-black my-1.5 mx-2 w-60"
                    onClick={() => {
                        router.push({
                            pathname: "/searchModel",
                            query: {
                                name: searchInput,
                            },
                        });
                    }}
                >
                    Outer Space
                </button>
                <button
                    className="bg-white border-2 text-black border-black my-1.5 mx-2 w-80"
                    onClick={() => {
                        router.push({
                            pathname: "/searchModel",
                            query: {
                                name: searchInput,
                            },
                        });
                    }}
                >
                    Surface Special Simulation
                </button>
            </div>
        </div>
    );
}
