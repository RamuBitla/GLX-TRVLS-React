import { Link } from 'react-router-dom';
import {FaTimes, FaBars} from 'react-icons/fa'
import  './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const[click, setClick] = useState(false)

    const handleClick = ()=>{
        setClick(!click)
    }
  return (
<nav>
    <div className="logo">
        <h1>GLX TRVL</h1>
    </div>

    <div className={click ? "menu active" : "menu"}>
        <Link to='/'>Home</Link>
        <Link to='/pricing'>Pricing</Link>
        <Link to='/training'>Training</Link>
        <Link to='/contact'>Contact</Link>
    </div>

    <div className="hamburger" onClick={handleClick}>
       {
       click ? (
       <FaTimes style={{color:'white'}} size={25}/>
) :
       ( <FaBars style={{color:'white'}} size={25}/>)
       }
    </div>
</nav>
    )
}

export default Navbar