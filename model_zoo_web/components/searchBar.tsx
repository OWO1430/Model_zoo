import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const router = useRouter();
    return (
        <div className="flex justify-start text-center  border rounded-full border-hidden mx-2 p-2  bg-slate-400/50">
            <input
                className="bg-transparent"
                type="text"
                placeholder="Search a model..."
                onChange={(event) => {
                    setSearchInput(event.target.value);
                }}
            />
            <button
                className="bg-white/20 border border-transparent rounded-full px-1"
                onClick={() => {
                    router.push({
                        pathname: "/searchModel",
                        query: {
                            name: searchInput,
                        },
                    });
                }}
            >
                Search!
            </button>
        </div>
    );
}
