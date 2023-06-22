function Main(){
    return(
        <main>
            <section className="intro">
                <div>
                    <h1>Little Lemon</h1>
                    <article>Intro</article>
                    <button>Reserve a Table</button>
                </div>
                <img />
            </section>
            <section className="specials">
                <h2>This Week's Specials!</h2>
                <button className="specials">Online Menu</button>
                <article>Greek Salad</article>
                <article>Bruschetta</article>
                <article>Lemon Dessert</article>
            </section>
            <section className="testimonials">Testimonials
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
                <img />
            </section>
        </main>
    );
}

export default Main;