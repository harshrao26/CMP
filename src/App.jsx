/* eslint-disable no-unused-vars */
import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import MarqueeTwo from './components/MarqueeTwo'
import Features from './components/Features'
import PhotoText from './components/PhotoText'
import PhotoTextTwo from './components/PhotoTextTwo'
import Services from './components/Services'
import ServicesTwo from './components/ServicesTwo.jsx'
import AboutUs from './components/AboutUs.jsx'
import Last from './components/Last.jsx'
import Footer from './components/Footer.jsx'
import Button from './components/Button.jsx'
const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <PhotoText />
      <PhotoTextTwo />
      <Services />
      <ServicesTwo />
      <AboutUs />
      <Last />
      <MarqueeTwo />
      <Button />
      <Footer />
    </div>
  )
}

export default App
