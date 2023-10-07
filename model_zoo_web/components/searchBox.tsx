import Image from "next/image";

export default function SearchBox(props: { title: string; searchItems: string[] }) {
    return (
        <div className="m-3">
            <div className="border-4 border-black w-48 h-72 ">
                <div>
                    <h1 className="text-black text-xl my-1 mx-2 font-medium">{props.title}</h1>
                    <Image
                        src="/serach.png"
                        width={20}
                        height={20}
                        alt="searchIcon"
                        className="bg-black p-1 mx-2"
                    />
                    {props.searchItems && (
                        <ul className="flex flex-wrap justify-between">
                            {props.searchItems.map((val, index) => {
                                return (
                                    <li
                                        id={index.toString()}
                                        key={index}
                                        className="flex text-black border-2 border-black  w-fit my-2 mx-2"
                                    >
                                        <input type="checkbox" className="accent-black mx-1" />
                                        <p className="mx-1">{val}</p>
                                    </li>
                                );
                            })}
                            <li>
                                <select className="text-black border-2 border-black w-40 my-2 mx-2">
                                    <option>Others</option>
                                </select>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
