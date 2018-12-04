import React,{ Component } from 'react';
import coopLogo from './cooper-industries-photo.png';


class CooperContent extends Component {

    render() {
    return (
    <div className="cooper-card">
    <img className="cooper-logo" src= {coopLogo} />
    <p>Cooper Industries is an American worldwide electrical products
    manufacturer headquartered in Houston, Texas.
    Founded in 1833, the company has seven operating divisions
    including Bussmann electrical and electronic fuses; Crouse-Hinds
    and CEAG explosion-proof electrical equipment; Halo and Metalux
    lighting fixtures; and Kyle and McGraw-Edison power systems products.
    In 2011, 59% of total sales were to customers in the industrial and
    utility end-markets and 40% of total sales were to customers outside
    the United States. Cooper has manufacturing facilities in 23 countries
    as of 2011.</p>
    </div>
    )
  }
}

export default CooperContent;
