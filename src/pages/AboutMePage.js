import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import AboutMeSvgComponent from '../utils/AboutMeSvg';

const AboutMePage = () => {
	return (
		<div>
			<Navbar />
			<AboutMeContainer>
				<AboutMeHeaderContainer>
					<h2>
						Just a Little, <br /> <strong>About Me</strong>
					</h2>
					<p>
						I live in a little town, next to a little city, on a large island,
						with a small population.
						{/* I live in a little town, next to a little city, on a large island,
						with a small population. When I'm not improving my web development
						skills, I am spending my time partaking in many different things. I
						like spending time outside playing soccer, as well as hiking. I love
						to search for awesome rocks and hunt for 500 million year old
						Trilobite fossils. Its an eye opening experience to split open a
						piece of shale rock and be the first set of eyes to ever see the
						extinct organism on the inside. I'm not just a rockhound as I do
						enjoy time inside learning about other sciences as well as new
						technology. I also enjoy watching hockey games when I can. I love to
						spend time with my family and to try new food and share the
						experience with the people I care for. I'm not a coffee snob but I
						do enjoy a good pour over coffee throughout the day. I am a problem
						solver, a sports enthusiast, science fiction nerd, a rock nerd, a
						new vegetable grower, and a lover of all things silly. */}
					</p>
				</AboutMeHeaderContainer>
				<SvgAndListContainer>
					<AboutMeSvgComponentContainer>
						<AboutMeSvgComponent />
					</AboutMeSvgComponentContainer>
					<AboutMeListContainer>
						<ul>
							<li>Science and Technology</li>
							<li>Family, Food and Coffee</li>
							<li>Hiking and Outdoor Activities</li>
							<li>Rocks and Fossils</li>
							<li>Sports including Soccer</li>
							<li>Science Fiction</li>
							<li>Gardening</li>
							<li>Silly Things</li>
						</ul>
					</AboutMeListContainer>
				</SvgAndListContainer>
			</AboutMeContainer>
		</div>
	);
};

export default AboutMePage;

const AboutMeContainer = styled.div`
	width: 100vw;
	margin-top: 6em;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 550px) {
		margin-left: 2em;
	}
	@media (max-width: 450px) {
		margin-left: 4em;
	}
`;

const AboutMeHeaderContainer = styled.div`
	/* margin: 10em 0em 0 0em; */
	/* width: 40vw; */

	@media (max-width: 1600px) {
		/* margin: 7em 1em 0em -10em; */
	}
	@media (max-width: 1150px) {
		/* margin: 7em 1em 0em -10em; */
	}
	@media (max-width: 750px) {
	}

	@media (max-width: 400px) {
		/* position: relative; */
		/* width: 70vw; */
	}

	> h2 {
		font-size: 4em;
		color: #33658a;
		margin-left: 1em;

		@media (max-width: 1150px) {
			/* margin: 1.5em 0em 3em 1em; */
			/* width: 30vw; */
		}
		@media (max-width: 800px) {
			/* margin: 2em 0em 3em 6.5em;
			width: 30vw; */
		}
		@media (max-width: 700px) {
			/* margin: 0em 20em 3em 9.5em; */
			/* width: 100vw;
			font-size: 3em;
			position: absolute;
			top: -2em;
			left: 2em; */
			/* margin: 0em 1em 9em 1em; */
		}
		@media (max-width: 600px) {
			/* margin: 2em 0em 3em 8.5em; */
		}
		@media (max-width: 500px) {
			/* margin: 2em 0em 3em 9.5em; */
		}
		@media (max-width: 400px) {
			/* margin: 2em 0em 3em 10.5em; */
		}

		> strong {
			color: #f26419;
		}
	}

	> p {
		/* margin-bottom: 2em; */
		font-size: 1.2em;
		font-weight: 700;
		color: #33658a;
		margin-left: 4em;

		@media (max-width: 1350px) {
			font-size: 1.1em;
		}
		@media (max-width: 1150px) {
			/* margin: 1em 0em 3em -22em;
			width: 85vw; */
		}
		@media (max-width: 900px) {
			width: 60vw;
		}
		@media (max-width: 700px) {
			/* width: 100vw; */
		}
		@media (max-width: 600px) {
			/* margin: 1em 0em 3em 3em; */
		}
		@media (max-width: 500px) {
			/* margin: -5em 0em 3em 10em;
			font-size: 1.5em; */
		}
		@media (max-width: 400px) {
			/* margin: -3em 0em 3em 10em;
			font-size: 2em; */
		}
	}
`;

const SvgAndListContainer = styled.div`
	/* width: 100vw; */
	display: flex;
	flex-direction: row;
	align-items: center;

	@media (max-width: 1200px) {
		margin-top: -3em;
	}

	@media (max-width: 950px) {
		flex-direction: column;
		align-items: center;
		margin-left: 8em;
	}
	@media (max-width: 550px) {
		margin-left: 14em;
	}
`;
const AboutMeListContainer = styled.div`
	ul {
		/* margin: 10em 6em 1em 1em; */
		font-size: 1.4em;
		@media (max-width: 1000px) {
			/* margin: 10em 1em 1em 1em; */
		}
		@media (max-width: 950px) {
			margin-top: -5em;
			margin-left: -5em;
		}
		@media (max-width: 700px) {
			/* width: 90vw;
			margin: 3.5em 0em 3em 12em; */
		}
		@media (max-width: 600px) {
			/* margin: 2.5em 0em 3em 15em; */
		}
		@media (max-width: 400px) {
			/* margin: 2.5em 0em 3em 20em; */
		}

		> li {
			/* color: #33658a; */
			color: #f26419;
			font-weight: 900;

			@media (max-width: 500px) {
				/* font-size: 1.4em; */
			}
			@media (max-width: 400px) {
				font-size: 1em;
			}
		}
	}
`;

const AboutMeSvgComponentContainer = styled.div`
	/* margin: 5em 10em 0em 2em; */
	/* width: 60vw; */
	@media (max-width: 1250px) {
		/* width: 40vw; */
	}
	@media (max-width: 900px) {
		margin-top: -4em;
	}
	@media (max-width: 700px) {
		/* margin: 10em 0em 0em 12em; */
	}
	/* ${AboutMeSvgComponent} {
		@media (max-width: 1250px) {
			margin: 0em 30em 0em -30em;
		}
	} */
`;
