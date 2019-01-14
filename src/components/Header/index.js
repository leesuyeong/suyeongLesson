import React from 'react';
import {NavLink} from 'react-router-dom'
import './Header.css';
const Header = () => { 
    return(
        <header>헤더입니다
            <ul>
                <li><NavLink activeClassName="nav-active" className="nav-link" exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName="nav-active" className="nav-link" to="/about/이수영">About</NavLink></li>
            </ul>
        </header>
    );
}
export default Header;