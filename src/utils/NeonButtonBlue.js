import styled from 'styled-components';
import { Link } from 'react-router-dom';

// NeonButton = ({ title }) => {
// 	return (
// 		<div>
// 			<NeonButton>{title}</NeonButton>
// 		</div>
// 	);
// };

const NeonButtonBlue = styled(Link)`
	font-size: 1.2em;
	text-decoration: none;
	margin: 1rem;
	//width: 100%;
	padding: 0.25rem;
	background-color: #33658a;
	color: white;
	cursor: pointer;
	border: #33658a 0.225em solid;
	border-radius: 1em;
	padding: 0.25em 1em;
	text-shadow: 0 0 0.25em hsl(0 0% 100% / 0.5), 0 0 0.45em currentColor;
	box-shadow: inset 0 0 0.75em 0 #33658a, 0 0 0.75em 0 #33658a;
	position: relative;

	&:before {
		pointer-events: none; // wont trigger on the bottom shadow now.
		content: '';
		position: absolute;
		background-color: #33658a;
		top: 120%;
		left: 0;
		width: 100%;
		height: 100%;
		transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
		filter: blur(1em);
		opacity: 0.7;
	}

	&:after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		border-radius: 1em;
		box-shadow: 0 0 2em 0.5em #33658a;
		opacity: 0;
		transition: opacity 100ms linear;
	}

	&:hover,
	&:focus {
		text-shadow: none;
	}

	&:hover::before {
		opacity: 1;
	}

	&:hover:after {
		opacity: 1;
	}
`;

export default NeonButtonBlue;
