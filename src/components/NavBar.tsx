import Link from "next/link";
import styles from "./navbar.module.scss"

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Link href={"/"}><a>Home</a></Link>
            <Link href={"/expenses"}><a>Expenses</a></Link>
            <Link href={"/about"}><a>About</a></Link>
        </nav>
    )
}