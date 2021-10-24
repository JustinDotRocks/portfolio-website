import React from 'react';
import styled from 'styled-components';

import { StyledComponents } from '@styled-icons/simple-icons/StyledComponents';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';
import { Javascript } from '@styled-icons/fluentui-system-filled/Javascript';
import { Html5 } from '@styled-icons/boxicons-logos/Html5';
import { Css3 } from '@styled-icons/boxicons-logos/Css3';

import { Git } from '@styled-icons/boxicons-logos/Git';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Yarn } from '@styled-icons/simple-icons/Yarn';

import { HeartFill } from '@styled-icons/bootstrap/HeartFill';
import { Email } from '@styled-icons/material/Email';

import { Codepen } from '@styled-icons/fa-brands/Codepen';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';

const Footer = () => {
	return (
		<div>
			<WebsiteDescriptionContainer id="contact-me-section">
				<WebsiteDescriptionHeaderContainer>
					<h2>Website Made With:</h2>
				</WebsiteDescriptionHeaderContainer>
				<WebsiteDescriptionIconsContainer>
					<WebsiteDescriptionFrontendIconsContainer>
						<JavascriptIconContainer>
							<JavascriptIcon />
							<h3>JavaScript</h3>
						</JavascriptIconContainer>
						<ReactLogoIconContainer>
							<ReactLogoIcon />
							<h3>ReactJs</h3>
						</ReactLogoIconContainer>
						<StyledComponentsIconContainer>
							<StyledComponentsIcon />
							<h3>Styled Components</h3>
						</StyledComponentsIconContainer>
						<Html5IconContainer>
							<Html5Icon />
							<h3>HTML5</h3>
						</Html5IconContainer>
						<Css3IconContainer>
							<Css3Icon />
							<h3>CSS3</h3>
						</Css3IconContainer>
					</WebsiteDescriptionFrontendIconsContainer>
					<WebsiteDescriptionDevopsIconsContainer>
						<GitIconContainer>
							<GitIcon />
							<h3>GIT</h3>
						</GitIconContainer>
						<GithubIconContainer>
							<GithubIcon />
							<h3>GitHub</h3>
						</GithubIconContainer>
						<YarnIconContainer>
							<YarnIcon />
							<h3>Yarn</h3>
						</YarnIconContainer>
						<GoogleCloudIconContainer>
							<svg viewBox="0 0 128 128">
								<g>
									{' '}
									<path
										fill="#ea4535"
										d="M 80.6 40.3 l 0.4 0 l -0.2 -0.2 l 14 -14 l 0 -0.3 c -11.8 -10.4 -28.1 -14 -43.2 -9.5 c -15.1 4.5 -26.7 16.5 -30.9 31.7 c 0.2 -0.1 0.5 -0.2 0.8 -0.2 c 5.2 -3.4 11.4 -5.4 17.9 -5.4 c 2.2 0 4.3 0.2 6.4 0.6 c 0.1 -0.1 0.2 -0.1 0.3 -0.1 c 9 -9.9 24.2 -11.1 34.6 -2.6 l -0.1 0 l 0 0 z"></path>{' '}
									<path
										fill="#557ebf"
										d="M 108.1 47.8 c -2.3 -8.5 -7.1 -16.2 -13.8 -22.1 l -14.3 14.2 c 6 4.9 9.5 12.3 9.3 20 l 0 2.5 c 16.9 0 16.9 25.2 0 25.2 l -25.4 0 l 0 0 l 0 20 l -0.1 0 l 0.1 0.2 l 25.4 0 c 14.6 0.1 27.5 -9.3 31.8 -23.1 c 4.3 -13.8 -1 -28.8 -13 -36.9 l 0 0 z"></path>{' '}
									<path
										fill="#36a852"
										d="M 39 107.9 l 26.3 0 l 0 -20.2 l -26.3 0 c -1.9 0 -3.7 -0.4 -5.4 -1.1 l -15.2 14.6 l 0 0.2 c 6 4.3 13.2 6.6 20.7 6.6 l 0 0 z"></path>{' '}
									<path
										fill="#f9bc15"
										d="M 40.2 41.9 c -14.9 0.1 -28.1 9.3 -32.9 22.8 c -4.8 13.6 0 28.5 11.8 37.3 l 15.6 -14.9 c -8.6 -3.7 -10.6 -14.5 -4 -20.8 c 6.6 -6.4 17.8 -4.4 21.7 3.8 l 15.6 -14.9 c -6.6 -8.3 -16.9 -13.2 -27.8 -13.1 l 0 0 z"></path>{' '}
								</g>
							</svg>
							<h3>Google Cloud Storage</h3>
						</GoogleCloudIconContainer>
					</WebsiteDescriptionDevopsIconsContainer>
				</WebsiteDescriptionIconsContainer>
				<WebsiteCreatedFromContainer>
					{/* <p>and </p> */}
					<HeartFillIcon>
						<HeartFill />
					</HeartFillIcon>
					<p>from Newfoundland Canada!</p>
				</WebsiteCreatedFromContainer>
			</WebsiteDescriptionContainer>
			<ContactMeContainer>
				<SocialIconsContainer>
					<LinkedinIconContainer>
						<a href="https://www.linkedin.com/in/justinfsmith0/">
							<LinkedinIcon />
						</a>
					</LinkedinIconContainer>
					<CodepenIconContainer>
						<a href="https://codepen.io/JustinDotRocks">
							<CodepenIcon />
						</a>
					</CodepenIconContainer>
					<GithubFooterIconContainer>
						<a href="https://github.com/AlmightyTroll">
							<GithubFooterIcon />
						</a>
					</GithubFooterIconContainer>
				</SocialIconsContainer>
				<EmailContainer>
					<h3>Justin Smith:</h3>
					<EmailIcon>
						<Email />
					</EmailIcon>
					<p>justindotrocks@gmail.com</p>
				</EmailContainer>
			</ContactMeContainer>
		</div>
	);
};

