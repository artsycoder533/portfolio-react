import thumbnail from './desktop1.png';
export function Projects() {
    return (
			<section className="projects center" id="projects">
				<h2 className="title">Projects</h2>
				<article className="project__card">
					<div className="img__container">
						<iframe
							src="https://www.youtube.com/embed/fNI9YAqRuxM"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
					<div className="info__container">
						<h3 className="project_title">Talk2DO</h3>
						<p className="project___info">
							Talk2Do is a single page CRUD application that allows a user to
							add, edit, delete, and save notes without having to type. By
							simply pressing the microphone button, the user can operate its
							functionality by utilizing the Web Speech API. For added
							convenience, the notes are saved to local storage via the Web
							Storage API. Since the Web Speech API is still in its experimental
							phase, there is limited browser/mobile compatiblity.
						</p>
						<p className="project__details">
							Built With: HTML5, CSS3, JavaScript, Web Speech API, and Web
							Storage API
						</p>
						<div className="project__buttons">
							<button className="btn btn--primary">Live Site</button>
							<button className="btn btn--secondary">View Code</button>
							<button className="btn btn--secondary">Video Demo</button>
							<button className="btn btn--secondary">More Info</button>
						</div>
					</div>
				</article>
			</section>
		);
}