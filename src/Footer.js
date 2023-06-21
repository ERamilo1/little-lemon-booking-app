import logo from "./images/Logo.png"

function Footer(){
    return(
        <footer>
            <img src={logo} className="footer"/>
            <ul className="footer">
                <lh>Navigation</lh>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/onlineOrder">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            <ul className="footer">
                <lh>Contact</lh>
                <li>Address</li>
                <li>Phone Number</li>
                <li>e-mail</li>
            </ul>
            <ul className="footer">
                <lh>Social Media</lh>
                <li>Link 1</li>
                <li>Link 2</li>
            </ul>
        </footer>
    );
}

export default Footer;