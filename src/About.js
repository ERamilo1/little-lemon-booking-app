import { Link } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";

function About() {
    return(
        <>
            <div className="header">
                <Header></Header>
                <Nav></Nav>
            </div>
            <h1>About</h1>
        </>
    )
}

export default About;