import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMePage from './pages/AboutMePage';
import ContactMePage from './pages/ContactMePage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import HomePage from './pages/HomePage';

export default function Routes() {
	return (
		<Router>
			<div>
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/about-me">
						<AboutMePage />
					</Route>
					<Route path="/contact-me">
						<ContactMePage />
					</Route>
					<Route path="/projects">
						<ProjectsPage />
					</Route>
					<Route path="/resume">
						<ResumePage />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
