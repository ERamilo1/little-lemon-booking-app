import './App.css';
import Home from "./Home";
import Menu from "./Menu";
import About from './About';
import Login from './Login';
import Online from './Online';
import Reservations from "./Reservations"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BookingForm from './BookingForm';
import { useState, useReducer } from 'react';

function App() {
  const updateTimes = (state, action) => {
    return state;
  }

  const initializeTimes = () => {
    const initialState = ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    return initialState;
  }

  const initialState2 = ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const [state, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="menu" element={<Menu />}/>
          <Route path="reservations" element={<BookingForm avTime={state} dispatch={dispatch}/>}/>
          <Route path="about" element={<About />}/>
          <Route path="login" element={<Login />}/>
          <Route path="onlineOrder" element={<Online />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
