import { type } from "os";
import ImageBNT from "./imageBNT";

export default function SwitchBNT(props: { type: boolean }) {
    return (
        <div className="flex flex-col items-start">
            <ImageBNT
                link="https://ntumail.cc.ntu.edu.tw/"
                imageSrc="/database.png"
                style="mb-4"
                type={props.type}
                name="Datasets"
            />
            <ImageBNT
                link="https://ntumail.cc.ntu.edu.tw/"
                imageSrc="/block.png"
                style="mb-4"
                type={props.type}
                name="Models"
            />
            <ImageBNT
                link="https://ntumail.cc.ntu.edu.tw/"
                imageSrc="/multiple.png"
                style="mb-4"
                type={props.type}
                name="Community"
            />
        </div>
    );
}
