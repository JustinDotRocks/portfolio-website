import React from 'react';
import styled from 'styled-components';

import CircleTechnology from '../../utils/CircleTechnologies';

import { Git } from '@styled-icons/boxicons-logos/Git';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Yarn } from '@styled-icons/simple-icons/Yarn';
import { Docker } from '@styled-icons/simple-icons/Docker';

const DevOpsEndTechnology = () => {
	return (
		<div>
			<DevOpsendContainer>
				<DevOpsEndCircleContainer>
					<CircleTechnology devops>
						<div className="outer-circle"></div>
						<div className="second-outer-circle"></div>
						<div className="second-inner-circle"></div>
						<div className="inner-circle"></div>

						<div className="blue-circle"></div>
						<div className="orange-circle"></div>
						<GooglecloudIconContainer className="position-1-icon">
							<svg viewBox="0 0 128 128">
								<g>
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
						</GooglecloudIconContainer>
						<div className="position-2-icon">
							<DockerIconContainer />
						</div>
						{/* <Html5IconContainer className="position-2-icon" /> */}
						<div className="position-4-icon">
							<YarnIconContainer />
						</div>
						{/* <Css3IconContainer className="position-4-icon" /> */}
						{/* <YarnIconContainer className="position-5-icon" /> */}
						{/* <SassIconContainer className="position-6-icon" /> */}
						<GitIconContainer className="position-6-icon" />
						{/* <ChakrauiIconContainer className="position-8-icon" /> */}
						<GithubIconContainer className="position-8-icon" />
						<FirebaseIconContainer className="position-9-icon">
							<svg viewBox="0 0 128 128">
								<g>
									{' '}
									<path
										fill="#f58220"
										d="M11.4,115.62H8.25V91.22h14.25v3.01H11.4v8.02h10.04v2.93H11.42v10.44H11.4z"></path>{' '}
									<path
										fill="#f58220"
										d="M27.92,94.74c-0.43,0.43-0.96,0.64-1.57,0.64c-0.61,0-1.15-0.21-1.57-0.64c-0.43-0.43-0.64-0.96-0.64-1.57 s0.21-1.15,0.64-1.57c0.43-0.43,0.96-0.64,1.57-0.64c0.61,0,1.15,0.21,1.57,0.64s0.64,0.96,0.64,1.57S28.34,94.28,27.92,94.74z M27.92,115.62h-3.14V98.92h3.14V115.62z"></path>{' '}
									<path
										fill="#f58220"
										d="M34.47,115.62h-3.14V98.92h3.01v2.72h0.13c0.32-0.91,0.96-1.65,1.97-2.24c0.99-0.59,1.95-0.88,2.88-0.88 s1.71,0.13,2.34,0.4l-1.2,2.93c-0.4-0.16-0.96-0.24-1.68-0.24c-1.15,0-2.13,0.45-3.01,1.36c-0.88,0.91-1.31,2.08-1.31,3.52 V115.62z"></path>{' '}
									<path
										fill="#f58220"
										d="M49.23,116.18c-2.53,0-4.58-0.85-6.15-2.53s-2.37-3.81-2.37-6.37c0-2.42,0.77-4.53,2.29-6.29 c1.55-1.76,3.49-2.64,5.89-2.64c2.48,0,4.45,0.8,5.94,2.42c1.49,1.63,2.24,3.78,2.24,6.47l-0.03,0.59H43.85 c0.08,1.68,0.67,3.01,1.68,4c1.04,0.99,2.24,1.47,3.62,1.47c2.24,0,3.78-0.96,4.58-2.88l2.8,1.17c-0.53,1.31-1.44,2.37-2.69,3.25 C52.59,115.73,51.04,116.18,49.23,116.18z M53.74,105.26c-0.08-0.96-0.51-1.87-1.31-2.72c-0.8-0.85-2-1.31-3.6-1.31 c-1.17,0-2.16,0.37-3.01,1.09c-0.85,0.72-1.44,1.71-1.76,2.93L53.74,105.26L53.74,105.26z"></path>{' '}
									<path
										fill="#f58220"
										d="M68.1,116.18c-1.28,0-2.42-0.27-3.44-0.83c-1.01-0.53-1.76-1.23-2.26-2.05h-0.13v2.32h-3.01V91.22h3.14v7.7 l-0.13,2.32h0.13c0.51-0.83,1.25-1.49,2.26-2.05c1.01-0.53,2.16-0.83,3.44-0.83c2.16,0,4.02,0.85,5.6,2.56 c1.57,1.71,2.34,3.81,2.34,6.34s-0.77,4.64-2.34,6.34C72.12,115.33,70.26,116.18,68.1,116.18z M67.56,113.31 c1.47,0,2.72-0.56,3.76-1.65c1.04-1.09,1.57-2.56,1.57-4.37s-0.53-3.28-1.57-4.37c-1.04-1.09-2.29-1.65-3.76-1.65 s-2.74,0.53-3.76,1.63c-1.01,1.09-1.55,2.56-1.55,4.4c0,1.84,0.51,3.3,1.55,4.4C64.85,112.77,66.1,113.31,67.56,113.31z"></path>{' '}
									<path
										fill="#f58220"
										d="M83.84,116.18c-1.79,0-3.25-0.51-4.45-1.55c-1.2-1.01-1.79-2.37-1.79-4.05c0-1.81,0.69-3.25,2.1-4.29 c1.41-1.04,3.14-1.55,5.22-1.55c1.84,0,3.36,0.35,4.53,1.01v-0.48c0-1.23-0.43-2.21-1.25-2.96c-0.85-0.75-1.87-1.12-3.09-1.12 c-0.91,0-1.73,0.21-2.48,0.64c-0.75,0.43-1.25,1.01-1.52,1.79l-2.88-1.23c0.4-1.01,1.15-1.92,2.29-2.77 c1.15-0.85,2.64-1.28,4.5-1.28c2.13,0,3.92,0.61,5.33,1.87c1.41,1.25,2.1,3.01,2.1,5.28v10.12h-3.01v-2.32h-0.13 C88.08,115.22,86.24,116.18,83.84,116.18z M84.35,113.31c1.31,0,2.48-0.48,3.52-1.44c1.07-0.96,1.6-2.1,1.6-3.44 c-0.88-0.72-2.21-1.09-4-1.09c-1.52,0-2.66,0.32-3.44,0.99c-0.77,0.67-1.17,1.44-1.17,2.32c0,0.83,0.35,1.47,1.07,1.95 C82.64,113.07,83.44,113.31,84.35,113.31z"></path>{' '}
									<path
										fill="#f58220"
										d="M101.19,116.18c-1.87,0-3.41-0.45-4.61-1.36c-1.23-0.91-2.1-2.05-2.66-3.41l2.8-1.17 c0.88,2.1,2.4,3.14,4.53,3.14c0.99,0,1.79-0.21,2.4-0.64c0.61-0.43,0.93-1.01,0.93-1.71c0-1.09-0.77-1.84-2.29-2.21L98.9,108 c-1.07-0.27-2.08-0.8-3.04-1.55c-0.96-0.77-1.44-1.79-1.44-3.09c0-1.47,0.67-2.66,1.97-3.6c1.31-0.93,2.85-1.39,4.66-1.39 c1.47,0,2.8,0.35,3.94,1.01c1.17,0.67,2,1.63,2.48,2.88l-2.72,1.12c-0.61-1.47-1.89-2.21-3.81-2.21c-0.93,0-1.71,0.19-2.34,0.59 c-0.64,0.4-0.96,0.91-0.96,1.57c0,0.96,0.75,1.6,2.21,1.95l3.3,0.77c1.57,0.37,2.72,0.99,3.49,1.87 c0.75,0.88,1.12,1.89,1.12,3.01c0,1.49-0.61,2.74-1.84,3.76C104.71,115.7,103.13,116.18,101.19,116.18z"></path>{' '}
									<path
										fill="#f58220"
										d="M117.58,116.18c-2.53,0-4.58-0.85-6.15-2.53c-1.57-1.68-2.37-3.81-2.37-6.37c0-2.42,0.77-4.53,2.29-6.29 c1.55-1.76,3.49-2.64,5.89-2.64c2.48,0,4.45,0.8,5.94,2.42c1.49,1.63,2.24,3.78,2.24,6.47l-0.03,0.59h-13.19 c0.08,1.68,0.67,3.01,1.68,4c1.04,0.99,2.24,1.47,3.62,1.47c2.24,0,3.78-0.96,4.58-2.88l2.8,1.17c-0.53,1.31-1.44,2.37-2.69,3.25 C120.93,115.73,119.39,116.18,117.58,116.18z M122.08,105.26c-0.08-0.96-0.51-1.87-1.31-2.72c-0.8-0.85-2-1.31-3.6-1.31 c-1.17,0-2.16,0.37-3.01,1.09c-0.85,0.72-1.44,1.71-1.76,2.93L122.08,105.26L122.08,105.26z"></path>{' '}
									<path
										fill="#f58220"
										d="M39.25,59.42l7.69-49.28c0.27-1.68,2.52-2.08,3.31-0.57l8.26,15.47L39.25,59.42z M93.92,71.39 l-7.34-45.39c-0.22-1.41-1.99-1.99-3.01-0.97L37.35,71.39l25.59,14.36c1.59,0.88,3.58,0.88,5.17,0L93.92,71.39z M73.14,31.8 l-5.92-11.27c-0.66-1.28-2.47-1.28-3.14,0l-26.03,46.4L73.14,31.8z"></path>{' '}
								</g>
							</svg>
						</FirebaseIconContainer>
					</CircleTechnology>
				</DevOpsEndCircleContainer>
				<DevOpsendTextContainer>
					<h2>
						<strong>Dev Ops</strong> Technologies
					</h2>
					<p>
						Wrap the front end up in a Docker Container. <br />
						Git and GitHub for version control. <br />
						Yarn perferred for package management. <br />
					</p>
				</DevOpsendTextContainer>
			</DevOpsendContainer>
		</div>
	);
};

