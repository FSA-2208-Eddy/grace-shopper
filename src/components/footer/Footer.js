import React from 'react'

const Footer = () => {
    return (
        <div id="footer-root-container">
            <div className="footer-group-1">
                <div className="footer-column">
                    <h2>Helpful Links</h2>
                    <a href="https://github.com/FSA-2208-Eddy/grace-shopper">Help/FAQ</a>
                    <a href="/profile">My Account</a>
                    <a href="https://github.com/FSA-2208-Eddy/grace-shopper">Contact Us</a>
                </div>
                <div className="footer-column">
                    <h2>Our Network</h2>
                    <a href="https://www.mlb.com/">MLB</a>
                    <a href="https://www.nfl.com/">NFL</a>
                    <a href="https://www.nba.com/">NBA</a>
                </div>
                <div className="footer-column">
                    <h2>About Us</h2>
                    <a href="https://github.com/FSA-2208-Eddy/grace-shopper">Who We Are</a>
                    <a href="https://github.com/FSA-2208-Eddy/grace-shopper">Github Repository</a>
                    <a href="https://github.com/FSA-2208-Eddy/grace-shopper">Contact Us</a>
                </div>
            </div>
            <div className="footer-group-2">
                <img src="./e481ee2c79e42c5250d8823e53954539.png"/>
                <p>By continuing past this page, you agree to our terms of use</p>
                <p className="footer-copy">©Tickit 2022</p>
            </div>
        </div>
    )
}

export default Footer