import BookingForm from "./BookingForm";
import Footer from "./Footer";
import Header from "./Header";

function ReservationForm(props){
    return(
        <>
            <Header></Header>
            <BookingForm  avTime={props.avTime} dispatch={props.dispatch} onSubmit={props.onSubmit}/>
            <Footer></Footer>
        </>
    );
};

export default ReservationForm;