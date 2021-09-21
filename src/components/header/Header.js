import React from 'react';
import './header.css'
import '../../App.css'

const Header = () => {
    return (
        <div className="header">
            <div>
                <h1 title="Welcome to Country Hub!"><i class="fas fa-globe-asia App-logo"></i> Welcome to Country Hub!</h1>
            </div>

            <div>
                <input type="text" placeholder="Enter country name here!" id="header-input" title="type here"/>
                <button id="header-button" title="Click to search">Search</button>
            </div>
        </div>
    );
};

export default Header;