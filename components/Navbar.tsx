import styles from "./Navbar.module.css"
import ActiveLink from "./ActiveLink"
type Props = {}

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
]

const Navbar = (props: Props) => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({ href, text }) => (
        <ActiveLink key={href} href={href}>
          {text}
        </ActiveLink>
      ))}
    </nav>
  )
}

export default Navbar
