import LoginBTN from "./login-btn";
import switchBTN from "./switchBNT";
import SearchBar from "./searchBar";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 h-full bg-black text-white flex flex-col  items-center p-4 w-20">
            <LoginBTN />
        </div>
    );
}
