import React, { Component } from 'react';
import { Nav } from '../components/Nav/Nav';
import Video  from './Video';
import maximus from './Maximus+Headquarters+Drone+Tour.mp4';
import facebook from './Old+Facebook+Headquarters+Drone+Tour+-+1+Hacker+Way.mp4';
import cooper from './cooper-industries-video.mp4'




// './src/Old+Facebook+Headquarters+Drone+Tour+-+1+Hacker+Way.mp4'
// './Maximus+Headquarters+Drone+Tour.mp4'
// './cooper-industries-video.mp4'



class SlideCard extends Component {

  constructor(props) {
          super(props);
          this.state = {
            slides: [
              {'img': './facebook-transparent-12.png','src':'./Old+Facebook+Headquarters+Drone+Tour+-+1+Hacker+Way.mp4','title':'Facebook','content':'This is Google'},
              {'img': './maximus-photo.png','src':'./Maximus+Headquarters+Drone+Tour.mp4','title':'Maximus','content':'This is Maximus'},
              {'img': './cooper-industries-photo.png','src':'./cooper-industries-video.mp4','title':'Cooper Industries', 'content':'This is Cooper'}
            ],
            counter: 0
          };
        }

render() {
    var counter = 0
    const stateParam = this.state.slides[counter];
        return (
          <div className="slide-card">
          <Nav />
          <div className="video-id"><video src={stateParam.src} autoPlay={true} loop={true} type="video/mp4" /></div>
          <div className="slide-title">
          <h3>{stateParam.title}</h3>
          </div>
          <div className="slide-content">
          <p>{stateParam.content}</p>
          </div>
          </div>
        )
      }
  }
export default SlideCard;
