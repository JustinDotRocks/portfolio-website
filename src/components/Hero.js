import React from 'react';
import styled from 'styled-components';

const Hero = () => {
	return (
		<div>
			<Herocontainer>
				<h2>Hero</h2>
			</Herocontainer>
		</div>
	);
};

export default Hero;

const Herocontainer = styled.div`
	background-color: rebeccapurple;
	height: 50em;
	color: white;

	> h2 {
	}
`;
