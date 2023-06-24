import dish from "./images/dish.svg"
import { Link } from "react-router-dom";

function Specials(props) {
    return(
        <article className="specials" id={props.id}>
            <img className="specials" src={props.image} />
            <div className="specials">
                <div className="details">
                    <h3 className="specials">{props.dish}</h3>
                    <p className="price">{props.price}</p>
                </div>
                <p className="description">{props.children}</p>
                <div className="order">
                    <p>Order Delivery</p>
                    <Link to="/onlineOrder">
                        <img src={dish} />
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default Specials;