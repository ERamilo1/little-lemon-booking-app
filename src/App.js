import './App.css';
import Header from "./Header.js"
import Nav from "./Nav.js"
import Main from "./Main.js"
import Footer from "./Footer.js"

function App() {
  return (
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

export default App;
