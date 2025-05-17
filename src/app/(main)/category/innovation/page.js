import Banner from '@/components/Shared/Banner'
import PageTabs from '@/components/Shared/PageTabs'
import React from 'react'
import InnovationNews from './InnovationNews'

const page = () => {
  return (
    <div>
        <Banner title="innovation" color="bg-news-headline"  />

        <div className='mt-20'>
          <PageTabs />
        </div>

        
        <InnovationNews />
    </div>
  )
}

export default page