function Nav(){
    return(
        <nav className="nav">
            <ul className ="nav">
                <li className="nav"><a href="/home">Home</a></li>
                <li className="nav"><a href="/about">About</a></li>
                <li className="nav"><a href="/menu">Menu</a></li>
                <li className="nav"><a href="/reservations">Reservations</a></li>
                <li className="nav"><a href="/onlineOrder">Order Online</a></li>
                <li className="nav"><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;