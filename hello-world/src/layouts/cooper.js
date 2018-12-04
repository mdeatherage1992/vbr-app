import React, { Component } from 'react';
import myVideo from './Trees-Top.mp4';
import cooperVid from './cooper-industries-video.mp4';
import CooperSideBar from './CooperSideBar';
import coopLogo from './cooper-industries-photo.png';
import CooperContent from './CooperContent';


class Cooper extends Component {
    render() {
    return (
    <div className="cooper">
    <div className="hidden-button">
    </div>
    <div className="facebook-video-id"><video controls false muted id="video-id" src={cooperVid} autoPlay={true} loop={true} type="video/mp4" />
    </div>
    <div className="facebook-sidebar">
    <span><CooperSideBar /></span>
    </div>
    <div className="w3-container-header-cp" >
    <h1>Cooper</h1><h4>Est. 1833</h4>
    <div className="hidden-drop-down">
    <CooperContent />
    </div>
    </div><br /><br /><br /><br /><br /><br /><br /><br /><br />

    <div className="w3-container-content-cp"><h5>Did you Know?:</h5>
    <p> Cooper Industries was the product of two
    brother's desires to sell farm equipment.</p> </div>


    <div className="w3-container-content-cp-2"><h5>Did you Know?:</h5>
    <p>Cooper Industries HQ is located in Houston, TX.</p> </div>

    <div className="w3-container-content-cp-3"><h5>Did you Know?:</h5>
    <p>Cooper Revenue is $3.2B per year </p> </div>

    <div className="w3-container-content-cp-4"><h5>Did you Know?:</h5>
    <p>Cooper was bought by Eaton Corporation for $11.2B</p> </div>

    <div className="w3-container-content-cp-5"><h5>Did you Know?:</h5>
    <p>Cooper is now apart of one of the world's largest
    power holding portfolios</p> </div>


    </div>
    )
  }
}

export default Cooper;







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
