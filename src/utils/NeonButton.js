import React from 'react';
import styled from 'styled-components';

const NeonButton = ({ title }) => {
	return (
		<div>
			<GlowingButton>{title}</GlowingButton>
		</div>
	);
};

export default NeonButton;

const GlowingButton = styled.a`
	font-size: 1.2em;
	text-decoration: none;
	margin: 1rem;
	//width: 100%;
	padding: 0.25rem;
	background-color: #f26419;
	color: white;
	cursor: pointer;
	border: #f26419 0.225em solid;
	border-radius: 1em;
	padding: 0.25em 1em;
	text-shadow: 0 0 0.25em hsl(0 0% 100% / 0.5), 0 0 0.45em currentColor;
	box-shadow: inset 0 0 0.75em 0 #f26419, 0 0 0.75em 0 #f26419;
	position: relative;

	&:before {
		pointer-events: none; // wont trigger on the bottom shadow now.
		content: '';
		position: absolute;
		background-color: #f26419;
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
		box-shadow: 0 0 2em 0.5em #f26419;
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
