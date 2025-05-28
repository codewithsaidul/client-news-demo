import Login from "@/components/auth/Login"
import { Suspense } from "react"


const page = () => {
  return (
    <Suspense fallback={<div>Loading login page...</div>}>
      <Login />
    </Suspense>
  )
}

export default page