import React from 'react';
import TwitteLogo from '../../assets/img/4.1 twitter-logo.png.png';
import './Header.scss';

function Header() {
    return (
        <div className="header">
            <img src={TwitteLogo} alt="Tweets Simulator"/>
            <h1>Twets Simulator</h1>
        </div>
    );
}

export default Header;
