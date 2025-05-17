import Banner from '@/components/Shared/Banner'
import PageTabs from '@/components/Shared/PageTabs'
import React from 'react'
import EntrepreneursNews from './EntrepreneursNews'

const page = () => {
  return (
    <div>
        <Banner title="Entrepreneurs" color="bg-news-headline" />

        <div className='mt-20'>
          <PageTabs />
        </div>

        
        <EntrepreneursNews />
    </div>
  )
}

export default page