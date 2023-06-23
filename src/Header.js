import logo from "./images/Logo.svg"

function Header(){
    return(
        <header>
            <img src={logo} className="header"/>
        </header>
    );
}

export default Header;