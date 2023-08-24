import React, {useReducer} from 'react';
import Nav from './components/Nav';
import HomePage from './components/HomePage/HomePage';
import BookingPage from './components/BookingPage/BookingPage'
import ConfirmationPage from './components/ConfirmationPage/ConfirmationPage';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { fetchAPI } from './helpers';





const updateTimes = (state, date) => {
  if (state === date) {
    return state;
  }
  const newAvailableTimes = fetchAPI(date);
  return [...newAvailableTimes];
}

function App() {
  const initialState = {
    name: '',
    time: '',
    date: new Date(),
    guests: 0,
    occasion: 'Birthday'
  }
  function initializeTimes(date)  {
    const newAvailableTimes = fetchAPI(date);
  return newAvailableTimes;
  }

  const reducer = (state, action) => {
    switch(action.type){
      case "update-date":
        return {...state, date: action.value};
      case "update-time":
        return {...state, time: action.value};
        case "update-guests":
          return {...state, guests: action.value};
      case "update-occasion": 
      return {...state, occasion: action.value};
      case "update-name":
        return {...state, name:action.value}
      case "clear": 
      return {...initialState}
      default: 
      return state;
      }
    }


  const [state, dispatch] = useReducer(reducer, initialState);
  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes(new Date()))

  return (
    <>
    <BrowserRouter>
    <Nav />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage state={state} dispatch={dispatch} setAvailableTimes={setAvailableTimes} availableTimes={availableTimes} />} />
      <Route path="/confirmation-page" element={<ConfirmationPage dispatch={dispatch} {...state}/>} />
       </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;