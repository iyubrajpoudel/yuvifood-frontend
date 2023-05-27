import React from 'react'
import TopSection from './sections/TopSection';
import MainSection from './sections/MainSection';
import { BASE_URL } from '@/config/backend';
import { fetchData } from '@/utils/fetchData';

// context
import { MyContextProvider } from '@/contexts/context'

export const metadata = {
    title: 'YuviFood | Foods',
    description: 'Foods Page',
  }

const page = async () => {

  return (
    <>
    <MyContextProvider>
      <div className="wrappper">
        <section>
          <TopSection />
        </section>
        <section>
          <MainSection />
        </section>
      </div>
    </MyContextProvider>
    </>
  )
}

export default page