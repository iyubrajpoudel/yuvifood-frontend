import React from 'react'
import TopSection from './sections/TopSection';
import MainSection from './sections/MainSection';

export const metadata = {
    title: 'YuviFood | Foods',
    description: 'Foods Page',
  }

const page = () => {
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