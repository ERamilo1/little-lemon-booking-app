import logo from "./images/Logo.svg"

function Footer(){
    return(
        <div className="footer">
            <footer>
                <img src={logo} className="footer"/>
                <ul className="footer">
                    <h4>Navigation</h4>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/onlineOrder">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
                <ul className="footer">
                    <h4>Contact</h4>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>e-mail</li>
                </ul>
                <ul className="footer">
                    <h4>Social Media</h4>
                    <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                    <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;