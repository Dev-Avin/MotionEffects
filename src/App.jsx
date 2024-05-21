import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Achievements from './components/Achievements'
import Magic from './components/Magic'
import Application from './components/Application'
import Support from './components/Support'
import Features from './components/Features'

function App() {
  return (
    <>
      <div>
        <Header/>
        <Hero/>
        <Achievements/>
        <Magic/>
        <Application/>
        <Support/>
        <Features/>
        <div className='footer'>
          <div className='align'>  © 2023 Copywrite. All rights reserved by QodeMatrix.
          </div>
          <div className='footerLinks'>
            <div className='link '>Documentation</div>
            <div className='link '>Support</div>
            
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
