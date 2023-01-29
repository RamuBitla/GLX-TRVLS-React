import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Cards from '../Pricing/components/Cards';
import Hero from '../Home/Components/Hero';

import './Pricing.css';
const Pricing = () => {
  return (
    <div>
      <Navbar />
      <Hero heading="Pricing Page"/>
<Cards/>      
<Footer/>
    </div>
  )
}

export default Pricing