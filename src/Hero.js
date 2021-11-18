export function Hero() {
    return (
        <section className="hero center" id="home">
            <article className="hero__container">
                <h1 className="hero__name">Natasha Johnson</h1>
                <p className="hero__title">Self-Taught Front End Developer</p>
            </article>
            <article className="hero__buttons">
                <button className="btn hero__btn--primary">Projects</button>
                <button className="btn hero__btn--secondary">Contact</button>
            </article>
        </section>
    );
}