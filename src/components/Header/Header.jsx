import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="Header">
            <div className="logo">
                <img
                    src="https://www.rightmove.co.uk/ps/images/fullsite/logos/rm-site--logo.svg"
                    alt="Rightmove logo"
                />
            </div>
        </header>
    );
};

export default Header;
