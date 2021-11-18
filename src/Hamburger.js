export function Hamburger() {
    return (
        <section className="hamburger__container">
            <div className="hamburger" onClick={toggleHamburger}></div>
        </section>
    );
}

function toggleHamburger(e) {
    // e.currentTarget.classList.toggle("open");
    document.querySelector(".nav__links").classList.toggle("show");
}



