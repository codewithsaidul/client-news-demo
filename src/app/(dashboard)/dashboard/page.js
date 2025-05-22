import Overview from '@/components/dashboard/overview/Overview'
import Sidebar from '@/components/dashboard/sidebar/Sidebar'
import React from 'react'

const page = () => {
  console.log(process.env.JWT_SECRET)
  return (
    <Overview />
  )
}

export default page