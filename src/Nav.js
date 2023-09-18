import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className="nav">
            <div className="dropDown">
                <button className="dropDown">
                    <div className="burgerTop"></div>
                    <div className="burgerMid"></div>
                    <div className="burgerBot"></div>
                </button>
                <div className="dropDownContent">
                    <div className="dropDownContentItem"><Link to="/">Home</Link></div>
                    <div className="dropDownContentItem"><Link to="/about">About</Link></div>
                    <div className="dropDownContentItem"><Link to="/menu">Menu</Link></div>
                    <div className="dropDownContentItem"><Link to="/reservations">Reservations</Link></div>
                    <div className="dropDownContentItem"><Link to="/onlineOrder">Order Online</Link></div>
                    <div className="dropDownContentItem"><Link to="/login">Login</Link></div>
                </div>
            </div>
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