export function Hero() {
    return (
        <section className="hero center">
            <article className="hero__container">
                <p className="hero__name">Natasha Johnson</p>
                <h1 className="hero__title">Front End Developer</h1>
            </article>
            <article className="hero__buttons">
                <button className="btn hero_btn--primary">Projects</button>
                <button className="btn hero_btn--secondary">Contact</button>
            </article>
        </section>
    );
}