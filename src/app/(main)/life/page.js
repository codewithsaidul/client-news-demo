import Banner from '@/components/Shared/Banner'
import React from 'react'
import AllLifeNews from './AllLifeNews'

const page = () => {
  return (
    <div>
        <Banner title="life" image="/images/banner/LifeBanner.webp" />
        <AllLifeNews />
    </div>
  )
}

export default page