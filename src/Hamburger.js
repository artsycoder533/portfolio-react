export function Hamburger() {
    return (
        <section className="hamburger__container" onClick={toggleHamburger}>
            <div className="hamburger"></div>
        </section>
    );
}

function toggleHamburger(e) {
    e.currentTarget.firstElementChild.classList.toggle("open");
    document.querySelector(".nav__links").classList.toggle("show");
}



