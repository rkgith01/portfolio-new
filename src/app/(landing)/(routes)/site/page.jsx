import SiteData from '@/components/SiteData'
import React from 'react'
import SmoothScroll from '@/components/SmoothScroll'
import Footer from '@/components/Footer'

const AboutSite = () => {
  return (
    <div className='text-white'>
      <SiteData/>
      <Footer/>
      <SmoothScroll />
    </div>
  )
}

export default AboutSite