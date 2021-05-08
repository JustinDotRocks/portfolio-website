import React from 'react';
import styled from 'styled-components';

const InfoScroll = () => {
	return (
		<div>
			<InfoScrollContainer>InfoScroll</InfoScrollContainer>
		</div>
	);
};

export default InfoScroll;

const InfoScrollContainer = styled.div`
	background-color: blue;
	height: 20em;
	color: white;
`;
