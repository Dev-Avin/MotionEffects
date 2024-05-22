import React from 'react';
import wand from '../assets/wand.png';

const Magic = () => {
  const handlePurchaseClick = () => {
    window.location.href = 'https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891';
  };

  return (
    <div style={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
    <div className='magic adj' >
      <div className='magicText'>
        <div className='magicHeading'>
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </div>
        <div className='magicSub'>
          Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
        </div>
        <button 
          className='magicButton'
          onClick={handlePurchaseClick}
        >
          Purchase From Envato
        </button>
      </div>
      <div className='magicImg'>
        <img src={wand} alt="Magic Wand"/>
      </div>
    </div>
    </div>
  );
};

export default Magic;
