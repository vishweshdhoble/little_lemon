

import { Link } from "react-router-dom";
import LittleLemonLogo from '../assets/little-lemon-nav-logo.png';

const Nav = () => {
    return (
        <nav>
            <div className="nav-container">
                    <img src={LittleLemonLogo} className="nav-logo"></img>
                    <Link to="/" className="nav-item">HOME</Link>
                    <Link to="/" className="nav-item">ABOUT</Link>
                    <Link to="/" className="nav-item">MENU</Link>
                  <Link to="/booking" className="nav-item">RESERVATIONS</Link>
                  <Link to="/" className="nav-item">ORDER ONLINE</Link>
                  <Link to="/" className="nav-item">LOGIN</Link>
                </div>
        </nav>
    )
}

export default Nav;