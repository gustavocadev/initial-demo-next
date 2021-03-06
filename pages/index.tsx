import type { NextPage } from "next"
import MainLayout from "../components/layouts/MainLayout"

const Home: NextPage = () => {
  return (
    <MainLayout>
      <h1 className="title">Home Page</h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.tsx</code>
      </p>
    </MainLayout>
  )
}

export default Home
