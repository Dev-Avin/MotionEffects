import React, { useEffect, useRef } from 'react';
import like from '../assets/like.png';
import lightning from '../assets/lightning.png';
import moon from '../assets/moon.png';

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
          else{
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    const items = containerRef.current.querySelectorAll('.featureItem');
    items.forEach(item => {
      observer.observe(item);
    });

    return () => {
      items.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <>
    <div style={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
    <div className='features adj'>
      <div className='featureHead'>An All-Round Plugin With Powerful Features</div>
      <div className='featureSubHead'>
        Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
      </div>
      <div className='featuresCont' ref={containerRef}>
        <div className='featureItem container'>
          <img src={lightning} alt="Lightning"/>
          <div className='featureText'>
            <div className='featureHeading'>Light Weight</div>
            <div className='featureSub'>Motion Art for Elementor is designed to be lightweight.</div>
          </div>
        </div>
        <div className='featureItem container'>
          <img src={like} alt="Like"/>
          <div className='featureText'>
            <div className='featureHeading'>100% Responsive</div>
            <div className='featureSub'>Create a consistent visual experience across all devices.</div>
          </div>
        </div>
        <div className='featureItem container'>
          <img src={moon} alt="Moon"/>
          <div className='featureText'>
            <div className='featureHeading'>User Friendly Interface</div>
            <div className='featureSub'>Ensure a smooth experience for both applicants and administrators.</div>
          </div>
        </div>
      </div>
    </div>
    </div>
      <div style={{marginBottom: '200px'}}></div>
      </>
  );
}

export default Features;
