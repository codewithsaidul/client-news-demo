import { Suspense } from "react"
import Search from '@/components/search/Search'

const page = () => {
    
  return (
    <Suspense fallback={<div>Loading login page...</div>}>
        <Search />
    </Suspense>
  )
}

export default page