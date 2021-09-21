import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div>
                <h1><i class="fas fa-globe-asia"></i>Welcome to Country Hub!</h1>
            </div>

            <div>
                <input type="text" placeholder="Enter country name here!" id="header-input" />
                <button id="header-button">Search</button>
            </div>
        </div>
    );
};

export default Header;