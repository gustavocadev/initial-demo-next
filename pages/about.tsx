import { NextPage } from "next"
import DarkLayout from "../components/layouts/DarkLayout"
import MainLayout from "../components/layouts/MainLayout"
import { ReactNode } from "react"

type Props = {
  children: React.ReactNode
}

export default function AboutPage() {
  return (
    <>
      <h1 className="title">About Page</h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.tsx</code>
      </p>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}
