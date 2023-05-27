import React from 'react'
import TopSection from './sections/TopSection';
import MainSection from './sections/MainSection';
import { BASE_URL } from '@/config/backend';
import { fetchData } from '@/utils/fetchData';

export const metadata = {
    title: 'YuviFood | Foods',
    description: 'Foods Page',
  }

const page = async () => {

  return (
    <div className="wrappper">
      <section>
        <TopSection />
      </section>
      <section>
        <MainSection />
      </section>
    </div>
  )
}

export default page