import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function ImageBNT(props: {
    link: string;
    imageSrc: string;
    style: string;
    type: boolean;
    name: string;
}) {
    const [hover, setHover] = useState(false);
    if (props.type) {
        return (
            <div
                className={"flex w-full pr-5 " + (hover ? " border-2 rounded" : "")}
                onMouseEnter={() => {
                    setHover(true);
                }}
                onMouseLeave={() => {
                    setHover(false);
                }}
            >
                <Link href={props.link} className={props.style}>
                    <Image
                        src={props.imageSrc}
                        width={50}
                        height={50}
                        alt="searchIcon"
                        className="filter invert bg-white p-1"
                    />
                </Link>
                <div className=" text-xl font-bold	pl-3 pt-3">
                    <h2> {props.name} </h2>
                </div>
            </div>
        );
    } else {
        return (
            <Link href={props.link} className={props.style}>
                <Image
                    src={props.imageSrc}
                    width={50}
                    height={50}
                    alt="searchIcon"
                    className="filter invert bg-white p-1"
                />
            </Link>
        );
    }
}
