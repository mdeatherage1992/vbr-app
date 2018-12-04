import React,{ Component } from 'react';
import maxLogo from './mx-logo.jpg';


class MaximusContent extends Component {

    render() {
    return (
    <div className="cooper-card">
    <img className="maximus-logo" src= {maxLogo} />
    <p> Maximus Inc., trademarked as MAXIMUS, is an American, for-profit, 
    privatizing company that provides business process services to government
    health and human services agencies in the United States, Australia, Canada,
    Saudi Arabia and the United Kingdom. Maximus focuses on administering
    government-sponsored programs, such as Medicaid, the Children's Health Insurance
     Program (CHIP), health care reform, welfare-to-work, Medicare, child support
     enforcement, and other government programs. The company is based in Reston,
     Virginia, has 13,000 employees and a reported annual revenue of $2.4 billion
     in fiscal year 2017.</p>
    </div>
    )
  }
}

export default MaximusContent;
