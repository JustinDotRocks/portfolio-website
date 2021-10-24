import React from 'react';
import styled from 'styled-components';

import AboutMeImage2 from '../img/illustrations/about-me-2.svg';
import PlantSvg from '../img/illustrations/plant.svg';
import MineralSvg from '../img/illustrations/mineral.svg';
import SoccerBallSvg from '../img/illustrations/soccer-ball.svg';
import ComputerSvg from '../img/illustrations/computer.svg';
import FoodSvg from '../img/illustrations/food.svg';
import CoffeeSvg from '../img/illustrations/coffee-cup.svg';
import ScienceSvg from '../img/illustrations/solar-system.svg';

const AboutMeSvgComponent = () => {
	return (
		<SVGContainer>
			<AboutMeIconsContainer>
				<img id="plantIcon" src={PlantSvg} alt="Plant" />
				<img id="mineralIcon" src={MineralSvg} alt="Mineral" />
				<img id="soccerIcon" src={SoccerBallSvg} alt="SoccerBall" />
				<img id="computerIcon" src={ComputerSvg} alt="Computer" />
				<img id="foodIcon" src={FoodSvg} alt="Food" />
				<img id="coffeeIcon" src={CoffeeSvg} alt="Coffee" />
				<img id="scienceIcon" src={ScienceSvg} alt="Science" />
			</AboutMeIconsContainer>
			<BlueBlobSVGContainer>
				<svg
					id="visual"
					viewBox="0 0 900 600"
					width="900"
					height="600"
					xmlns="http://www.w3.org/2000/svg"
					//xmlns:xlink="http://www.w3.org/1999/xlink"
					version="1.1">
					<rect x="0" y="0" width="900" height="600" fill="none"></rect>
					<g transform="translate(405.6926615398283 291.0187016995354)">
						<path
							d="M168.3 -170.5C210.1 -165.4 230.6 -104.8 242.3 -42.2C254 20.5 256.9 85.2 228.4 129.3C199.9 173.3 140 196.6 91.2 186.5C42.5 176.3 5 132.8 -22.5 104.3C-50 75.8 -67.4 62.4 -95.5 41.6C-123.5 20.9 -162.2 -7.3 -162.1 -32.2C-162 -57.1 -123.1 -78.7 -89.6 -85.3C-56.1 -91.9 -28.1 -83.5 17.6 -104.4C63.2 -125.3 126.4 -175.7 168.3 -170.5"
							fill="#33658A"></path>
					</g>
				</svg>{' '}
			</BlueBlobSVGContainer>
			<OrangeBlobSVGContainer>
				<svg
					id="visual"
					viewBox="0 0 900 600"
					width="900"
					height="600"
					xmlns="http://www.w3.org/2000/svg"
					// xmlns:xlink="http://www.w3.org/1999/xlink"
					version="1.1">
					<rect x="0" y="0" width="900" height="600" fill="none"></rect>
					<g transform="translate(469.6423831618662 315.41181516016775)">
						<path
							d="M123.7 -175.1C136 -137.1 105 -75.1 111.2 -22.2C117.4 30.6 160.9 74.3 162.4 114.6C164 154.8 123.5 191.6 85 184.1C46.5 176.7 9.9 125 -47.2 111.9C-104.4 98.9 -182.1 124.4 -198.3 108.6C-214.6 92.7 -169.3 35.4 -136.4 -2C-103.5 -39.4 -82.9 -56.8 -62.2 -93.4C-41.6 -129.9 -20.8 -185.4 17.5 -206.2C55.7 -227.1 111.4 -213.1 123.7 -175.1"
							fill="#F26419"></path>
					</g>
				</svg>
			</OrangeBlobSVGContainer>
			<AboutMeImageContainer>
				<img src={AboutMeImage2} alt="AboutMe" />
			</AboutMeImageContainer>
		</SVGContainer>
	);
};

export default AboutMeSvgComponent;

const SVGContainer = styled.div`
	position: relative;

	@media (max-width: 1600px) {
		margin: 0em 0em 0em -9em;
	}
	@media (max-width: 1150px) {
		margin: 0em 0em 0em -17em;
	}
	/* @media (max-width: 700px) {
		margin: -11em 0em 10em -17em;
	} */
`;

const AboutMeImageContainer = styled.div`
	> img {
		position: absolute;
		height: 20em;
		width: 20em;
		top: 15em;
		left: 20em;

		@media (max-width: 1250px) {
			height: 16em;
			width: 16em;
			top: 17em;
			left: 23em;
		}
	}
`;

const BlueBlobSVGContainer = styled.div`
	transform: rotate(25deg);
	/* position: absolute; */
	@media (max-width: 1250px) {
		margin: 0em 0em -3em 10em;
	}

	> svg {
		margin-bottom: -36em;
		margin-left: 8em;

		@media (max-width: 1250px) {
			height: 40em;
			width: 40em;
		}
	}
`;

const OrangeBlobSVGContainer = styled.div`
	transform: rotate(-10deg);
	/* position: absolute; */

	@media (max-width: 1250px) {
		margin: 0em 10em 0em 10em;
	}

	> svg {
		z-index: 2;

		@media (max-width: 1250px) {
			height: 40em;
			width: 40em;
		}
	}
`;

const AboutMeIconsContainer = styled.div`
	height: 5em;
	width: 5em;
	/* position: relative; */

	> #plantIcon {
		position: absolute;
		height: 8em;
		width: 8em;
		top: 10em;
		left: 45em;

		@media (max-width: 1250px) {
			height: 5em;
			width: 5em;
			top: 13em;
			left: 38em;
		}
	}

	> #mineralIcon {
		position: absolute;
		height: 8em;
		width: 8em;
		top: 5em;
		left: 10em;

		@media (max-width: 1250px) {
			height: 5em;
			width: 5em;
			top: 11em;
			left: 19em;
		}
	}

	> #soccerIcon {
		position: absolute;
		height: 8em;
		width: 8em;
		top: 25em;
		left: 10em;

		@media (max-width: 1250px) {
			height: 5em;
			width: 5em;
			top: 24em;
			left: 18em;
		}
	}

	> #coffeeIcon {
		position: absolute;
		height: 8em;
		width: 8em;
		top: 35em;
		left: 45em;

		@media (max-width: 1250px) {
			height: 5em;
			width: 5em;
			top: 30em;
			left: 40em;
		}
	}

	> #computerIcon {
		position: absolute;
		height: 4em;
		width: 4em;
		top: 38em;
		left: 25em;

		@media (max-width: 1250px) {
			height: 5em;
			width: 5em;
			top: 33em;
			left: 24em;
		}
	}

	> #foodIcon {
		position: absolute;
		height: 5em;
		width: 5em;
		top: 25em;
		left: 45em;

		@media (max-width: 1250px) {
			height: 5em;
			width: 5em;
			top: 23em;
			left: 42em;
		}
	}

	> #scienceIcon {
		position: absolute;
		height: 5em;
		width: 5em;
		top: 5em;
		left: 30em;
		color: red;

		@media (max-width: 1250px) {
			height: 4em;
			width: 4em;
			top: 8em;
			left: 30em;
		}
	}
`;
