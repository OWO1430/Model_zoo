import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBTN() {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div className="flex ">
                <p className="flex text-center border rounded-full border-hidden bg-blue-200 mx-3 p-3">
                    Signed in as <p className="mx-3 text-blue-800">{session.user.email}</p>
                </p>
                <button
                    className="text-center border rounded-full border-hidden mx-2 p-2  bg-blue-400"
                    onClick={() => signOut()}
                >
                    Sign out
                </button>
            </div>
        );
    }
    return (
        <div className="flex">
            <button
                className="text-center border rounded-full border-hidden mx-2 p-2  bg-blue-400 "
                onClick={() => signIn()}
            >
                Sign in
            </button>
        </div>
    );
}
