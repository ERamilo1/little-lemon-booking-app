import { Link } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";

function Login() {
    return(
        <>
            <div className="header">
                <Header></Header>
                <Nav></Nav>
            </div>
            <h1>Login</h1>
        </>
    )
}

export default Login;