import React from 'react'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className='header'>
        <div className='flexRow'>
           <img src={logo} alt="Motion Effects"/>
         </div>
         <div>
            <button className='headerButton'>
                 Purchase now

            </button>
         </div>
    </div>
  )
}

export default Header