import './App.css';
import Home from "./Home";
import Menu from "./Menu";
import About from './About';
import Login from './Login';
import Online from './Online';
import Reservations from "./Reservations";
import Test from './Test';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import BookingForm from './BookingForm';
import { useState, useReducer, useEffect } from 'react';
import ConfirmedBooking from './ConfirmedBooking';

export const updateTimes = (state, action) => {
  state = window.fetchAPI(action);
  return state;
}

const todaysDate = new Date("June 29, 2023");

export const initializeTimes = (x) => {
  const initialState = window.fetchAPI(x);
    return initialState;
  }

function App() {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes(todaysDate));

  const navigate = useNavigate();

  const submitForm = (data) => (e) => {
    e.preventDefault();
    const confirmation = window.submitAPI(data);
    navigate(confirmation ? "/bookingConfirmation" : null)
    confirmation ? console.log("Form Submitted!") : console.log("Error");
  }

  return (
    <>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="menu" element={<Menu />}/>
        <Route path="reservations" element={<BookingForm avTime={state} dispatch={dispatch} onSubmit={submitForm}/>}/>
        <Route path="about" element={<About />}/>
        <Route path="login" element={<Login />}/>
        <Route path="onlineOrder" element={<Online />}/>
        <Route path="bookingConfirmation" element={<ConfirmedBooking />}/>
      </Routes>
    </>
  );
}

export default App;
