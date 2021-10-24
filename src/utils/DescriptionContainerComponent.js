import React from 'react';
import styled from 'styled-components';

const DescriptionContainerComponent = () => {
	return (
		<div>
			<DescriptionContainer>
				<p>
					* I started learning HTML and CSS to get started * I started making
					simple components like navbars, headers and info cards. * I then took
					on Sass/Scss for better styling options. * I then started to learn to
					add functionality with the use of JavaScript. * I started creating
					single function apps to better understand JavaScript * I then added
					ReactJS to my skill set and I thoroughly enjoy using React along side
					Styled-Components for styling React Components. * Using
					create-react-app makes it easy, simple and fast to initialize an app
					and get straight to developing and implementing your ideas. * Next I
					learned how to use Redux for state manipulation through Redux Toolkit.
					I found creating slices of state through Toolkit to be easier to
					manage. * I pivoted from Redux to GraphQl next. GraphQL was great for
					communicating between the front and back end of my OnPost App. I
					created the front end using TypeScript, React and then Chakra for
					styling.
				</p>
			</DescriptionContainer>
		</div>
	);
};

export default DescriptionContainerComponent;

const DescriptionContainer = styled.div`
	width: 40vw;
	margin: 3em;

	> p {
		color: #0089aa;
		padding: 2em;
		font-family: 'poppins';
		font-size: 1.3em;
	}
`;
