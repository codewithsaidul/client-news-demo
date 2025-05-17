import Banner from '@/components/Shared/Banner'
import PageTabs from '@/components/Shared/PageTabs'
import React from 'react'
import BillionairesNews from './BillionairesNews'

const page = () => {
  return (
    <div>
        <Banner title="Billionaires" color="bg-news-headline" />

        <div className='mt-20'>
          <PageTabs />
        </div>

        
        <BillionairesNews />
    </div>
  )
}

export default page