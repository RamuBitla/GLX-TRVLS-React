import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../Home/Components/Hero'
import Form from '../Contact/components/Form';

import './Contact.css';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <Hero heading='Contact Page'/>
    <Form/>
    <Footer/>
    </>
  )
}

export default Contact