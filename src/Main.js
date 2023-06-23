import Button from "./Button.js";
import Specials from "./Specials.js";
import marioAndAdrianA from "./images/marioAndAdrianA.jpg"
import restaurantFood from "./images/restaurantFood.jpg"
import salad from "./images/greekSalad.jpg"
import bruschetta from "./images/bruchetta.svg"
import lemon from "./images/lemonDessert.jpg"

function Main(){
    return(
        <main>
            <div className="main1">
                <section className="intro">
                    <div className="intro">
                        <h1 className="intro">Little Lemon</h1>
                        <h2 className="intro">Chicago</h2>
                        <article className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</article>
                        <Button className="reserve" text="Reserve a Table"/>
                    </div>
                    <img src={restaurantFood} className="intro"/>
                </section>
            </div>
            <section className="specials">
                <h2 className="specials">This Week's Specials!</h2>
                <button className="specials">Online Menu</button>
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
            <section className="testimonials">
                <h2 className="testimonials">Testimonials</h2>
                <article>Testimony 1</article>
                <article>Testimony 2</article>
                <article>Testimony 3</article>
                <article>Testimony 4</article>
            </section>
            <section className="bio">
                <div>
                    <h2>Little Lemon</h2>
                    <article>Biography</article>
                </div>
                <img className="bio"/>
            </section>
        </main>
    );
}

export default Main;