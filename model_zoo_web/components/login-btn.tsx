// import { useSession, signIn, signOut } from "next-auth/react";
// import ImageBNT from "./imageBNT";

// export default function LoginBTN() {
//     const { data: session } = useSession();

//     if (session && session.user) {
//         console.log(session.user)
//         return (
//             <ImageBNT link = "https://ntumail.cc.ntu.edu.tw/" imageSrc = '/panda.png' style=""/>
//         );
//     }
//     return (
//         <div className="flex">
//             <button
//                 className="text-center border rounded-full border-hidden mx-2 p-2  bg-blue-400 "
//                 onClick={() => signIn()}
//             >
//                 Sign in
//             </button>
//         </div>
//     );
// }

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image"
import { useState } from "react";

export default function LoginBTN() {
    const { data: session } = useSession();
    const [hovered, setHovered] = useState(false)
    if (session && session.user) {
        console.log(session.user)
        return (
            <div>
                <Image
                    src= "/enter.png"
                    width={40}
                    height={40}
                    alt="searchIcon"
                    className={"filter invert bg-white my-3" + (hovered?" visible": " invisible" )}
                    onClick={() => {
                        signOut()
                        alert("Successfully signed out!")
                    }}
                />
                <Image
                src= {typeof session.user.image === "string" ?  session.user.image : "/panda.png"}
                width={40}
                height={40}
                alt="searchIcon"
                className=""
                onMouseEnter={()=>{
                    setHovered(true);
                    setTimeout(() => {
                        setHovered(false);
                      }, 2000);
                }}
                />
            </div>
        );
    }
    return (
        <div className="flex">
            <Image
                // src= {typeof session.user.image === "string" ?  session.user.image : "/panda.png"}
                src = "/login.png"
                width={50}
                height={50}
                alt="searchIcon"
                className="filter invert bg-white p-1"
                onClick={() => signIn()}
            />
        </div>
    );
}

// import { useSession, signIn, signOut } from "next-auth/react";

// export default function LoginBTN() {
//     const { data: session } = useSession();

//     if (session && session.user) {
//         return (
//             <div className="flex ">
//                 <p className="flex text-center border rounded-full border-hidden bg-blue-200 mx-3 p-3">
//                     Signed in as <p className="mx-3 text-blue-800">{session.user.image}</p>
//                 </p>
//                 <button
//                     className="text-center border rounded-full border-hidden mx-2 p-2  bg-blue-400"
//                     onClick={() => signOut()}
//                 >
//                     Sign out
//                 </button>
//             </div>
//         );
//     }
//     return (
//         <div className="flex">
//             <button
//                 className="text-center border rounded-full border-hidden mx-2 p-2  bg-blue-400 "
//                 onClick={() => signIn()}
//             >
//                 Sign in
//             </button>
//         </div>
//     );
// }
