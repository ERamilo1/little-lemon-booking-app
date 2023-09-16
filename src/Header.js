import Nav from "./Nav";
import logo from "./images/Logo.svg"

function Header(){
    return(
        <div className="headerBG">
            <div className="header">
                <header>
                    <img src={logo} className="header"/>
                </header>
                <Nav/>
            </div>
        </div>
    );
}

export default Header;