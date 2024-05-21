import React from 'react'
import GradientText from './GradientText.jsx'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='heroSide'>
            <GradientText text={'Transform '}/>
            <GradientText text={'Your Website'}/>
            <div style={{marginTop: '20px'}}>
            <div> With Motion </div>
            <div>    Art Effect</div>
            </div>
        </div>  
        <div className='heroMain'>
         <div className='heroMainText'>Attract Your Visitors Attention With Colorful
         <GradientText text={'Motion Art Effects'}/>
           
        </div>
         <div className='heroMainSub'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </div>
        </div>
    </div>
  )
}

export default Hero