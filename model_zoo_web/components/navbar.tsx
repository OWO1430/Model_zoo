import LoginBTN from "./login-btn";
import SearchBar from "./searchBar";

export default function Navbar() {
    return (
        <div className="flex justify-between mt-6 mx-5">
            <ul className="">
                <li>TBA</li>
            </ul>
            <SearchBar />
            <LoginBTN />
        </div>
    );
}
