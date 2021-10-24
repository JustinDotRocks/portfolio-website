import React from 'react';
import styled from 'styled-components';

// import DescriptionContainerComponent from '../../utils/DescriptionContainerComponent';
import NeonButtonALink from '../../utils/NeonButtonALink';

import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';
import { Javascript } from '@styled-icons/fluentui-system-filled/Javascript';
import { Css3 } from '@styled-icons/boxicons-logos/Css3';
import { Git } from '@styled-icons/boxicons-logos/Git';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Yarn } from '@styled-icons/simple-icons/Yarn';

const ProjectComponent = () => {
	return (
		<div>
			<ProjectComponentContainer>
				<TechnologiesBlockContainer>
					<div className="position-6-icon">
						<JavascriptIconContainer />
					</div>
					{/* <div className="position-2-icon"></div>
					<div className="position-3-icon"></div> */}
					<div className="position-9-icon">
						<Css3IconContainer />
					</div>
					<div className="position-19-icon">
						<GithubIconContainer />
					</div>
					<div className="position-12-icon">
						<GitIconContainer />
					</div>
					<div className="position-16-icon">
						<YarnIconContainer />
					</div>
					<div className="position-3-icon">
						<ReactIconContainer />
					</div>
					<GooglecloudIconContainer className="position-15-icon">
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
					{/* <div className="position-10-icon">
						<ReduxIconContainer />
					</div> */}
					{/* <div className="position-11-icon">
						<SassIconContainer />
					</div> */}
					{/* <div className="position-12-icon"></div>
					<div className="position-13-icon"></div> */}
					{/* <div className="position-14-icon">
						<Html5IconContainer />
					</div> */}
					{/* <div className="position-15-icon"></div>
					<div className="position-16-icon"></div> */}
					{/* <div className="position-17-icon">
						<TypescriptIconContainer />
					</div> */}
					{/* <div className="position-18-icon"></div>
					<div className="position-19-icon"></div> */}
					{/* <div className="position-20-icon">
						<ChakrauiIconContainer>
							<ChakrauiIcon />
						</ChakrauiIconContainer>
					</div> */}
				</TechnologiesBlockContainer>
				<ProjectTextContainer>
					<ProjectHeader>Movies App</ProjectHeader>
					<ProjectDescriptionContainer>
						<p>
							Get info about the latest featured movies including ratings!
							<br />
							Search for movies to obtain info.
							<br />
							<br />
							Created with React with React Hooks, JavaScript, HTML and CSS.
							<br />
							Utilizes 3 API's. One for searching for movies, one for featured
							movies and one for the movie images.
							<br />
							Deployed using Google Cloud Services. <br />
						</p>
					</ProjectDescriptionContainer>
					<NeonButtonALink href="https://movies-search-popular-app.ue.r.appspot.com/">
						Try Movies App
					</NeonButtonALink>
				</ProjectTextContainer>
			</ProjectComponentContainer>
		</div>
	);
};

export default ProjectComponent;

const ProjectComponentContainer = styled.div`
	display: flex;
	margin: 3em 0;
	@media (max-width: 550px) {
		flex-direction: column-reverse;
		margin: 0em 0;
	}
`;

const ProjectTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 1.5em;
`;

const ProjectHeader = styled.h2`
	color: #f26419;
	font-size: 3em;

	@media (max-width: 800px) {
		font-size: 2.2em;
	}
`;

const ProjectDescriptionContainer = styled.div`
	width: 40vw;
	/* margin: 3em; */
	@media (max-width: 550px) {
		width: 70vw;
	}
	> p {
		color: #0089aa;
		padding: 2em;
		font-family: 'poppins';
		font-size: 1.3em;

		@media (max-width: 800px) {
			font-size: 1.1em;
		}
	}
`;

const ReactIconContainer = styled(ReactLogo)`
	${ReactLogo} {
		color: #54d4fc;
	}
`;

const JavascriptIconContainer = styled(Javascript)`
	${Javascript} {
		color: #f4dc3c;
	}
`;

const Css3IconContainer = styled(Css3)`
	${Css3} {
		color: #1373b4;
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

const GooglecloudIconContainer = styled.div``;

const TechnologiesBlockContainer = styled.div`
	position: relative;
	width: 40vw;
	height: 55vh;
	margin: 5em 4em 12em 5em;

	@media (max-width: 800px) {
		margin: 5em 4em 12em 2em;
	}
	@media (max-width: 550px) {
		width: 70vw;
	}
	> .position-1-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		top: -5%;
		left: -5%;
		/* margin: 3em 0px 0px 2em; */

		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-2-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		top: -5%;
		left: 20%;
		/* margin: 1em 0px 0px 12.5em; */

		z-index: 2;

		> svg {
			width: 4em;
			height: 4em;

			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-3-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;

		top: -5%;
		left: 45%;
		/* margin: 3em 0px 0px 23em; */

		z-index: 2;

		> svg {
			width: 4em;
			height: 4em;

			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-4-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		top: -5%;
		left: 70%;
		/* margin: 13em 0px 0px 2em; */

		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-5-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		top: -5%;
		left: 95%;
		/* margin: 12.5em 0px 0px 12.5em; */

		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-6-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		top: 27.5%;
		left: -5%;
		/* margin: 13em 0px 0px 23em; */

		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-7-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		top: 27.5%;
		left: 20%;
		/* margin: 22em 0px 0px 2em; */

		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-8-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		top: 27.5%;
		left: 45%;
		/* margin: 24em 0px 0px 12.5em; */

		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-9-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 27.5%;
		left: 70%;
		/* margin: 22em 0px 0px 23em; */
		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-10-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 27.5%;
		left: 95%;
		/* margin: 28em 0px 0px 29em; */
		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-11-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 62.5%;
		left: -5%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-12-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 62.5%;
		left: 20%;
		/* margin: -4em 0px 0px 27em; */
		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-13-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 62.5%;
		left: 45%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-14-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 62.5%;
		left: 70%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-15-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 62.5%;
		left: 95%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-16-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 95%;
		left: -5%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-17-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 95%;
		left: 20%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-18-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 95%;
		left: 45%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-19-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 95%;
		left: 70%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-20-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 95%;
		left: 95%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}
`;
