import { Link } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";

function Online() {
    return(
        <>
            <div className="header">
                <Header></Header>
                <Nav></Nav>
            </div>
            <h1>Online</h1>
        </>
    )
}

export default Online;