import { Link } from "react-router-dom";
import logo from "./images/Logo.svg"

function Footer(){
    return(
        <div className="footer">
            <footer>
                <Link to="/">
                    <img src={logo} className="footer"/>
                </Link>
                <ul className="footer" id="footerNav">
                    <h4>Navigation</h4>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/onlineOrder">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <ul className="footer" id="footerContact">
                    <h4>Contact</h4>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>e-mail</li>
                </ul>
                <ul className="footer" id="footerSM">
                    <h4>Social Media</h4>
                    <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                    <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;