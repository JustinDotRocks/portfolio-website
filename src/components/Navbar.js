import React from 'react';
import styled from 'styled-components';
import NeonButton from '../utils/NeonButton';

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
					<NeonButton title="Contact Me" />
				</ConstactMeButtonContainer>
			</NavbarContainer>
		</div>
	);
};

export default Navbar;

const NavbarContainer = styled.div`
	background-color: white;
	color: #33658a;
	height: 8em;
	width: 100%;
	display: flex;
	align-items: center;
`;

const HomeButtonContainer = styled.div`
	flex: 0.5;
`;
const HomeButton = styled.a`
	color: #f26419;
	border: none;
	background-color: transparent;
	font-size: 1.25rem;
	cursor: pointer;
	margin-left: 1em;
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
	color: #f26419;
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
