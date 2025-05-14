import Overview from '@/components/dashboard/overview/Overview'
import Sidebar from '@/components/dashboard/sidebar/Sidebar'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='w-[20%] h-screen bg-news-dark pb-5'>
        <Sidebar />
      </div>
      <div className='w-[80%] h-screen'>
        <Overview />
      </div>
    </div>
  )
}

export default page