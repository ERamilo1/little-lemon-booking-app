import Header from "./Header"
import Nav from "./Nav"
import Main from "./Main"
import Footer from "./Footer"

function Home() {
    return(
    <>
        <div className="header">
            <Header></Header>
            <Nav></Nav>
        </div>
        <Main></Main>
        <Footer></Footer>
    </>
    );
}

export default Home;