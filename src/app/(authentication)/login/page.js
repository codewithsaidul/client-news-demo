import Login from "@/components/auth/Login"
import { Suspense } from "react"


const Page = () => {
  return (
    <Suspense fallback={<div>Loading login page...</div>}>
      <Login />
    </Suspense>
  )
}

export default Page