import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, ReactNode } from "react"

type Props = {
  children: ReactNode
  href: string
}

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
}

const ActiveLink = ({ children, href }: Props) => {
  const { pathname } = useRouter()

  console.log(pathname)
  return (
    <Link href={href}>
      <a style={href === pathname ? style : undefined}>{children}</a>
    </Link>
  )
}

export default ActiveLink
