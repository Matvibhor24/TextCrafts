import React from 'react'
import './About.css'
import bgLogo from '../assets/textcrafts.png'
import bgLogo1 from '../assets/text-box.png'
import bgLogo2 from '../assets/android-icon-192x192.png'

export default function About(props) {
  // const AboutBGStyle = {
  //   backgroundColor: (props.mode === 'light' ? 'success-subtle' : 'success-subtle'),
  // }
  return (
    <>
      {/* <div className="header" > */}
      <div className={`head text-${props.mode === 'light' ? 'black' : 'white'} bg-${props.mode === 'light' ? 'success-subtle' : '#333'}`}>
        <h1 className="head mt-5" align="center" ><b>About Us &nbsp; </b><img src={props.mode === 'light' ? bgLogo1 : bgLogo2} alt="Logo" width="40px" height="50px" margin-bottom="1px"></img></h1>
        <div class="image-container">
          <img className="image" src={bgLogo} alt="People gathered around" />
        </div>
      </div>
      <div className="container-fluid">
        <p className={`content text-${props.mode === 'light' ? 'black' : 'white'} bg-${props.mode === 'light' ? 'success-subtle' : '#333'}`}>
          We're a fully distributed team of 85 people living and working in 15 countries around
          the world. And we're working to build the best products to help our customers build
          their brands and grow their businesses on social media.
        </p>
      </div>
      {/* <img src={bgLogo} alt="Background" className="background-image" /> */}
    </>

  )
}



