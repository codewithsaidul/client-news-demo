import React from 'react'
import NewsCard from './NewsCard'
import DataTable from './DataTable'

const Overview = () => {
  return (
    <div className='mt-5 px-10'>
        <h1 className='text-4xl text-news-text font-medium font-title border-b pb-4'>Dashboard</h1>

        <div className='mt-20'>
            <NewsCard />
            <DataTable />
        </div>
    </div>
  )
}

export default Overview