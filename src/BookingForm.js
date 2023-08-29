import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm(props) {
    const [time, setTime] = useState("Select a time");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState("Select an occasion");
    const availableTimes = props.avTime;
    const formData = {date: date, time: time, guests: guests, occasion: occasion};
    const submitForm = props.onSubmit;
    const today = new Date();
    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = today.getDate();
    const todaysDate = `${year}-${month}-${day}`;
    const getIsFormValid = () => {
        return(date && time != "Select a time" && guests && occasion !== "Select an occasion" ? true : false);
    }

    return(
        <>
            <h1>Book Now</h1>
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={submitForm(formData)}>
                <label htmlFor="res_date" id="res_date">Date</label>
                <input type="date" name="res_date" id="res_date" aria-labelledby="res_date" onChange={(e) => {setDate(e.target.value); props.dispatch(new Date(e.target.value)); console.log({availableTimes})}} value={date} required min={todaysDate} />
                <label htmlFor="res_time" id="res_time">Time</label>
                <select id="res_time" placeholder="Pick a time" aria-labelledby="res_time" onChange={(e) => setTime(e.target.value)} value={time}>
                    <option key="default">Select a time</option>
                    {availableTimes?.map((x) => <option key={x}>{x}</option>)}
                </select>
                <label htmlFor="guests" id="guests">Number of Guests</label>
                <input type="number" aria-labelledby="guests" placeholder="Number of Guests" name="guests" id="guests" min="1" max="10" onChange={e => {setGuests(e.target.value)}} value={guests}/>
                <label htmlFor="occasion" id="occasion">Occasion</label>
                <select id="occasion" aria-labelledby="occasion" onChange={e => setOccasion(e.target.value)} value={occasion}>
                    <option key="default">Select an occasion</option>
                    <option key="birthday">Birthday</option>
                    <option key="anniversary">Anniversary</option>
                    <option key="other_occasion">Other</option>
                </select>
                <input type="submit" value="Make your reservation"  disabled={!getIsFormValid()} />
            </form>
        </>
    )
}

export default BookingForm;