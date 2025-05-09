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
    </div>
  )
}

export default page