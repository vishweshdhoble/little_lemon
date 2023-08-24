import { useNavigate  } from "react-router-dom";
import { useState } from "react";
const BookingForm = (props) => {
  const navigate = useNavigate();
    const {date, time, availableTimes, guests, occasion, name, dispatch} = props
    const handleSubmit = (e) => {
      e.preventDefault();
        navigate('/confirmation-page');
      };    
      const initialBlurStatus = {
        name: false,
        time: false,
        guests: false,
      }
    const errorMessage = (message) => {
      return (<p style={{color: "red"}}>{message}</p>)
    }
    const [blurStatus, setBlurstatus] = useState(initialBlurStatus);
    const onBlur = (e) => {
        const target = e.target.id;
        setBlurstatus({...blurStatus, [target]: true});
    }
  const getIsFormValid = () => {
    // Implement this function
    if (!date || !time|| guests === 0 || !occasion || !name) {
      return false
    }
    return true;
  };
    return (
    <form style={{display: 'grid',  gap: '20px'}}  onSubmit={handleSubmit}>
        <fieldset>
        <div className="Field">
    <label for="name" required><span>Enter Name</span></label>
    <input  aria-label="On Change"  type="text"  onBlur={onBlur} onChange={(e)=> {dispatch({type: 'update-name', value: e.target.value})}} id="name" value={name}  placeholder={"Enter Full Name"} />
    {!name && blurStatus["name"] ? errorMessage('Please Enter a name') : ''}
    </div>
    <div className="Field">
    <label for="date"><span>Choose Date</span></label>
    <input aria-label="On Change"  type="date" onChange={(e)=> {
      dispatch({type: 'update-date', value: new Date(e.target.value)})}} id="date" value={date.toJSON().slice(0,10)} />
    </div>
    <div className="Field">
    <label for="time"><span>Choose Time</span></label>
    <select aria-label="On Change"  onBlur={onBlur} id="time"  onChange={(e)=> {dispatch({type: 'update-time', value: e.target.value})}} value={time}>
        {<option value="">Select a Time</option>}
        {availableTimes.map(time => {
        return <option value={time}>{time}</option>})}
    </select>
    {!time && blurStatus["time"] ? errorMessage('Please select a time') : ''}
    </div>
    <div className="Field">
    <label for="guests"><span>Number of Guests</span></label>
    <input 
        type="number"
         onChange={(e)=> {dispatch({type: 'update-guests', value: e.target.value})}}
         placeholder="1"
         min="1" 
        max="10" 
        id="guests" 
        onBlur={onBlur}
        value={guests} />
        {guests < 1 && blurStatus["guests"] ? errorMessage('Please Reserve for at least one guest') : ''}
    </div>
    <div className="Field">
    <label for="occasion"><span>Occasion</span></label>
    <select id="occasion" value={occasion} aria-label="On Change"  onChange={(e)=> {dispatch({type: 'update-occasion', value: e.target.value})}}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
    </select>
    </div>
    <button role="button"  disabled={!getIsFormValid()} type="submit" className='little-lemon-btn' aria-label="On Click"  onClick={handleSubmit}>Reserve Now</button>
    </fieldset>
</form>)
}

export default BookingForm;
