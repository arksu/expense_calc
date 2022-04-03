import Link from "next/link";
// import styles from "./NavBar.scss"

export default function NavBar() {
    return (
        // <nav className={styles.navbar}>
        <nav>
            <Link href={"/expenses"}><a>Expenses</a></Link>
            <Link href={"/about"}><a>About</a></Link>
        </nav>
    )
}