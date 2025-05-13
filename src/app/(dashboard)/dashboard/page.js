import Sidebar from '@/components/dashboard/sidebar/Sidebar'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='w-[20%] h-screen bg-news-dark'>
        <Sidebar />
      </div>
      <div className='w-[80%] h-screen bg-rose-500'></div>
    </div>
  )
}

export default page