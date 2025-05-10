import HeroSection from '@/components/CommonPageLayout/HeroSection'
import HightlightCard from '@/components/CommonPageLayout/HightlightCard'
import Banner from '@/components/Shared/Banner'
import PageTabs from '@/components/Shared/PageTabs'
import React from 'react'

const page = () => {
  return (
    <div>
        <Banner image="/images/banner/newsBanner.webp" title="News" />

        <div className='mt-20'>
          <PageTabs />
        </div>

        <div className='px-4 md:px-8 mt-20'>
          <HeroSection />
          <HightlightCard />
        </div>
    </div>
  )
}

export default page