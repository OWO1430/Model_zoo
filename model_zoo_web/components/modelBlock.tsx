import Image from "next/image";
import Link from "next/link";

// export default function ModelBlock() {
export default function ModelBlock(props: { link: string, dataType: string, description: string, name: string, style: string }) {
  return (
    <div className="flex flex-col items-center p-2">
      <div className="border-2 border-black w-full h-32 flex items-center justify-between">
        <div className=" w-4/5 h-24 flex flex-col items-start justify-center">
          <h1 className="text-black text-xl ml-4 font-medium">{props.name}</h1>
          <h6 className="text-black text-lg ml-4">{props.description}</h6> {/* 调整字体大小 */}
        </div>
        <div className="flex items-center" >
          <div className="border-2 border-black h-14 inline-flex items-center whitespace-normal" >
            <h1 className="text-black text-base px-3 py-1 font-medium"># {props.dataType}</h1>
          </div>
          <div className="mr-5 ml-2 flex" >
            <Link href={props.link} className={props.style}>
              <Image
                src='/link.png'
                width={50}
                height={50}
                alt="searchIcon"
                className="filter bg-white p-1 mr-4"
              />
            </Link>
            {/* <Link href={props.link} className={props.style}> */}
              <Image
                src='/marketing.png'
                width={50}
                height={50}
                alt="searchIcon"
                className="filter bg-white p-1 mr-4"
              />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}