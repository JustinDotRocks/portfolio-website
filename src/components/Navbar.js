import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
	return (
		<div>
			<NavbarContainer>
				<HomeButtonContainer>
					<HomeButton>Home</HomeButton>
				</HomeButtonContainer>
				<LinksContainer>
					<TechnologiesLink>Technologies</TechnologiesLink>
					<ProjectsLink>Projects</ProjectsLink>
					<AboutMeLink>About Me</AboutMeLink>
					<ResumeLink>Resume</ResumeLink>
				</LinksContainer>
				<ConstactMeButtonContainer>
					<ContactMeButton>Contact Me</ContactMeButton>
				</ConstactMeButtonContainer>
			</NavbarContainer>
		</div>
	);
};

export default Navbar;

const NavbarContainer = styled.div`
	background-color: black;
	color: #4b4453;
	height: 5rem;
	width: 100%;
	display: flex;
	align-items: center;
`;

const HomeButtonContainer = styled.div`
	flex: 0.5;
`;
const HomeButton = styled.a`
	color: orange;
	border: none;
	background-color: transparent;
	font-size: 1.25rem;
	cursor: pointer;
`;

const LinksContainer = styled.div`
	flex: 0.35;
	font-size: 1.35em;
`;

const TechnologiesLink = styled.a`
	margin-right: 3rem;
	cursor: pointer;
`;

const ProjectsLink = styled.a`
	margin-right: 3rem;
	color: orange;
	font-weight: 500;
	cursor: pointer;
`;

const AboutMeLink = styled.a`
	margin-right: 3rem;
	cursor: pointer;
`;

const ResumeLink = styled.a`
	margin-right: 3rem;
	cursor: pointer;
`;

const ConstactMeButtonContainer = styled.div`
	flex: 0.15;
`;

const ContactMeButton = styled.a`
	font-size: 1.2em;
	margin: 1rem;
	padding: 0.25rem;
	color: orange;
	cursor: pointer;
	border: orange 0.225em solid;
	border-radius: 0.25em;
	padding: 0.25em 1em;
	text-shadow: 0 0 0.25em hsl(0 0% 100% / 0.5), 0 0 0.45em currentColor;
	box-shadow: inset 0 0 0.75em 0 orange, 0 0 0.75em 0 orange;
	position: relative;

	&:before {
		pointer-events: none; // wont trigger on the bottom shadow now.
		content: '';
		position: absolute;
		background-color: orange;
		top: 120%;
		left: 0;
		width: 100%;
		height: 100%;
		transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
		filter: blur(1em);
		opacity: 0.7;
	}

	&:after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		box-shadow: 0 0 2em 0.5em orange;
		opacity: 0;
		background-color: orange;
		z-index: -1;
		transition: opacity 100ms linear;
	}

	&:hover,
	&:focus {
		color: rebeccapurple;
		text-shadow: none;
	}

	&:hover::after {
		opacity: 1;
	}
`;
