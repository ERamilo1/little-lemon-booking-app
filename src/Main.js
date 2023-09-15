import Button from "./Button.js";
import Specials from "./Specials.js";
import marioAndAdrianA from "./images/marioAndAdrianA.jpg"
import restaurantFood from "./images/restaurantFood.jpg"
import salad from "./images/greekSalad.jpg"
import bruschetta from "./images/bruchetta.svg"
import lemon from "./images/lemonDessert.jpg"
import Testimony from "./Testimony.js";
import user1 from "./images/randomUser1.jpg"
import user2 from "./images/randomUser2.jpg"
import user3 from "./images/randomUser3.jpg"
import user4 from "./images/randomUser4.jpg"
import { Link } from "react-router-dom";

function Main(){
    return(
        <main>
            <div className="main1">
                <section className="intro">
                    <div className="introBG">
                        <div className="intro">
                            <h1 className="intro">Little Lemon</h1>
                            <h2 className="intro">Chicago</h2>
                            <article className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</article>
                            <Link to="/reservations">
                                <Button className="reserve" text="Reserve a Table"/>
                            </Link>
                        </div>
                    </div>
                    <img src={restaurantFood} className="intro"/>
                </section>
            </div>
            <section className="specials">
                <h2 className="specials">This Week's Specials!</h2>
                <Link to="/menu">
                    <Button className="specials" text="Online Menu"/>
                </Link>
                <Specials id="greekSalad" dish="Greek Salad" price="$12.99" image={salad}>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                </Specials>
                <Specials id="bruschetta" dish="Bruschetta" price="$5.99" image={bruschetta}>
                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                </Specials>
                <Specials id="lemon" dish="Lemon Cake" price="$7.99" image={lemon}>
                This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                </Specials>
            </section>
            <div className="main3">
                <section className="testimonials">
                    <h2 className="testimonials">Reviews</h2>
                    <div className="testimonials">
                        <Testimony id="t1" name="Micheal c." image={user1}>"The food at Little Lemon tastes fantastic!"</Testimony>
                        <Testimony id="t2" name="Alyssa G." image={user3}>"Their Lemon Cake is to die for!"</Testimony>
                        <Testimony id="t3" name="Julianne P." image={user4}>"If you're looking for authentic Mediterranean food, this is the spot."</Testimony>
                        <Testimony id="t4" name="Phillip W." image={user2}>"Best Maditerranean in Chicago!"</Testimony>
                    </div>
                </section>
            </div>
            <section className="bio">
                <div>
                    <h2 className="bio">Little Lemon</h2>
                    <h3 className="bio">Chicago</h3>
                    <article className="bio">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                    </article>
                </div>
                <img src={marioAndAdrianA} className="bio"/>
            </section>
        </main>
    );
}

export default Main;