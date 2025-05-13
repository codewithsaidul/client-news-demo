import Banner from '@/components/Shared/Banner'
import PageTabs from '@/components/Shared/PageTabs'
import React from 'react'
import LeadershipNews from './LeadershipNews'

const page = () => {
  return (
    <div>
        <Banner title="leadership" color="bg-news-headline" />

        <div className='mt-20'>
          <PageTabs />
        </div>

        
        <LeadershipNews />
    </div>
  )
}

export default page