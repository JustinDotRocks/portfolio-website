import React from 'react';
import styled from 'styled-components';
import NeonButton from '../utils/NeonButton';
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
						I'm a front end web developer living in Newfoundland Canada. My
						developer journey navigated me through the parallels of html, css,
						scss and javaScript. I shortly then after, picked up the ReactJS
						library and pivoted into styled components from using standard css
						and scss. I steered towards Redux and Redux Toolkit for state
						handling, but veered in the direction of GraphQL soon after.
						TypeScript was my next challenge, while I entered with caution, into
						the backstreets of PostgreSQL for database management. I used
						Apollo, TypeORM, node.js and next.js along the way. Redis was used
						to store my cookies, and I used Chakra (styling) for the first time.
					</p>
					<NeonButton title="About Me" to="/about-me">
						About Me
					</NeonButton>
				</HelloWorldTextContainer>
				<HeroSvgComponent />
			</HeroContainer>
		</div>
	);
};

export default Hero;

const HeroContainer = styled.div`
	background-color: white;
	width: 100%;
	color: black;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;
	margin-top: 6em;
`;

const HelloWorldTextContainer = styled.div`
	margin-top: 7em;
	width: 40%;
	> h2 {
		font-size: 4em;
		color: #33658a;

		> strong {
			color: #f26419;
		}
	}

	> p {
		margin-bottom: 2em;
		font-size: 1.2em;
		font-weight: 500;
		color: black;
	}
`;
