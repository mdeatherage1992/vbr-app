// Assuming abc.mp4 is in the same folder as this component

// This will become a string with the path to the video at build time





import React, { Component } from 'react';
import myVideo from './Trees-Top.mp4';
import facebook from './Old+Facebook+Headquarters+Drone+Tour+-+1+Hacker+Way.mp4';
import FacebookSideBar from './FacebookSideBar';
import Example from './hidden-slide-feature';
import fbookLogo from './fbook-logo.png';
import FbookContent from './FbookContent';
import  mainImage  from "../components/Nav/download.jpg";

class Facebook extends Component {


    render() {
    return (
    <div className="facebook">
    <div className="hidden-button">
    </div>
    <div className="facebook-video-id"><video controls false muted id="video-id" src={facebook} autoPlay={true} loop={true} type="video/mp4" />
    </div>
    <div className="facebook-sidebar">
    <span><FacebookSideBar /></span>
    </div>
    <div className="w3-container-header" >
    <h1> Facebook </h1><h4>Est. 2004</h4>
    <div className="hidden-drop-down">
    <FbookContent />
    </div>
    </div><br /><br /><br /><br /><br /><br /><br /><br /><br />

    <div className="w3-container-content"><h5>Did you Know?:</h5>
    <p>The Facebook "Like" Button used to be an "Awesome" Button.</p> </div>


    <div className="w3-container-content-2"><h5>Did you Know?:</h5>
    <p>Since 2004 Facebook has grown from an elite college user base
    to a digital population of over 1.59 Billion. </p> </div>

    <div className="w3-container-content-3"><h5>Did you Know?:</h5>
    <p>Facebook was widely credited with VR-related 360 degree Video. </p> </div>

    <div className="w3-container-content-4"><h5>Did you Know?:</h5>
    <p>Facebook created the React Framework for JavaScript for pageless web development.</p> </div>

    <div className="w3-container-content-5"><h5>Did you Know?:</h5>
    <p>Christiano Ronaldo is the most famous person on Facebook,
    with over 109,000,000 followers</p> </div>


    </div>
    )
  }
}

export default Facebook;








// return (
// <div class="master-video">
// <body>
// <header>
// <div class="fullscreen-video-wrap">
// <video src="Trees-Top.mp4"
// type="video/mp4"
// autoplay="true"
// loop="true" />
// </div>
// <div class="header-overlay"></div>
// <div class="header-content">
// <h1>Hello Everyone</h1>
// </div>
// </header>
// </body>
// </div>
// )
