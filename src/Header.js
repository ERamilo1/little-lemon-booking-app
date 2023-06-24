import Nav from "./Nav";
import logo from "./images/Logo.svg"

function Header(){
    return(
        <div className="header">
            <header>
                <img src={logo} className="header"/>
            </header>
            <Nav/>
        </div>
    );
}

export default Header;