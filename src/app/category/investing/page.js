import Banner from '@/components/Shared/Banner'
import PageTabs from '@/components/Shared/PageTabs'
import InvestingNews from './InvestingNews'

const page = () => {
  return (
    <div>
        <Banner title="investing" color="bg-news-headline" />

        <div className='mt-20'>
          <PageTabs />
        </div>

        
        <InvestingNews />
    </div>
  )
}

export default page