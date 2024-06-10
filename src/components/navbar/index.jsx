import React from 'react'
import "./index.css"
export default function Navbar() {
  return (

    <nav>
        <span class="nav-toggle" id="js-nav-toggle">
            <i class ="bar"></i>
            </span>
            <div class="logo">
                <span class="icon circle-1"></span>
                <span class="icon circle-2"></span>
                <span class="icon circle-3"></span>
            </div>
            <ul id ="js-menu">
            <li>Discover</li>
        <li>Reviews</li>
        <li>Reviews</li>
        <li>Blog</li>
        <li>Products</li>
            </ul>
    </nav>
  )
}
