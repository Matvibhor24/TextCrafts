import React from 'react'
import './About.css'
import bgLogo from './textcrafts.png'

export default function About(props) { 
  const AboutBGStyle = {
    backgroundColor: props.mode==='light'?'#333':'#198754'
  }
  return (
    <>
    {/* <div className="header" > */}
    <div className={`head shadow p-3 text-${props.mode==='light'?'white':'black'}`} style={AboutBGStyle}>
      <h1 className="head my-5" align="center" ><b>About Us</b></h1>
      <div class="image-container">
        <img className="image" src={bgLogo} alt="People gathered around" />
      </div>
    </div>
    <div className="container-fluid">
        <p className={`content text-${props.mode==='light'?'black':'white'}`}>
          We’re a fully distributed team of 85 people living and working in 15 countries around
          the world. And we’re working to build the best products to help our customers build
          their brands and grow their businesses on social media.
        </p>
    </div>
    {/* <img src={bgLogo} alt="Background" className="background-image" /> */}
    </>
    
  )
}



