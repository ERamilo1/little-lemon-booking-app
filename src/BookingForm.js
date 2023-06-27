import { useState } from "react";

function BookingForm() {
    const [availableTimes, setAvailableTimes] = useState(["15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form Submitted!");
    }

    return(
        <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={submitHandler}>
            <label htmlFor="res_date">Date</label>
            <input type="date" name="res_date" id="res_date" onChange={(e) => setDate(e.target.value)} value={date}/>
            <label htmlFor="res_time">Time</label>
            <select id="res_time" onChange={(e) => setTime(e.target.value)} value={time}>
                {availableTimes.map((x) => <option>{x}</option>)}
            </select>
            <label htmlFor="guests">Number of Guests</label>
            <input type="number" placeholder="1" name="guests" id="guests" min="1" max="10" onChange={e => setGuests(e.target.value)} value={guests}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={e => setOccasion(e.target.value)} value={occasion}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
            </select>
            <input type="submit" value="Make your reservation" />
        </form>
    )
}

export default BookingForm;