import React from 'react';
import styled from 'styled-components';

import CircleTechnology from '../../utils/CircleTechnologies';

import { StyledComponents } from '@styled-icons/simple-icons/StyledComponents';
import { Redux } from '@styled-icons/boxicons-logos/Redux';
import { Chakraui } from '@styled-icons/simple-icons/Chakraui';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';
import { Sass } from '@styled-icons/fa-brands/Sass';
import { Javascript } from '@styled-icons/fluentui-system-filled/Javascript';
import { Typescript } from '@styled-icons/simple-icons/Typescript';
import { Html5 } from '@styled-icons/boxicons-logos/Html5';
import { Css3 } from '@styled-icons/boxicons-logos/Css3';

const FrontEndTechnology = () => {
	return (
		<div>
			<FrontendContainer>
				<FrontEndCircleContainer>
					<CircleTechnology frontend>
						<div className="outer-circle"></div>
						<div className="second-outer-circle"></div>
						<div className="second-inner-circle"></div>
						<div className="inner-circle"></div>

						<div className="blue-circle"></div>
						<div className="orange-circle"></div>
						<JavascriptIconContainer className="position-1-icon" />
						<Html5IconContainer className="position-8-icon" />
						<TypescriptIconContainer className="position-3-icon" />
						<Css3IconContainer className="position-5-icon" />
						<ReactIconContainer className="position-2-icon" />
						<SassIconContainer className="position-6-icon" />
						<StyledComponentsIconContainer className="position-4-icon" />
						<ReduxIconContainer className="position-9-icon" />
						<ChakrauiIconContainer className="position-7-icon">
							<ChakrauiIcon />
						</ChakrauiIconContainer>
					</CircleTechnology>
				</FrontEndCircleContainer>
				<FrontendTextContainer>
					<h2>
						<strong>Frontend</strong> Technologies
					</h2>
					<p>
						Perfer to use JavaScript with React but capable of using TypeScript
						or Html.
						<br />
						Main styling method is Styled-components. Able to style with Css,
						Sass and ChakraUi.
						<br />
						Redux Toolkit for state manupliation. <br />
					</p>
				</FrontendTextContainer>
			</FrontendContainer>
		</div>
	);
};

export default FrontEndTechnology;

const FrontendContainer = styled.div`
	/* background: linear-gradient(to left, white, rgba(242, 100, 25)); */
	display: flex;
	align-items: center;
	margin: 1.5em;
	height: 100vh;

	@media (max-width: 1150px) {
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
		height: 150vh;
	}
	@media (max-width: 400px) {
		height: 90vh;
	}
`;

const FrontendTextContainer = styled.div`
	/* margin: 0em 10em 2em 1em; */
	margin: 0em 5em 0em 5em;
	flex: 0.4;
	@media (max-width: 1550px) {
		margin: 0em 2em 0em 2em;
	}
	@media (max-width: 1250px) {
		margin: 0em -1em 0em 2em;
	}
	@media (max-width: 1150px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0em 0em 2em 0em;
	}
	@media (max-width: 750px) {
		margin-top: 2em;
	}
	@media (max-width: 650px) {
		margin: 0em 0em 2em 0em;
	}
	@media (max-width: 420px) {
		margin: 0em 0em 2em 0em;
	}
	@media (max-width: 380px) {
		margin: 0em 0em 2em 0em;
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
		}

		@media (max-width: 650px) {
			font-size: 2.75em;
			margin: 3em 0em 0.5em 0em;
		}
		@media (max-width: 550px) {
			/* font-size: 2em; */
		}
		@media (max-width: 420px) {
			/* font-size: 1.8em; */
			margin-top: 2em;
		}
		@media (max-width: 400px) {
			/* font-size: 1.5em; */
			margin-top: 5em;
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

const FrontEndCircleContainer = styled.div`
	flex: 0.6;

	@media (max-width: 1550px) {
		margin: 0em 5em 0em -12em;
	}

	@media (max-width: 1250px) {
		margin: 0em 6em 0em -14em;
	}
	@media (max-width: 1150px) {
		margin: 20em 35em 10em -35em;
	}

	@media (max-width: 750px) {
		margin: 20em 35em 0em -30em;
	}
	@media (max-width: 650px) {
		margin: 20em 35em 0em -28em;
	}
	@media (max-width: 420px) {
		margin: 15em 31em 5em -28em;
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
const ChakrauiIconContainer = styled.div`
	width: 4em;
	height: 4em;
`;
const ChakrauiIcon = styled(Chakraui)`
	${Chakraui} {
		color: #2cbcb4;
		@media (max-width: 400px) {
			width: 2.5em;
		}
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
	width: 2em;
	height: 2em;
	${Typescript} {
		color: #047bcc;
		width: 1em;
		height: 1em;
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
