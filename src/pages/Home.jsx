import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import VIframe from '../components/VIframe'
import Slider from '../components/Slider'
import Testimonial from '../components/Testimonial'
import FooterCredit from '../components/FooterCredit'


const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Testimonial />
        <VIframe />
        <Newsletter />
        <Footer />
        <FooterCredit />
    </div>
  )
}

export default Home