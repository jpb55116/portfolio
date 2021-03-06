import React, { Component } from 'react';
import '../App.css';
import GitHub from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Email from '@material-ui/icons/Email'

class Header extends Component {
    render() {
        return (
            <div className="firstHeader">
                <div className="headerText">
                    <h1>JOHN BRENNAN</h1>
                    <h4>fullstack developer</h4>
                </div>
                <div id="icons">
                    <a href={"https://github.com/jbrennan414"}><GitHub /></a>
                    <a href={"https://twitter.com/jbrennan414"}><Twitter /></a>
                    <br />
                    <a href={"https://www.linkedin.com/in/jbrennan414/"}><LinkedIn /></a>
                    <a href="mailto:brennanj414@gmail.com"><Email /></a>
                </div>
            </div>
    );
  }
}

export default Header;
