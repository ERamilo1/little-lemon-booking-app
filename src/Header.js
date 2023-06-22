import logo from "./images/Logo.png"

function Header(){
    return(
        <header>
            <img src={logo} className="header"/>
        </header>
    );
}

export default Header;