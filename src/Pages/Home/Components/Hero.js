import React from 'react'
import video from '../../../Assets/Earth.mp4';
import {Link} from 'react-router-dom';

const Hero = ({heading}) => {
  return (
<div className='hero'>
<video src={video} autoPlay loop muted />

<div className='content'>
  <h1>{heading}</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>


<div className='buttons'>
  <Link to='/training'>Try Now!</Link>
  <Link to='/contact'>Contact Us</Link>
  </div>
</div>
</div>
    )
}

export default Hero