export default DevOpsEndTechnology;

const DevOpsendContainer = styled.div`
	/* background: linear-gradient(to left, white, rgba(242, 100, 25)); */
	display: flex;
	height: 100vh;
	align-items: center;
	margin: 1.5em;

	@media (max-width: 1150px) {
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
		height: 150vh;
		margin-bottom: 10em;
	}
	@media (max-width: 950px) {
		height: 150vh;
	}
	@media (max-width: 850px) {
		height: 160vh;
	}
	@media (max-width: 650px) {
		height: 120vh;
	}
	@media (max-width: 400px) {
		height: 70vh;
	}
`;

const DevOpsendTextContainer = styled.div`
	flex: 0.4;
	margin: 0em 5em 0em 5em;

	@media (max-width: 1550px) {
		margin: 0em 2em 0em 2em;
	}
	@media (max-width: 1250px) {
		margin: 0em -0.5em 0em 2em;
	}

	@media (max-width: 1150px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 1em 0em 2em 0em;
	}
	@media (max-width: 850px) {
		margin: 1em 0em 2em 0em;
	}
	@media (max-width: 650px) {
		margin: -15em 0em 2em 0em;
	}
	@media (max-width: 420px) {
		margin: -18em 0em 2em 0em;
	}
	@media (max-width: 380px) {
		margin: -33em 0em 2em 0em;
	}

	> h2 {
		font-size: 4em;
		color: #33658a;
		@media (max-width: 1150px) {
			font-size: 3.5em;
			margin: 1em 0em 0.5em 0em;
		}
		@media (max-width: 850px) {
			font-size: 3em;
			margin: 5em 0em 0.5em 0em;
		}
		@media (max-width: 650px) {
			margin: 3em 0em 0.5em 0em;
		}
		@media (max-width: 550px) {
			margin: 2em 0em 0.5em 0em;
		}
		@media (max-width: 420px) {
			margin-top: 2em;
		}
		@media (max-width: 400px) {
			margin-top: 10em;
		}

		> strong {
			color: #f26419;
		}
	}

	> p {
		font-size: 1.5em;
		color: #33658a;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		@media (max-width: 1150px) {
			width: 60vw;
		}

		@media (max-width: 450px) {
			font-size: 1.3em;
		}
	}
`;

const DevOpsEndCircleContainer = styled.div`
	flex: 0.6;
	margin-bottom: 5em;

	@media (max-width: 1550px) {
		margin: 0em 5em 0em -12em;
	}

	@media (max-width: 1250px) {
		margin: 0em 6em 0em -13em;
	}
	@media (max-width: 1150px) {
		margin: 17em 35em 10em -35em;
	}
	@media (max-width: 850px) {
		margin: 17em 35em 20em -35em;
	}
	@media (max-width: 650px) {
		margin: 17em 35em 10em -28em;
	}
	@media (max-width: 400px) {
		margin: 15em 31em 10em -28em;
	}
`;

const GitIconContainer = styled(Git)`
	${Git} {
		color: #f45434;
	}
`;

const GithubIconContainer = styled(Github)`
	${Github} {
		color: black;
	}
`;

const YarnIconContainer = styled(Yarn)`
	width: 4em;
	height: 4em;
	${Yarn} {
		color: #238bba;
	}
`;

const DockerIconContainer = styled(Docker)`
	${Docker} {
		color: #2394ec;
	}
`;

const GooglecloudIconContainer = styled.div``;

const FirebaseIconContainer = styled.div``;
