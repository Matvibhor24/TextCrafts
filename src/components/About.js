import React from 'react'
import './About.css'
export default function About(props) { 
  const AboutBGStyle = {
    backgroundColor: props.mode==='light'?'#333':'#198754'
  }
  return (
    <>
    {/* <div className="header" > */}
    <div className={`header shadow p-3 text-${props.mode==='light'?'white':'black'}`} style={AboutBGStyle}>
      <h1 className="header">About Us</h1>
      <img className="image" src="/path-to-your-image.jpg" alt="People gathered around"/>
      <p className="content">
        We’re a fully distributed team of 85 people living and working in 15 countries around
        the world. And we’re working to build the best products to help our customers build
        their brands and grow their businesses on social media.
      </p>
    </div>
    </>
    
  )
}



