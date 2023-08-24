

import React,  {useEffect} from 'react';
import HeroLogo from '../../assets/hero-logo.png'; 
import Header from '../Header/Header';
import './BookingPage.css';
import BookingForm from './BookingForm'

const BookingPage = (props) => {
    const {state, dispatch, availableTimes, setAvailableTimes} = props;
    const title = "Little Lemon";
    const description = "Welcome and we are excited to your next dining adventure with us here at Little Leomon";
    const subtitle = "Chicago"  
    

    useEffect(()=>{
      //had to mcok this since get call was not working properly
        setAvailableTimes(state.date);
    }, [state.date])


    return (
        <>
        <Header title={title} description={description} image={HeroLogo} subtitle={subtitle} showButton={false} />
        <div className='booking-container'>
        <h2>Reserve Now</h2>    
        <BookingForm 
     {...state}
        dispatch={dispatch}
        availableTimes={availableTimes}
        />
    </div></>
    )
}

export default BookingPage;