import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className="nav">
            <ul className ="nav">
                <li className="nav"><Link to="/">Home</Link></li>
                <li className="nav"><Link to="/about">About</Link></li>
                <li className="nav"><Link to="/menu">Menu</Link></li>
                <li className="nav"><Link to="/reservations">Reservations</Link></li>
                <li className="nav"><Link to="/onlineOrder">Order Online</Link></li>
                <li className="nav"><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;