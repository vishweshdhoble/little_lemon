import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import HeroLogo from '../../assets/hero-logo.png'; 
import './ConfirmationPage.css';

const ConfirmationPage = (props) =>{
    const {name, date, time, guests, occasion, dispatch} = props;
    const clearForm = () => {
        dispatch({}, 'clear');
    }
    console.log('THIS IS PROPS', props)
    const title = "Little Lemon";
    const subtitle = "Reservation"  
    const description = 'Thank you! Your reservation has been sucessfully booked. We look forward to seeing you at Little Lemon Restaurant.'
    return (
        <>
        <Header title={title} description={description} image={HeroLogo} subtitle={subtitle} showButton={false} />
        <div className="confirmation-container">
             <div className="confirmation-details">\
                <span>Reservation Details</span>
                <div className="detail-row"><span>Name:</span><span>{name}</span></div>
                <div className="detail-row"><span>Date:</span><span> {date.toJSON().slice(0,10)}</span></div>
                <div className="detail-row"><span>Time:</span><span>{time}</span></div>
                <div className="detail-row"><span>Number of Guests:</span><span>{guests}</span></div>
                <div className="detail-row"><span>Occasion:</span><span>{occasion}</span></div>
                <Link to="/"><button aria-label="On Click"  className="little-lemon-btn" onClick={clearForm}>Return to Little Lemon</button></Link>
                </div>
              
        </div>
        </>
    )
}

export default ConfirmationPage;