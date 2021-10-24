import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

import WeatherAppComponent from '../components/Projects/WeatherAppComponent';
import SlackCloneAppComponent from '../components/Projects/SlackCloneAppComponent';
import PostageAppComponent from '../components/Projects/PostageAppComponent';
import MoviesAPIAppComponent from '../components/Projects/MoviesAPIAppComponent';

const ProjectsPage = () => {
	return (
		<div>
			<Navbar />
			<ProjectsContainer>
				<ProjectsHeader>
					<h2>Projects</h2>
				</ProjectsHeader>
				<WeatherAppComponent />
				<SlackCloneAppComponent />
				<PostageAppComponent />
				<MoviesAPIAppComponent />
			</ProjectsContainer>
		</div>
	);
};

export default ProjectsPage;

const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
	width: 100vw;
	height: 100vh;
`;

const ProjectsHeader = styled.div`
	margin-top: 10em;
	margin-bottom: 5em;
	> h2 {
		font-size: 3.5em;
		color: #33658a;
		font-weight: 700;
	}
`;
