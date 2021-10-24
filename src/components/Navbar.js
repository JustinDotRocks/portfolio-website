import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import NeonButtonALink from '../utils/NeonButtonALink';

class Navbar extends Component {
	showSettings(event) {
		event.preventDefault();
	}
	render() {
		return (
			<div>
				<NavbarContainer>
					<HomeButtonContainer>
						<HomeButton>
							<a href="/#home-section">Home</a>
						</HomeButton>
					</HomeButtonContainer>
					<LinksContainer>
						<ProjectsLink>
							<a href="/#projects-section">Projects</a>
						</ProjectsLink>
						<AboutMeLink>
							<Link to="/about-me">About Me</Link>
						</AboutMeLink>
						{/* <ResumeLink>
							<Link to="/resume">Resume</Link>
						</ResumeLink> */}
					</LinksContainer>
					<ContactMeButtonContainer>
						<NeonButtonALink title="Contact Me" href="/#contact-me-section">
							Contact Me
						</NeonButtonALink>
					</ContactMeButtonContainer>
				</NavbarContainer>
			</div>
		);
	}
}

export default Navbar;

const NavbarContainer = styled.div`
	/* background: linear-gradient(to right, white, #33658a); */
	background-color: white;

	color: #33658a;
	height: 10vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* margin-bottom: 2em; */
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	font-size: 1.5rem;

	@media (max-width: 900px) {
		font-size: 1.2em;
	}
`;

const HomeButtonContainer = styled.div`
	/* flex: 0.3; */
	margin-left: 1em;

	@media (max-width: 900px) {
		/* flex: 0.2; */
	}
	@media (max-width: 560px) {
		/* flex: 0.1; */
		font-size: 0.75em;
	}
	@media (max-width: 410px) {
		/* flex: 0.15; */
		margin-left: 0.5em;
	}
`;
const HomeButton = styled.a`
	border: none;
	background-color: transparent;
	cursor: pointer;
	> a {
		text-decoration: none;
		color: #f26419;
	}
`;

const LinksContainer = styled.div`
	/* flex: 0.5; */

	@media (max-width: 950px) {
		/* flex: 0.6; */
	}

	@media (max-width: 500px) {
		/* flex: 0.7; */
		margin-left: 0.75em;
	}
`;

const ProjectsLink = styled.a`
	margin-right: 3rem;
	font-weight: 500;
	cursor: pointer;

	@media (max-width: 900px) {
		margin-right: 1em;
	}

	@media (max-width: 410px) {
		margin-right: 0.5em;
	}

	> a {
		text-decoration: none;
		color: #33658a;

		@media (max-width: 560px) {
			font-size: 0.75em;
			margin-left: 0.25em;
		}
	}
`;

const AboutMeLink = styled.a`
	margin-right: 3rem;
	cursor: pointer;
	@media (max-width: 900px) {
		margin-right: 1em;
	}
	@media (max-width: 410px) {
		margin-right: 0.5em;
	}
	> a {
		text-decoration: none;
		color: #f26419;
		@media (max-width: 560px) {
			font-size: 0.75em;
		}
	}
`;

// const ResumeLink = styled.a`
// 	margin-right: 3rem;
// 	cursor: pointer;
// 	@media (max-width: 900px) {
// 		margin-right: 1em;
// 	}
// 	@media (max-width: 560px) {
// 		margin-right: 0.25em;
// 	}
// 	@media (max-width: 410px) {
// 		/* margin-right: 0.5em; */
// 	}
// 	> a {
// 		text-decoration: none;
// 		color: #f26419;
// 		@media (max-width: 560px) {
// 			font-size: 0.75em;
// 		}
// 	}
// `;

const ContactMeButtonContainer = styled.div`
	margin-right: 2em;
	/* flex: 0.3; */
	@media (max-width: 1500px) {
		/* flex: 0.3; */
	}
	@media (max-width: 900px) {
		/* flex: 0.3; */
	}
	@media (max-width: 500px) {
		/* flex: 0.3; */
		font-size: 0.75em;
	}
	@media (max-width: 450px) {
		/* flex: 0.4; */
		margin-right: 0.25em;
	}
	> a {
		text-decoration: none;
		font-size: 0.7em;

		@media (max-width: 1500px) {
		}

		@media (max-width: 560px) {
		}
	}
`;
