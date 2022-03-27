import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <Link href={"/expenses"}><a>Expenses</a></Link>
            <Link href={"/about"}><a>About</a></Link>
        </>
    )
}