export default Footer;

const WebsiteDescriptionContainer = styled.div`
	height: auto;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #f26419;

	@media (max-width: 400px) {
		margin-top: 7em;
	}
`;

const WebsiteDescriptionHeaderContainer = styled.div`
	> h2 {
		margin: 1em 0;
		font-size: 3rem;

		@media (max-width: 700px) {
			font-size: 2.5rem;
		}
		@media (max-width: 400px) {
			font-size: 2.2em;
		}
	}
`;

const WebsiteDescriptionIconsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	@media (max-width: 1400px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const WebsiteDescriptionFrontendIconsContainer = styled.div`
	display: flex;
`;

const WebsiteDescriptionDevopsIconsContainer = styled.div`
	display: flex;
`;

const WebsiteCreatedFromContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1em;
	font-size: 2em;

	@media (max-width: 700px) {
		font-size: 1.75em;
	}
	@media (max-width: 400px) {
		font-size: 1.5em;
	}
`;

const ContactMeContainer = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #33658a;
	color: white;
`;

const SocialIconsContainer = styled.div`
	display: flex;
	margin-top: 5em;
`;

const EmailContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 2em 0;
	font-size: 1.5em;

	@media (max-width: 550px) {
		font-size: 1em;
	}
`;

const HeartFillIcon = styled(HeartFill)`
	${HeartFill} {
		color: red;
		width: 1.5em;
		height: 1.5em;
		padding: 0.5em;

		@media (max-width: 400px) {
			width: 1.2em;
			height: 1.2em;
		}
	}
`;

const EmailIcon = styled(Email)`
	${Email} {
		color: white;
		width: 1.5em;
		height: 1.5em;
		padding: 0.5em;
	}
`;
const JavascriptIconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> h3 {
		font-size: 1em;
		@media (max-width: 700px) {
			font-size: 0.65em;
		}
	}
`;

const JavascriptIcon = styled(Javascript)`
	${Javascript} {
		color: #f4dc3c;
		margin: 1em 1.5em;
		width: 5em;
		height: 5em;
		border: 1px solid transparent;
		border-radius: 50%;
		padding: 0.5em;
		background-color: white;

		@media (max-width: 700px) {
			width: 3.25em;
			height: 3.25em;
			margin: 1em 0.5em;
		}

		@media (max-width: 400px) {
			width: 2.5em;
			height: 2.5em;
		}
	}
`;

const ReactLogoIconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	> h3 {
		font-size: 1em;
		@media (max-width: 700px) {
			font-size: 0.65em;
		}
	}
`;

const ReactLogoIcon = styled(ReactLogo)`
	${ReactLogo} {
		color: #54d4fc;
		margin: 1em 1.5em;
		width: 5em;
		height: 5em;
		border: 1px solid transparent;
		border-radius: 50%;
		padding: 0.5em;
		background-color: white;

		@media (max-width: 700px) {
			width: 3.25em;
			height: 3.25em;
			margin: 1em 0.5em;
		}

		@media (max-width: 400px) {
			width: 2.5em;
			height: 2.5em;
		}
	}
`;

const StyledComponentsIconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	> h3 {
		font-size: 1em;
		@media (max-width: 700px) {
			font-size: 0.65em;
		}
	}
`;

const StyledComponentsIcon = styled(StyledComponents)`
	${StyledComponents} {
		color: #d7698b;
		margin: 1em;
		width: 5em;
		height: 5em;
		border: 1px solid transparent;
		border-radius: 50%;
		padding: 0.5em;
		background-color: white;

		@media (max-width: 700px) {
			width: 3.25em;
			height: 3.25em;
			margin: 1em 0.5em;
		}

		@media (max-width: 400px) {
			width: 2.5em;
			height: 2.5em;
		}
	}
`;

const Html5IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	> h3 {
		font-size: 1em;
		@media (max-width: 700px) {
			font-size: 0.65em;
		}
	}
`;

const Html5Icon = styled(Html5)`
	${Html5} {
		color: #e44b23;
		margin: 1em 1.5em;
		width: 5em;
		height: 5em;
		border: 1px solid transparent;
		border-radius: 50%;
		padding: 0.5em;
		background-color: white;

		@media (max-width: 700px) {
			width: 3.25em;
			height: 3.25em;
			margin: 1em 0.5em;
		}

		@media (max-width: 400px) {
			width: 2.5em;
			height: 2.5em;
		}
	}
`;

const Css3IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	> h3 {
		font-size: 1em;
		@media (max-width: 700px) {
			font-size: 0.65em;
		}
	}
`;

const Css3Icon = styled(Css3)`
	${Css3} {
		color: #1373b4;
		margin: 1em 1.5em;
		width: 5em;
		height: 5em;
		border: 1px solid transparent;
		border-radius: 50%;
		padding: 0.5em;
		background-color: white;

		@media (max-width: 700px) {
			width: 3.25em;
			height: 3.25em;
			margin: 1em 0.5em;
		}

		@media (max-width: 400px) {
			width: 2.5em;
			height: 2.5em;
		}
	}
`;

const GitIconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	> h3 {
		font-size: 1em;
		@media (max-width: 700px) {
			font-size: 0.65em;
		}
	}
`;

const GitIcon = styled(Git)`
	${Git} {
		color: #f45434;
		margin: 1em 1.5em;
		width: 5em;
		height: 5em;
		border: 1px solid transparent;
		border-radius: 50%;
		padding: 0.5em;
		background-color: white;

		@media (max-width: 700px) {
			width: 3.25em;
			height: 3.25em;
			margin: 1em 0.5em;
		}

		@media (max-width: 400px) {
			width: 2.5em;
			height: 2.5em;
		}
	}
`;

const GithubIconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	> h3 {
		font-size: 1em;
		@media (max-width: 700px) {
			font-size: 0.65em;
		}
	}
`;

const GithubIcon = styled(Github)`
	${Github} {
		color: black;
		margin: 1em 1.5em;
		width: 5em;
		height: 5em;
		border: 1px solid transparent;
		border-radius: 50%;
		padding: 0.5em;
		background-color: white;

		@media (max-width: 700px) {
			width: 3.25em;
			height: 3.25em;
			margin: 1em 0.5em;
		}

		@media (max-width: 400px) {
			width: 2.5em;
			height: 2.5em;
		}
	}
`;

const YarnIconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	> h3 {
		font-size: 1em;
		@media (max-width: 700px) {
			font-size: 0.65em;
		}
	}
`;

const YarnIcon = styled(Yarn)`
	${Yarn} {
		color: #238bba;
		margin: 1em 1.5em;
		width: 5em;
		height: 5em;
		border: 1px solid transparent;
		border-radius: 50%;
		padding: 0.5em;
		background-color: white;

		@media (max-width: 700px) {
			width: 3.25em;
			height: 3.25em;
			margin: 1em 0.5em;
		}

		@media (max-width: 400px) {
			width: 2.5em;
			height: 2.5em;
		}
	}
`;

const GoogleCloudIconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	> h3 {
		font-size: 1em;
		@media (max-width: 700px) {
			font-size: 0.65em;
		}
	}

	> svg {
		color: #238bba;
		margin: 1em;
		width: 5em;
		height: 5em;
		border: 1px solid transparent;
		border-radius: 50%;
		padding: 0.5em;
		background-color: white;

		@media (max-width: 700px) {
			width: 3.25em;
			height: 3.25em;
			margin: 1em 0.5em;
		}

		@media (max-width: 400px) {
			width: 2.5em;
			height: 2.5em;
		}
	}
`;

const LinkedinIconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 2em;

	@media (max-width: 750px) {
		margin: 0 1em 0 1em;
	}
	> h3 {
		font-size: 1em;
	}

	a > :hover {
		transform: scale(0.98);
		background-color: rgba(86, 238, 244, 0.4);
		cursor: pointer;
	}
	a > :active {
		transform: scale(0.97);
		background-color: rgba(86, 238, 244, 0.7);
	}
`;

const LinkedinIcon = styled(Linkedin)`
	${Linkedin} {
		color: white;
		margin: 1em 1.5em;
		width: 5em;
		height: 5em;
		padding: 0.5em;
		border: 8px solid white;
		border-radius: 20px;
		box-shadow: inset 0 0 0.75em 0 #f26419, 0 0 0.75em 0 #f26419;
		transition: transform 250ms linear;

		@media (max-width: 550px) {
			width: 4em;
			height: 4em;
			margin: 1em 0.5em;
		}
		@media (max-width: 400px) {
			width: 3.5em;
			height: 3.5em;
			margin: 1em 0.25em;
		}
	}
`;

const CodepenIconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 2em;
	@media (max-width: 750px) {
		margin: 0 1em 0 1em;
	}

	> h3 {
		font-size: 1em;
	}

	a > :hover {
		transform: scale(0.98);
		background-color: rgba(50, 232, 117, 0.4);
		cursor: pointer;
	}
	a > :active {
		transform: scale(0.97);
		background-color: rgba(50, 232, 117, 0.7);
	}
`;

const CodepenIcon = styled(Codepen)`
	${Codepen} {
		color: white;
		margin: 1em 1.5em;
		width: 5em;
		height: 5em;
		padding: 0.5em;
		border: 8px solid white;
		border-radius: 20px;
		box-shadow: inset 0 0 0.75em 0 #f26419, 0 0 0.75em 0 #f26419;
		transition: transform 250ms linear;

		@media (max-width: 550px) {
			width: 4em;
			height: 4em;
			margin: 1em 0.5em;
		}
		@media (max-width: 400px) {
			width: 3.5em;
			height: 3.5em;
			margin: 1em 0.25em;
		}
	}
`;

const GithubFooterIconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 2em;
	@media (max-width: 750px) {
		margin: 0 1em 0 1em;
	}

	> h3 {
		font-size: 1em;
	}

	a > :hover {
		transform: scale(0.98);
		background-color: rgba(178, 76, 99, 0.4);
		cursor: pointer;
	}
	a > :active {
		transform: scale(0.97);
		background-color: rgba(178, 76, 99, 0.7);
	}
`;

const GithubFooterIcon = styled(Github)`
	${Github} {
		color: white;
		margin: 1em 1.5em;
		width: 5em;
		height: 5em;
		padding: 0.5em;
		border: 8px solid white;
		border-radius: 20px;
		box-shadow: inset 0 0 0.75em 0 #f26419, 0 0 0.75em 0 #f26419;
		transition: transform 250ms linear;

		@media (max-width: 550px) {
			width: 4em;
			height: 4em;
			margin: 1em 0.5em;
		}
		@media (max-width: 400px) {
			width: 3.5em;
			height: 3.5em;
			margin: 1em 0.25em;
		}
	}
`;
