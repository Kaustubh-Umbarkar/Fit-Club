import Header from '../Header/Header'
import './Hero.css'
import hero_image from"../../assets/hero_image.png";
import hero_image_back from"../../assets/hero_image_back.png";
import Calories from"../../assets/calories.png";
import Heart from"../../assets/heart.png";
import React from 'react'
import '../../App.css'
const Hero = () => {
  return (
   <div className="hero">
    <div className="left-h">
      <Header/>
      {/* The Advertisemnt*/}
      <div className="the-best-ad">
        <div></div>
        <span>The Best Fitness Club in town</span>
      </div>
      {/* Hero Heading*/}
      <div className="hero-text">
        <div>
          <span className='stroke-text'>Shape </span>
          <span>Your</span>
        </div>
        <div>
          <span>Ideal body</span>
         
        </div>
        <div>
          <span>
            In here we will help you to shape and build your ideal 
            body and live up your life to fullest.
          </span>
        </div>
      </div>
      {/* Figures*/}
      <div className="figures">
        <div>
          <span>140+</span>
          <span>Expert Coaches</span>
        </div>
        <div>
          <span>918+</span>
          <span>Members Joined</span>
        </div>
        <div>
          <span>50+</span>
          <span>Fitness Programs</span>
        </div>
      </div>
      {/* Hero Buttons*/}
      <div className="hero-buttons">
        <button className="btn">Get Started</button>
        <button className="btn">Learn More</button>
        </div>
    </div>
    <div className="right-h">
      <button className="btn">Join now</button>
      <div className="heart-rate">
        <img src={Heart} alt="" />
        <span>Heart Rate</span><span>116 bpm</span>
      </div>
      <img src={hero_image} alt="" className="hero_image" />
      <img src={hero_image_back} alt="" className="hero_image_back" />
      <div className="calories">
        <img src={Calories} alt="" />
        <div>
          <span>Calories Burned</span>
          <span> 220 kcal</span>
        </div>
      </div> 
    </div>
   </div>
  )
}
export default Hero
