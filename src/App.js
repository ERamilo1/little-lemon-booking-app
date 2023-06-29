import './App.css';
import Home from "./Home";
import Menu from "./Menu";
import About from './About';
import Login from './Login';
import Online from './Online';
import Reservations from "./Reservations";
import Test from './Test';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BookingForm from './BookingForm';
import { useState, useReducer } from 'react';

const submitHandler = (e) => {
  e.preventDefault();
  console.log("Form Submitted!");
}

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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="menu" element={<Menu />}/>
          <Route path="reservations" element={<BookingForm avTime={state} dispatch={dispatch} onSubmit={submitHandler}/>}/>
          <Route path="about" element={<About />}/>
          <Route path="login" element={<Test />}/>
          <Route path="onlineOrder" element={<Online />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
