import React from 'react'
import "./navbar.css"
export default function Navbar() {
 
  return (

    <nav className='navbar'>
      <img  className='img' src='https://testadmin.donatekart.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdk-logo.7aa92b7d.png&w=256&q=75' alt='this is a img'/>
     
      <ul className='linkList'>
        <li className='link'> <a href="/">Home</a> </li>
        <li className='link'> <a href="products">Products</a> </li>
        <li className='link'> <a href='about'>About us</a> </li>
        <li className='link'> <a href='contact'>Contact us</a></li>
      </ul>
    </nav>
  )
}
