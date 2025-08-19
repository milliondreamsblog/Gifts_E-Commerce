import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './pages/homepage/Header'
import {CategorySection} from './pages/homepage/CategorySection'
// import { HeroSlider } from './pages/homepage/HeroSlider'
import PromotionalSections from './pages/homepage/PromotionalSections'
import GiftsForEveryOccasion from './pages/homepage/GiftsForEveryOccasion'
import Slider  from './pages/homepage/Slider'
import Footer from './pages/homepage/Footer'
import AboutUs from './pages/homepage/AboutUs'
import Newsletter from './pages/homepage/Newsletter'
import BestSellers from './pages/homepage/Bestseller'
// import HeroSlider from './pages/homepage/HeroSlider'
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";

const slides = [
  { image: img1, gradient: true, title: "Gift Sets", subtitle: "Celebrate Thoughtfully", cta: "Shop Now",},
  { image: img2, gradient: true, title: "Gift Sets", subtitle: "Celebrate Thoughtfully", cta: "Shop Now", },
  { image: img3, gradient: true, title: "Gift Sets", subtitle: "Celebrate Thoughtfully", cta: "Shop Now",},
];


function App() {
  

  return (
    <>
     <Header />
      <div className="container mx-auto">
      <Slider
        slides={slides} slideWidthPercent={75} gap={6} autoplay 
        />
      </div>
      {/* <HeroSlider /> */}
      <div className=' ml-16 mr-16'>
        <CategorySection />
      </div>

        <section className="bg-white ml-16 mr-16">
          <GiftsForEveryOccasion />
        </section>

        <section className="bg-gray-50 ml-16 mr-16">
          <PromotionalSections />
        </section>

        <section className="bg-gray-50 ml-16 mr-16">
          <BestSellers />
        </section>
        <section className="bg-gray-50 ml-16 mr-16">
          <AboutUs />
        </section>
        <section className="bg-gray-50 ml-16 mr-16">
           <Newsletter />
        </section>
      <section className="bg-gray-50 ml-16 mr-16">
        <Footer />
       </section>
    </>
  )
}

export default App
