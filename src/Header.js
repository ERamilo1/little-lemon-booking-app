import logo from "./images/Logo.png"

function Header(props){
    return(
        <>
            <header>
                <img src={logo} className="header"/>
            </header>
            {props.children}
        </>
    );
}

export default Header;