import React,{ Component } from 'react';
import fbookLogo from './fbook-logo.png';


class FbookContent extends Component {

    render() {
    return (
    <div className="facebook-content">
    <img className="fbook-logo" src= {fbookLogo} />
    <p>Facebook, Inc. is an American online
    social media and social
    networking service company based in
     Menlo Park, California.
    Its website was launched on February 4, 2004,
    by Mark Zuckerberg,along with fellow Harvard College students
    Eduardo Saverin, Andrew McCollum,
    Dustin Moskovitz and Chris Hughes.</p>
    </div>
    )
  }
}

export default FbookContent;
