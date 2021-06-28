import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import AboutMeSvgComponent from '../utils/AboutMeSvg';

const AboutMePage = () => {
	return (
		<div>
			<Navbar />
			<AboutMeContainer>
				<AboutMeSvgComponent />
				<AboutMeTextContainer>
					<h2>
						Just a Little, <br /> <strong>About Me</strong>
					</h2>
					<p>
						I live in a little town, next to a little city, on a large island,
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
						new vegetable grower, and a lover of all things silly.
					</p>
				</AboutMeTextContainer>
			</AboutMeContainer>
		</div>
	);
};

export default AboutMePage;

const AboutMeContainer = styled.div`
	background-color: white;
	width: 100%;
	color: black;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;
	margin-top: 6em;
`;

const AboutMeTextContainer = styled.div`
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
