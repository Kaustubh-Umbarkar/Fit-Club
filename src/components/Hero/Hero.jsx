import Header from '../Header/Header'
import './Hero.css'
import React from 'react'
const Hero = () => {
  return (
   <div className="hero">
    <div className="left-h">
      <Header/>
    </div>
    <div className="right-h">Right Side</div>
   </div>
  )
}
export default Hero
