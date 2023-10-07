import Image from "next/image";

export default function SearchBox(props: { title: string; searchItems: string[] }) {
    return (
        <div className="border-2 border-black w-1/6 h-60">
            <div className="mx-2">
                <h1 className="text-black my-1 font-medium">{props.title}</h1>
                <Image
                    src="/serach.png"
                    width={20}
                    height={20}
                    alt="searchIcon"
                    className="bg-black p-1"
                />

                {props.searchItems && (
                    <ul className="flex-wrap">
                        {props.searchItems.map((val, index) => {
                            return (
                                <li
                                    id={index.toString()}
                                    className="flex text-black border border-black "
                                >
                                    <input type="checkbox" className="accent-black" />
                                    <p>{val}</p>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
}
