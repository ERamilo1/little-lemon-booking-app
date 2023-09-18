import Footer from "./Footer";
import Header from "./Header";

function ConfirmedBooking(){
    return(
        <>
            <Header/>
            <div className="formBG">
                <div className="formIMG">
                    <div className="form">
                        <h2 className="confirmation">Your Reservation has been booked!</h2>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ConfirmedBooking;