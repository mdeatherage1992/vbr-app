// Assuming abc.mp4 is in the same folder as this component

// This will become a string with the path to the video at build time





import React, { Component } from 'react';
import myVideo from './Trees-Top.mp4';
import facebook from './Old+Facebook+Headquarters+Drone+Tour+-+1+Hacker+Way.mp4';
import maximus from './Maximus+Headquarters+Drone+Tour.mp4';
import cooper from './cooper-industries-video.mp4'


class Video extends Component {


    render() {
    return (
    <div className="video-id"><video src={myVideo} autoPlay={true} loop={true} type="video/mp4" />
    </div>)
  }
}

export default Video;







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
