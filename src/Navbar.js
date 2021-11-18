import { Hamburger } from './Hamburger';

export function Navbar() {
	return (
		<header className="header center">
			<nav className="nav">
				<section className="nav__brand">
					<h1 className="nav__title">&lt;NJ&gt;</h1>
				</section>
				<Hamburger />
				<ul className="nav__links">
					<li>
						<a href="#home" className="nav__link">
							Home
						</a>
					</li>
					<li>
						<a href="#about" className="nav__link">
							About
						</a>
					</li>
					<li>
						<a href="#projects" className="nav__link">
							Projects
						</a>
					</li>
					<li>
						<a href="#contact" className="nav__link">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
