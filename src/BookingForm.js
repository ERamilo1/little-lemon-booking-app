import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm(props) {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const availableTimes = props.avTime;
    const handleSubmit = props.onSubmit;
    const formData = {date: date, time: time, guests: guests, occasion: occasion};
    const navigate = useNavigate();

    const submitForm = (data) => (e) => {
        e.preventDefault();
        const confirmation = window.submitAPI(data);
        navigate(confirmation ? "/bookingConfirmation" : null);
        confirmation ? console.log("Form Submitted!") : console.log("Error");
    }

    return(
        <>
            <h1>Book Now</h1>
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={submitForm(formData)}>
                <label htmlFor="res_date" id="res_date">Date</label>
                <input type="date" name="res_date" id="res_date" aria-labelledby="res_date" onChange={(e) => {setDate(e.target.value); props.dispatch(new Date(e.target.value)); console.log({availableTimes})}} value={date}/>
                <label htmlFor="res_time" id="res_time">Time</label>
                <select id="res_time" aria-labelledby="res_time" onChange={(e) => setTime(e.target.value)} value={time}>
                    {availableTimes?.map((x) => <option key={x}>{x}</option>)}
                </select>
                <label htmlFor="guests" id="guests">Number of Guests</label>
                <input type="number" aria-labelledby="guests" placeholder="1" name="guests" id="guests" min="1" max="10" onChange={e => {setGuests(e.target.value)}} value={guests}/>
                <label htmlFor="occasion" id="occasion">Occasion</label>
                <select id="occasion" aria-labelledby="occasion" onChange={e => setOccasion(e.target.value)} value={occasion}>
                    <option key="birthday">Birthday</option>
                    <option key="anniversary">Anniversary</option>
                    <option key="other_occasion">Other</option>
                </select>
                <input type="submit" value="Make your reservation" />
            </form>
        </>
    )
}

export default BookingForm;