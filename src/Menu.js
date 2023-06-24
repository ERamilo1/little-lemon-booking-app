import Header from "./Header"
import Nav from "./Nav"

function Menu() {
    return(
        <>
            <div className="header">
                <Header></Header>
                <Nav></Nav>
            </div>
            <h1>
                Menu Page
            </h1>
        </>
    );
}

export default Menu;