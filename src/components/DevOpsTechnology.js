import React from 'react';
import styled from 'styled-components';

import CircleTechnology from '../utils/CircleTechnologies';

import { Git } from '@styled-icons/boxicons-logos/Git';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Yarn } from '@styled-icons/simple-icons/Yarn';

const DevOpsEndTechnology = () => {
	return (
		<div>
			<DevOpsendContainer>
				<DevOpsEndCircleContainer>
					<CircleTechnology devOps>
						<div className="outer-circle"></div>
						<div className="second-outer-circle"></div>
						<div className="second-inner-circle"></div>
						<div className="inner-circle"></div>
						<div className="blue-circle"></div>
						<div className="orange-circle"></div>
						{/* <JavascriptIconContainer className="position-1-icon" /> */}
						{/* <Html5IconContainer className="position-2-icon" /> */}
						{/* <TypescriptIconContainer className="position-3-icon" /> */}
						{/* <Css3IconContainer className="position-4-icon" /> */}
						<YarnIconContainer className="position-2-icon" />
						{/* <SassIconContainer className="position-6-icon" /> */}
						<GitIconContainer className="position-5-icon" />
						<GithubIconContainer className="position-8-icon" />
						{/* <ChakrauiIconContainer className="position-9-icon" /> */}
					</CircleTechnology>
				</DevOpsEndCircleContainer>
				<DevOpsendTextContainer>
					<h2>
						<strong>Dev Ops</strong> Technologies
					</h2>
					<p>
						I'm a fullstack web developer living in Newfoundland Canada. My
						developer journey navigated me through the parallels of html, css,
						scss and javaScript. I shortly then after, picked up the ReactJS
						library and pivoted into styled components from using standard css
						and scss. I steered towards Redux and Redux Toolkit for state
						handling, but veered in the direction of GraphQL soon after.
						TypeScript was my next challenge, while I entered with caution, into
						the backstreets of PostgreSQL for database management. I used
						Apollo, TypeORM, node.js and next.js along the way. Redis was used
						to store my cookies, and I used Chakra (styling) for the first time.
					</p>
				</DevOpsendTextContainer>
			</DevOpsendContainer>
		</div>
	);
};

export default DevOpsEndTechnology;

const DevOpsendContainer = styled.div`
	background: linear-gradient(to left, white, rgba(242, 100, 25));
	display: flex;
	align-items: center;
`;

const DevOpsendTextContainer = styled.div`
	margin: 2em 10em 2em 1em;
	flex: 0.4;

	> h2 {
		font-size: 4em;
		color: #33658a;

		> strong {
			color: #f26419;
		}
	}

	> p {
		font-size: 1.2em;
	}
`;

const DevOpsEndCircleContainer = styled.div`
	flex: 0.6;
	margin: 5em 30em 5em -20em;
	height: 50vh;
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
	${Yarn} {
		color: #238bba;
	}
`;
