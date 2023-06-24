import Header from "./Header";
import Nav from "./Nav";

function Reservations() {
    return(
        <>
            <div className="header">
                <Header></Header>
                <Nav></Nav>
            </div>
            <h1>Book Reservations Here!</h1>
        </>
    )
}

export default Reservations;