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
  const [confirmation, setConfirmation] = useState(false);

  const submitForm = (data) => (e) => {
    e.preventDefault();
    setConfirmation(window.submitAPI(data));
    console.log("Form Submitted!");
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="menu" element={<Menu />}/>
          <Route path="reservations" element={<BookingForm avTime={state} dispatch={dispatch} />}/>
          <Route path="about" element={<About />}/>
          <Route path="login" element={<Login />}/>
          <Route path="onlineOrder" element={<Online />}/>
          <Route path="bookingConfirmation" element={<ConfirmedBooking />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
