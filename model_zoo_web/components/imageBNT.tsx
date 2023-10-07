import Image from "next/image"
import Link from "next/link"


export default function ImageBNT (props: { link: string, imageSrc: string, style: string }) {
    return (
      <Link href = {props.link} className = {props.style}>
          <Image
              src= {props.imageSrc}
              width={50}
              height={50}
              alt="searchIcon"
              className="filter invert bg-white p-1"
          />
      </Link>
    );
  };
