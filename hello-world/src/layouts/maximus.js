import React, { Component } from 'react';
import myVideo from './Trees-Top.mp4';
import maxVid from './Maximus+Headquarters+Drone+Tour.mp4';
import MaximusSideBar from './MaximusSideBar';
import maxLogo from './maximus-photo.png';
import MaximusContent from './MaximusContent';


class Maximus extends Component {
    render() {
    return (
    <div className="maximus">
    <div className="hidden-button">
    </div>
    <div className="facebook-video-id"><video controls false muted id="video-id" src={maxVid} autoPlay={true} loop={true} type="video/mp4" />
    </div>
    <div className="facebook-sidebar">
    <span><MaximusSideBar /></span>
    </div>
    <div className="w3-container-header-mx" >
    <h1>Maximus</h1><h4>Est. 1975</h4>
    <div className="hidden-drop-down">
    <MaximusContent />
    </div>
    </div><br /><br /><br /><br /><br /><br /><br /><br /><br />

    <div className="w3-container-content-mx"><h5>Did you Know?:</h5>
    <p>The firm was founded by a former government employee who had the recipe
    for a better healthcare system in the US.</p> </div>


    <div className="w3-container-content-mx-2"><h5>Did you Know?:</h5>
    <p>Revenue for this healthcare services firm is over $2B.</p> </div>

    <div className="w3-container-content-mx-3"><h5>Did you Know?:</h5>
    <p>Maximus HQ is located in Reston, VA.</p> </div>

    <div className="w3-container-content-mx-4"><h5>Did you Know?:</h5>
    <p>Maxmius began trading in 1997</p> </div>

    <div className="w3-container-content-mx-5"><h5>Did you Know?:</h5>
    <p>Maximus CEO Richard Montoni received the 2012 Washington, D.C.
      GovCon Executive of the Year Award </p> </div>


    </div>
    )
  }
}

export default Maximus;







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
