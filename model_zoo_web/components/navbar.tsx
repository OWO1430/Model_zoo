import LoginBTN from "./login-btn";
import SwitchBTN from "./switchBNT";
import SearchBar from "./searchBar";
import ImageBNT from "./imageBNT";
import { use, useState } from "react";

export default function Navbar() {
    const [hover, setHover] = useState(false)

    if (hover){
        return (
            <div className="fixed top-0 left-0 h-full bg-black text-white flex flex-col  items-start  w-40 justify-between py-3 pl-4" onMouseEnter={()=>{
                setHover(true);
            }} onMouseLeave={()=>{
                setHover(false);
            }}>
                <ImageBNT link = "https://ntumail.cc.ntu.edu.tw/" imageSrc = "/panda.png" style="" type = {hover} name = "Panda"/>
                <SwitchBTN type = {hover}/>
                <LoginBTN />
            </div>
        );
    }else{
        return (
            <div className="fixed top-0 left-0 h-full bg-black text-white flex flex-col  items-start  w-20 justify-between py-3 pl-4" onMouseEnter={()=>{
                setHover(true);
            }} onMouseLeave={()=>{
                setHover(false);
            }}>
                <ImageBNT link = "https://ntumail.cc.ntu.edu.tw/" imageSrc = "/panda.png" style="" type = {hover} name = "Panda" />
                <SwitchBTN type = {hover}/>
                <LoginBTN />
            </div>
        );
    }
    
}
