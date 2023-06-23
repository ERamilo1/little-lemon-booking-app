import star from "./images/star.svg"

function Testimony(props) {
    return(
        <article className="testimonials" id={props.id}>
            <div className="reviewer">
                <img className="reviewer" src={props.image}/>
                <p className="reviewer">{props.name}</p>
            </div>
            <div className="star">
                <p>Rating: </p>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
            </div>
            <p className="testimonials">{props.children}</p>
        </article>
    );
}

export default Testimony;