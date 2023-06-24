import './App.css';
import Home from "./Home";
import Menu from "./Menu";
import About from './About';
import Login from './Login';
import Online from './Online';
import Reservations from "./Reservations"
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="menu" element={<Menu />}/>
          <Route path="reservations" element={<Reservations />}/>
          <Route path="about" element={<About />}/>
          <Route path="login" element={<Login />}/>
          <Route path="onlineOrder" element={<Online />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
