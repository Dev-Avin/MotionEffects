import React from 'react'
import supports from '../assets/supports.png'

const Support = () => {
  return (
    <>
 <div style={{marginTop: '70px', height: '20px'}}></div>
    <div className='container' style={{width : '95%', alignSelf : 'center'}}>

      <div className='support '>
                <div className='supportHeading'>
           Supported by All Popular Browsers
          </div>
         <div className='supportSub'>
         Rest assured, Motion Art is designed to be compatible with all major web browsers.
       
        </div>
        <hr style={{width: '80%', color: ' #eee5ffbd', borderRadius: '10px'}}/>
        <div className='supportImg'>    
            <img src={supports} style={{width: '100%'}} alt=""/>
        </div>
    </div>
        
    </div>
    </>
    )
}

export default Support