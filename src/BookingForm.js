import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function BookingForm(props) {
    const [time, setTime] = useState({value: "Select a time", isTouched: false});
    const [date, setDate] = useState({value: "", isTouched: false});
    const [guests, setGuests] = useState({value: null, isTouched: false});
    const [occasion, setOccasion] = useState({value: "Select an occasion", isTouched: false});
    const availableTimes = props.avTime;
    const formData = {date: date, time: time, guests: guests, occasion: occasion};
    const submitForm = props.onSubmit;
    const today = new Date();
    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);
    const todaysDate = `${year}-${month}-${day}`;
    const getIsFormValid = () => {
        return(date.value && time.value != "Select a time" && (guests.value < 11) && occasion.value != "Select an occasion" ? true : false);
    }

    return(
        <>
        <Header></Header>
        <div className="formBG">
            <div className="formIMG">
                <div className="form">
                    <h1 className="form">Book Now</h1>
                    <form style={{maxWidth: "350px"}} onSubmit={submitForm(formData)}>
                        <label htmlFor="res_date">Date</label>
                        <input type="date" name="res_date" id="res_date" aria-labelledby="res_date" min={todaysDate} required onChange={(e) => {setDate({...date, value: e.target.value}); props.dispatch(new Date(e.target.value))}} onBlur={() => {setDate({...date, isTouched: true})}} value={date.value} focused={date.isTouched.toString()}/>
                        {!date.value && date.isTouched ? <span>Please select a date</span> : null}
                        <label htmlFor="res_time">Time</label>
                        <select id="res_time" placeholder="Pick a time" aria-labelledby="res_time" onChange={(e) => setTime({...time, value: e.target.value})} onBlur={() => {setTime({...time, isTouched: true})}} value={time.value} required focused={time.isTouched.toString()} invalid={time.value == "Select a time" ? "true" : "false"}>
                            <option key="default">Select a time</option>
                            {availableTimes?.map((x) => <option key={x}>{x}</option>)}
                        </select>
                        {!(time.value != "Select a time") && time.isTouched ? <span>Please select a time</span> : null}
                        <label htmlFor="guests">Number of Guests</label>
                        <input type="number" aria-labelledby="guests" placeholder="Number of Guests" name="guests" id="guests" min="1" max="10" onChange={e => {setGuests({...guests, value: e.target.value})}} onBlur={() => setGuests({...guests, isTouched: true})} value={guests.value} required focused={guests.isTouched.toString()}/>
                        {(!guests.value || !(guests.value < 11)) && guests.isTouched ? <span>Please select a number from 1 to 10</span> : null}
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" aria-labelledby="occasion" onChange={e => setOccasion({...occasion, value: e.target.value})} onBlur={() => {setOccasion({...occasion, isTouched: true})}} value={occasion.value} required focused={occasion.isTouched.toString()} invalid={occasion.value == "Select an occasion" ? "true" : "false"}>
                            <option key="default">Select an occasion</option>
                            <option key="birthday">Birthday</option>
                            <option key="anniversary">Anniversary</option>
                            <option key="other_occasion">Other</option>
                        </select>
                        {!(occasion.value != "Select an occasion") && occasion.isTouched ? <span>Please select an occasion</span> : null}
                        <input type="submit" value="Make your reservation" id="submit" disabled={!getIsFormValid()} />
                    </form>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default BookingForm;