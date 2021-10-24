import React from 'react';
import styled from 'styled-components';

// import DescriptionContainerComponent from '../../utils/DescriptionContainerComponent';
import NeonButtonALink from '../../utils/NeonButtonALink';

import { StyledComponents } from '@styled-icons/simple-icons/StyledComponents';
import { Redux } from '@styled-icons/boxicons-logos/Redux';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';
import { Javascript } from '@styled-icons/fluentui-system-filled/Javascript';
import { Html5 } from '@styled-icons/boxicons-logos/Html5';
import { Css3 } from '@styled-icons/boxicons-logos/Css3';
import { Heroku } from '@styled-icons/simple-icons/Heroku';

const ProjectComponent = () => {
	return (
		<div>
			<ProjectComponentContainer>
				<ProjectTextContainer>
					<ProjectHeader>Postage</ProjectHeader>
					<ProjectDescriptionContainer>
						<p>
							Create a title, choose the author, save your post, edit your post
							if need be.
							<br />
							Mock posts and notifications present.
							<br />
							Don't forget to react to your favorite posts!
							<br />
							<br />
							Made with React, Redux Toolkit and Styled-components ( along with
							JavaScript, HTML and CSS).
							<br />
							Moment.js for timestamping and ordering of the posts. <br />
							Faker.js was used for creating fake posts and notifications.
							<br />
							Mirrage.js was used for calling on a fake API to retrieve and post
							data.
							{/* * I started learning HTML and CSS to get started <br />
							* I started making simple components like navbars, headers and
							info cards. <br />
							* I then took on Sass/Scss for better styling options. <br />
							* I then started to learn to add functionality with the use of
							JavaScript.
							<br />
							* I started creating single function apps to better understand
							JavaScript <br /> */}
						</p>
					</ProjectDescriptionContainer>
					<NeonButtonALink href="https://redux-postage.herokuapp.com/">
						Try Postage
					</NeonButtonALink>
				</ProjectTextContainer>
				<TechnologiesBlockContainer>
					<div className="position-1-icon">
						<JavascriptIconContainer />
					</div>
					{/* <div className="position-2-icon"></div>
					<div className="position-3-icon"></div> */}
					<div className="position-4-icon">
						<Css3IconContainer />
					</div>
					{/* <div className="position-5-icon"></div> */}
					{/* <div className="position-6-icon"></div> */}
					<div className="position-6-icon">
						<StyledComponentsIconContainer />
					</div>
					<div className="position-8-icon">
						<ReactIconContainer />
					</div>
					{/* <div className="position-9-icon"></div> */}
					<div className="position-10-icon">
						<ReduxIconContainer />
					</div>
					<div className="position-11-icon">
						<HerokuIconContainer />
					</div>
					{/* <div className="position-12-icon"></div>
					<div className="position-13-icon"></div> */}
					<div className="position-14-icon">
						<Html5IconContainer />
					</div>
					{/* <div className="position-15-icon"></div>
					<div className="position-16-icon"></div> */}
					{/* <div className="position-17-icon">
					</div> */}
					{/* <div className="position-18-icon"></div>
					<div className="position-19-icon"></div> */}
					{/* <div className="position-20-icon">
						
					</div> */}
				</TechnologiesBlockContainer>
			</ProjectComponentContainer>
		</div>
	);
};

export default ProjectComponent;

const ProjectComponentContainer = styled.div`
	display: flex;
	margin: 3em 0;

	@media (max-width: 550px) {
		flex-direction: column;
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

const StyledComponentsIconContainer = styled(StyledComponents)`
	${StyledComponents} {
		color: #d7698b;
	}
`;

const ReduxIconContainer = styled(Redux)`
	${Redux} {
		color: #734abb;
	}
`;
// const ChakrauiIconContainer = styled.div`
// 	width: 4em;
// 	height: 4em;
// `;

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

const HerokuIconContainer = styled(Heroku)`
	${Heroku} {
		width: 3.5em;
		height: 3.5em;
		color: #6762a6;
	}
`;

const Html5IconContainer = styled(Html5)`
	${Html5} {
		color: #e44b23;
	}
`;

const Css3IconContainer = styled(Css3)`
	${Css3} {
		color: #1373b4;
	}
`;
const TechnologiesBlockContainer = styled.div`
	position: relative;
	width: 40vw;
	height: 55vh;
	margin: 5em 4em 12em 5em;

	@media (max-width: 800px) {
		margin: 5em 6em 12em 2em;
	}

	@media (max-width: 550px) {
		width: 70vw;
		margin: 5em 6em 1em 2em;
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
				width: 3.5em;
				height: 3.5em;
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
