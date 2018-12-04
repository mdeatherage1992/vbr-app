import React,{ Component } from 'react';


class FacebookSideBar extends Component {

    render() {
    return (
    <div className="facebook-side-bar">
    <div className="sidenav">
    <a href="https://finance.yahoo.com/quote/FB?p=FB">FB Stock</a><br />
    <a href="https://www.facebook.com/">Facebook</a><br />
    <a href="https://investor.fb.com/financials/default.aspx">Facebook Financials</a><br />
    <a href="https://en.wikipedia.org/wiki/Facebook">Facebook Wiki</a>
    </div>

    </div>)
  }
}

export default FacebookSideBar;
