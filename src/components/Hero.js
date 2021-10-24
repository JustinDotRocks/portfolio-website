import React from 'react';
import styled from 'styled-components';
import NeonButtonBlue from '../utils/NeonButtonBlue';
import HeroSvgComponent from '../utils/HeroSvg';
const Hero = () => {
	return (
		<div>
			<HeroContainer id="home-section">
				<HelloWorldTextContainer>
					<h2>
						Hello World! <br /> <strong>I'm Justin Smith.</strong>
					</h2>
					<p>
						Front end web developer from Newfoundland Canada. <br />
						Basic understanding of back end technologies. <br />
						Adaptable. Self taught. Problem solver.
					</p>
					<ButtonContainer>
						<NeonButtonBlue title="About Me" to="/about-me">
							About Me
						</NeonButtonBlue>
					</ButtonContainer>
				</HelloWorldTextContainer>
				<HeroSvgComponentContainer>
					<HeroSvgComponent />
				</HeroSvgComponentContainer>
			</HeroContainer>
		</div>
	);
};

export default Hero;

const HeroContainer = styled.div`
	background: linear-gradient(to left, white, rgba(242, 100, 25));
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: space-between;
	margin-top: 6em;
	overflow-x: hidden;

	@media (max-width: 750px) {
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		margin-top: 0;
		height: 150vh;
		background: linear-gradient(to bottom, rgba(242, 100, 25), white);
		overflow-y: hidden;
	}

	@media (max-width: 580px) {
		height: 160vh;
	}

	@media (max-width: 500px) {
		height: 150vh;
		margin-top: 1em;
		/* background: linear-gradient(to bottom, white, rgba(242, 100, 25)); */
		/* overflow-y: hidden; */

		/* background: rgba(242, 100, 25); */
	}
	@media (max-width: 475px) {
		height: 150vh;
	}
	@media (max-width: 380px) {
		height: 140vh;
	}
`;

const HelloWorldTextContainer = styled.div`
	margin: 1em 0 0 5em;
	width: 45vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	@media (max-width: 1810px) {
		/* flex: 0.7;
		margin-left: 1em; */
	}
	@media (max-width: 1500px) {
		/* flex: 0.9; */
	}
	@media (max-width: 1150px) {
		margin: 13em 1em 0 2em;
	}
	/* @media (max-width: 1000px) {
		margin: 3em 1em 0 1em;
		width: 70vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column; 
	}*/
	@media (max-width: 1000px) {
		margin: 20em 1em 0 2em;
	}
	@media (max-width: 750px) {
		margin: 20em 1em 1em 0em;
		width: 65vw;
	}
	@media (max-width: 500px) {
		width: 95vw;
		margin-top: 20em;

		/* margin: 1em 1em 7em 2em; */
	}
	@media (max-width: 410px) {
		/* width: 100vw; */
		/* margin: 3em 0.5em 0em 0.5em; */
		/* background: rgba(242, 100, 25); */
		margin-top: 5em;
	}
	> h2 {
		font-size: 4em;
		color: white;

		@media (max-width: 1000px) {
			/* font-size: 1.8em; */
			margin: -4em 0em 0em 0em;
		}

		@media (max-width: 750px) {
			font-size: 3.25em;
		}

		@media (max-width: 410px) {
			margin: 0em 0.25em 0.5em 0.25em;
		}

		> strong {
			color: #33658a;
		}
	}

	> p {
		margin-bottom: 2em;
		font-size: 1.2em;
		font-weight: 500;
		color: white;
		@media (max-width: 1000px) {
			/* font-size: 1em; */
		}
		@media (max-width: 750px) {
			font-size: 1.4em;
			margin-bottom: 0;
		}
		@media (max-width: 410px) {
			margin-right: 0.5em;
			margin-left: 0.5em;
		}
	}
`;

const HeroSvgComponentContainer = styled.div`
	margin: 5em -5em 0 0;
	@media (max-width: 1600px) {
	}
	@media (max-width: 1350px) {
		margin: 5em -15em 0 0;
	}
	@media (max-width: 1000px) {
		margin: 0em 8em 40em 1em;
	}
	@media (max-width: 750px) {
		margin: -10em 14em 35em 10em;
	}
	@media (max-width: 410px) {
		margin: -10em 14em 32em 10em;
	}
`;

const ButtonContainer = styled.div`
	@media (max-width: 750px) {
		margin-bottom: 8em;
		margin-top: 3em;
	}
	@media (max-width: 410px) {
		margin-bottom: 5em;
	}
`;
