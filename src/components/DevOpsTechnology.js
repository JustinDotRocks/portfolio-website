import React from 'react';
import styled from 'styled-components';

import CircleTechnology from '../utils/CircleTechnologies';
import { StyledComponents } from '@styled-icons/simple-icons/StyledComponents';
import { Redux } from '@styled-icons/boxicons-logos/Redux';
import { Chakraui } from '@styled-icons/simple-icons/Chakraui';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';
import { Sass } from '@styled-icons/fa-brands/Sass';
import { Javascript } from '@styled-icons/fluentui-system-filled/Javascript';
import { Typescript } from '@styled-icons/simple-icons/Typescript';
import { Html5 } from '@styled-icons/boxicons-logos/Html5';
import { Css3 } from '@styled-icons/boxicons-logos/Css3';

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
						<JavascriptIconContainer className="position-1-icon" />
						<Html5IconContainer className="position-2-icon" />
						<TypescriptIconContainer className="position-3-icon" />
						<Css3IconContainer className="position-4-icon" />
						<ReactIconContainer className="position-5-icon" />
						<SassIconContainer className="position-6-icon" />
						<StyledComponentsIconContainer className="position-7-icon" />
						<ReduxIconContainer className="position-8-icon" />
						<ChakrauiIconContainer className="position-9-icon" />
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
			{/* <BackendContainer>
					<BackendTextContainer>
						<h2>Backend Technologies</h2>
						<p>description</p>
					</BackendTextContainer>
					<CircleTechnology>
						<div className="outer-circle"></div>
						<div className="second-outer-circle"></div>
						<div className="second-inner-circle"></div>
						<div className="inner-circle"></div>
					</CircleTechnology>
				</BackendContainer>
				<DevOpsContainer>
					<DevOpsTextContainer>
						<h2>Dev Ops Technologies</h2>
						<p>description</p>
					</DevOpsTextContainer>
					<CircleTechnology>
						<div className="outer-circle"></div>
						<div className="second-outer-circle"></div>
						<div className="second-inner-circle"></div>
						<div className="inner-circle"></div>
					</CircleTechnology>
				</DevOpsContainer> */}
		</div>
	);
};

export default DevOpsEndTechnology;

const DevOpsendContainer = styled.div`
	background: linear-gradient(to right, white, #e9fff9);
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

// const BackendContainer = styled.div``;

// const BackendTextContainer = styled.div``;

// const DevOpsContainer = styled.div``;

// const DevOpsTextContainer = styled.div``;

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

const ChakrauiIconContainer = styled(Chakraui)`
	${Chakraui} {
		color: #2cbcb4;
	}
`;

const ReactIconContainer = styled(ReactLogo)`
	${ReactLogo} {
		color: #54d4fc;
	}
`;

const SassIconContainer = styled(Sass)`
	${Sass} {
		color: #cc639a;
	}
`;

const JavascriptIconContainer = styled(Javascript)`
	${Javascript} {
		color: #f4dc3c;
	}
`;

const TypescriptIconContainer = styled(Typescript)`
	${Typescript} {
		color: #047bcc;
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
