import React, { Component } from 'react';
import styled from 'styled-components';
import NeonButton from '../utils/NeonButton';

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
						<ResumeLink>
							<Link to="/resume">Resume</Link>
						</ResumeLink>
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
	background-color: white;
	color: #33658a;
	height: 8em;
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 2em;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
`;

const HomeButtonContainer = styled.div`
	flex: 0.5;
`;
const HomeButton = styled.a`
	border: none;
	background-color: transparent;
	font-size: 1.25rem;
	cursor: pointer;
	margin-left: 1em;
	> a {
		text-decoration: none;
		color: #f26419;
	}
`;

const LinksContainer = styled.div`
	flex: 0.35;
	font-size: 1.35em;
`;

const ProjectsLink = styled.a`
	margin-right: 3rem;
	font-weight: 500;
	cursor: pointer;

	> a {
		text-decoration: none;
		color: #f26419;
	}
`;

const AboutMeLink = styled.a`
	margin-right: 3rem;
	cursor: pointer;
	> a {
		text-decoration: none;
		color: #33658a;
	}
`;

const ResumeLink = styled.a`
	margin-right: 3rem;
	cursor: pointer;
	> a {
		text-decoration: none;
		color: #33658a;
	}
`;

const ContactMeButtonContainer = styled.div`
	flex: 0.15;
	> a {
		text-decoration: none;
	}
`;
