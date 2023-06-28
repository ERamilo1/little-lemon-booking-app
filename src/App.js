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

const submitHandler = (e) => {
  e.preventDefault();
  console.log("Form Submitted!");
}

export const updateTimes = (state, action) => {
  return state;
}

const initialTimes = ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export const initializeTimes = (x) => {
  const initialState = x;
  return initialState;
}

function App() {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes(initialTimes));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="menu" element={<Menu />}/>
          <Route path="reservations" element={<BookingForm avTime={state} dispatch={dispatch} onSubmit={submitHandler}/>}/>
          <Route path="about" element={<About />}/>
          <Route path="login" element={<Login />}/>
          <Route path="onlineOrder" element={<Online />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
