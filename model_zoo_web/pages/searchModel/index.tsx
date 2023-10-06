import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();
    let name: string;
    if (Array.isArray(router.query.name)) {
        name = router.query.name[0];
    } else {
        name = router.query.name ? router.query.name : "";
    }
    return (
        <div>
            <h1>Search params:</h1>
            <li>{name}</li>
        </div>
    );
}
