import LoginBTN from "./login-btn";
import SwitchBTN from "./switchBNT";
import SearchBar from "./searchBar";
import ImageBNT from "./imageBNT";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 h-full bg-black text-white flex flex-col  items-center  w-20 justify-between py-3">
            <ImageBNT link = "https://ntumail.cc.ntu.edu.tw/" imageSrc = "/panda.png" style=""/>
            <SwitchBTN />
            <LoginBTN />
        </div>
    );
}
