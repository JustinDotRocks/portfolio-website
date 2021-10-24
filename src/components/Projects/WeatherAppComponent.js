import React from 'react';
import styled from 'styled-components';

// import { Redirect } from 'react-router-dom';

// import DescriptionContainerComponent from '../../utils/DescriptionContainerComponent';
import NeonButtonALink from '../../utils/NeonButtonALink';

import { Javascript } from '@styled-icons/fluentui-system-filled/Javascript';
// import { Html5 } from '@styled-icons/boxicons-logos/Html5';
import { Css3 } from '@styled-icons/boxicons-logos/Css3';
import { Heroku } from '@styled-icons/simple-icons/Heroku';
import { Express } from '@styled-icons/simple-icons/Express';
import { Git } from '@styled-icons/boxicons-logos/Git';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Yarn } from '@styled-icons/simple-icons/Yarn';

const ProjectComponent = () => {
	return (
		<div>
			<ProjectComponentContainer>
				<ProjectTextContainer>
					<ProjectHeader>Weathering</ProjectHeader>
					<ProjectDescriptionContainer>
						<p>
							Check the current weather in your area! <br />
							Search for your location by city, town, address, postal or zip
							code and more! <br />
							<br />
							Uses NodeJS along with ExpressJS, JavaScript, Handlebars Css and
							is deployed with Heroku. <br />
							Check out more on the About page of Weathering.
							<br />
						</p>
					</ProjectDescriptionContainer>
					<NeonButtonALinkContainer>
						<NeonButtonALink href="https://jsmith-weather-application.herokuapp.com/">
							Try Weathering
						</NeonButtonALink>
					</NeonButtonALinkContainer>
				</ProjectTextContainer>
				<TechnologiesBlockContainer>
					<div className="position-1-icon">
						<JavascriptIconContainer />
					</div>
					{/* <div className="position-2-icon"></div> */}
					<div className="position-8-icon">
						<HandlebarsIconContainer>
							<svg class="about-svg" viewBox="0 0 128 128">
								<g data-name="handlebars">
									<path d="M6.53 41.21v4.5a6.47 6.47 0 011.13-1.05 4 4 0 011.22-.58 5.1 5.1 0 011.43-.19 4.21 4.21 0 012 .49A3.79 3.79 0 0114.19 47a9.57 9.57 0 01.11 1.55v5.81a2 2 0 01-.42 1.38 1.41 1.41 0 01-1.1.47q-1.5 0-1.5-1.84v-5.13a4.69 4.69 0 00-.43-2.24 1.71 1.71 0 00-1.64-.78 2.46 2.46 0 00-1.46.46 2.78 2.78 0 00-1 1.26 8.09 8.09 0 00-.24 2.41v4a2 2 0 01-.41 1.37 1.4 1.4 0 01-1.1.48q-1.5 0-1.5-1.84V41.21a2.08 2.08 0 01.39-1.38A1.38 1.38 0 015 39.37a1.41 1.41 0 011.13.47 2 2 0 01.4 1.37zM25 54.49a9.37 9.37 0 01-2.13 1.28 6 6 0 01-2.3.43 4.36 4.36 0 01-2-.46 3.37 3.37 0 01-1.36-1.25 3.24 3.24 0 01-.48-1.71 3.06 3.06 0 01.79-2.12 3.94 3.94 0 012.16-1.18l1.43-.3q1.14-.23 2-.43t1.77-.47a3.17 3.17 0 00-.48-1.76 2.16 2.16 0 00-1.89-.52 3.69 3.69 0 00-1.74.32 2.84 2.84 0 00-1 1q-.42.64-.59.85a1 1 0 01-.74.21 1.29 1.29 0 01-.88-.33 1.07 1.07 0 01-.37-.84 2.57 2.57 0 01.57-1.55 4.05 4.05 0 011.77-1.24 8 8 0 013-.49 8.46 8.46 0 013.14.47 2.93 2.93 0 011.62 1.49 6.53 6.53 0 01.47 2.71v3.46a6.1 6.1 0 00.24 1.71 5.64 5.64 0 01.28 1.23 1.12 1.12 0 01-.44.85 1.47 1.47 0 01-1 .38 1.34 1.34 0 01-.92-.44 6.46 6.46 0 01-.92-1.3zm-.2-4.38a15.3 15.3 0 01-1.94.52q-1.27.27-1.76.4a2.4 2.4 0 00-.93.5 1.28 1.28 0 00-.44 1 1.54 1.54 0 00.52 1.17 1.93 1.93 0 001.37.48 3.55 3.55 0 001.66-.39 2.63 2.63 0 001.12-1 4.64 4.64 0 00.41-2.26zM33.57 45.55v.37a5.31 5.31 0 011.75-1.55 4.66 4.66 0 012.18-.49 4.35 4.35 0 012.14.52A3.31 3.31 0 0141 45.88a3.51 3.51 0 01.39 1.2 12.36 12.36 0 01.09 1.64v5.64a2 2 0 01-.42 1.38 1.5 1.5 0 01-2.18 0 2 2 0 01-.42-1.37v-5.06a5.05 5.05 0 00-.37-2.31 1.7 1.7 0 00-1.66-.79 2.46 2.46 0 00-1.43.49 2.78 2.78 0 00-1 1.3 9.48 9.48 0 00-.22 2.53v3.8a2 2 0 01-.43 1.38 1.44 1.44 0 01-1.1.46 1.37 1.37 0 01-1.08-.48 2 2 0 01-.42-1.37V45.6a1.91 1.91 0 01.38-1.29 1.31 1.31 0 011-.43 1.4 1.4 0 01.72.19 1.35 1.35 0 01.52.57 2 2 0 01.2.91zM52.85 54.47v-.3a7.71 7.71 0 01-1.2 1.14 4.53 4.53 0 01-1.29.67 4.84 4.84 0 01-1.52.23 4.47 4.47 0 01-2-.46 4.7 4.7 0 01-1.6-1.32 6 6 0 01-1-2 8.57 8.57 0 01-.35-2.5 6.51 6.51 0 011.39-4.43 4.61 4.61 0 013.65-1.59 4.91 4.91 0 012.21.45 6.17 6.17 0 011.75 1.38v-4.48a2.26 2.26 0 01.37-1.41 1.27 1.27 0 011.06-.48 1.31 1.31 0 011.06.44 2 2 0 01.37 1.29v13.37a1.86 1.86 0 01-.4 1.3 1.34 1.34 0 01-1 .43 1.32 1.32 0 01-1-.45 1.85 1.85 0 01-.5-1.28zm-6-4.45a5.16 5.16 0 00.38 2.1 2.92 2.92 0 001 1.3 2.59 2.59 0 001.45.44 2.68 2.68 0 001.46-.42 2.86 2.86 0 001.05-1.28 5.16 5.16 0 00.49-2.16 5 5 0 00-.39-2.08 3.13 3.13 0 00-1.07-1.33 2.55 2.55 0 00-1.47-.46 2.48 2.48 0 00-1.49.47 3 3 0 00-1 1.35 5.39 5.39 0 00-.37 2.05zM58.75 54.36V41.21a2 2 0 01.41-1.38 1.37 1.37 0 011.09-.47 1.43 1.43 0 011.11.46 2 2 0 01.42 1.38v13.16a2 2 0 01-.43 1.38 1.44 1.44 0 01-1.1.46 1.37 1.37 0 01-1.08-.48 2 2 0 01-.42-1.36zM73.38 50.78h-5.93a4 4 0 00.42 1.82 2.78 2.78 0 002.56 1.59 3.64 3.64 0 001-.13 3.23 3.23 0 00.87-.4 6.6 6.6 0 00.78-.58q.36-.31.92-.84a1 1 0 01.67-.2 1.1 1.1 0 01.75.26.91.91 0 01.29.72 2 2 0 01-.32 1 3.81 3.81 0 01-1 1.05 5.51 5.51 0 01-1.63.84 7 7 0 01-2.26.33 6 6 0 01-4.5-1.71A6.2 6.2 0 0164.35 50a7.53 7.53 0 01.4-2.49 5.5 5.5 0 011.17-2 5.06 5.06 0 011.89-1.26 6.77 6.77 0 012.49-.44 5.9 5.9 0 013 .75 4.93 4.93 0 011.9 1.94 5.1 5.1 0 01.67 2.5q0 1.14-.65 1.48a4.08 4.08 0 01-1.84.3zm-5.93-1.72h5.5a3.68 3.68 0 00-.84-2.33 2.51 2.51 0 00-1.92-.73 2.43 2.43 0 00-1.86.78 3.9 3.9 0 00-.88 2.28zM80.92 41.1v4.63a7 7 0 011.74-1.36 4.65 4.65 0 012.2-.47 4.86 4.86 0 012.65.72 4.7 4.7 0 011.77 2.08 7.64 7.64 0 01.63 3.22 8.63 8.63 0 01-.35 2.53 6 6 0 01-1 2 4.59 4.59 0 01-1.62 1.3 4.73 4.73 0 01-2.09.46 5 5 0 01-1.33-.21 3.83 3.83 0 01-1-.44 4.7 4.7 0 01-.74-.56q-.31-.29-.8-.87v.3a1.83 1.83 0 01-.41 1.29 1.37 1.37 0 01-1 .44 1.3 1.3 0 01-1-.44 1.92 1.92 0 01-.38-1.29V41.24a2.22 2.22 0 01.37-1.39 1.25 1.25 0 011-.47 1.33 1.33 0 011.08.45 1.94 1.94 0 01.28 1.27zm.14 9a4.17 4.17 0 00.83 2.78 2.71 2.71 0 002.17 1 2.49 2.49 0 002-1 4.34 4.34 0 00.8-2.88 5.58 5.58 0 00-.34-2 3 3 0 00-1-1.34 2.4 2.4 0 00-1.48-.47 2.63 2.63 0 00-1.54.47A3.14 3.14 0 0081.46 48a5.31 5.31 0 00-.39 2.11zM100 54.49a9.37 9.37 0 01-2.13 1.28 6 6 0 01-2.3.43 4.36 4.36 0 01-2-.46 3.37 3.37 0 01-1.36-1.25 3.24 3.24 0 01-.48-1.71 3.06 3.06 0 01.79-2.12 3.94 3.94 0 012.16-1.18l1.43-.3q1.14-.23 2-.43t1.77-.47a3.17 3.17 0 00-.48-1.76 2.16 2.16 0 00-1.86-.52 3.69 3.69 0 00-1.74.32 2.84 2.84 0 00-1 1q-.42.64-.59.85a1 1 0 01-.74.21 1.29 1.29 0 01-.87-.38 1.07 1.07 0 01-.37-.84 2.57 2.57 0 01.57-1.55 4.05 4.05 0 011.77-1.24 8 8 0 013-.49 8.46 8.46 0 013.14.47 2.93 2.93 0 011.62 1.49 6.53 6.53 0 01.47 2.71v3.46a6.1 6.1 0 00.28 1.78 5.64 5.64 0 01.28 1.19 1.12 1.12 0 01-.44.85 1.47 1.47 0 01-1 .38 1.34 1.34 0 01-.92-.44 6.46 6.46 0 01-1-1.28zm-.2-4.38a15.3 15.3 0 01-1.94.52q-1.27.27-1.76.4a2.4 2.4 0 00-.93.5 1.28 1.28 0 00-.44 1 1.54 1.54 0 00.52 1.17 1.93 1.93 0 001.37.48 3.55 3.55 0 001.66-.39 2.63 2.63 0 001.12-1 4.64 4.64 0 00.41-2.26zM108.85 51.83v2.53a2 2 0 01-.43 1.38 1.44 1.44 0 01-1.1.46 1.39 1.39 0 01-1.08-.47 2 2 0 01-.42-1.38v-8.43q0-2 1.48-2a1.23 1.23 0 011.09.48 2.62 2.62 0 01.37 1.41 5.31 5.31 0 011.12-1.41 2.3 2.3 0 011.53-.48 3.9 3.9 0 011.85.48 1.43 1.43 0 01.9 1.27 1.2 1.2 0 01-.38.92 1.19 1.19 0 01-.83.36 3.81 3.81 0 01-.8-.21 3.74 3.74 0 00-1.13-.21 1.65 1.65 0 00-1.09.35 2.24 2.24 0 00-.66 1 7.22 7.22 0 00-.32 1.64q-.1.94-.1 2.31zM125 52.24a3.51 3.51 0 01-2.42 3.5 8.08 8.08 0 01-2.9.46 7.08 7.08 0 01-2.8-.5 4.07 4.07 0 01-1.72-1.25 2.52 2.52 0 01-.55-1.5 1.17 1.17 0 01.35-.85 1.22 1.22 0 01.9-.35 1 1 0 01.73.23 2.57 2.57 0 01.49.66 3.32 3.32 0 001.12 1.21 3.37 3.37 0 001.77.4 2.56 2.56 0 001.49-.41 1.14 1.14 0 00.58-.93 1.26 1.26 0 00-.61-1.17 7.49 7.49 0 00-2-.7 16.46 16.46 0 01-2.55-.82 4.18 4.18 0 01-1.57-1.13 2.58 2.58 0 01-.59-1.72 3 3 0 01.54-1.72 3.73 3.73 0 011.6-1.29 6.14 6.14 0 012.56-.48 8.41 8.41 0 012.11.24 5.27 5.27 0 011.57.66 3.24 3.24 0 011 .91 1.78 1.78 0 01.33 1 1.13 1.13 0 01-.35.85 1.38 1.38 0 01-1 .33 1.22 1.22 0 01-.79-.27 5.23 5.23 0 01-.75-.8 2.75 2.75 0 00-.81-.71 2.55 2.55 0 00-1.27-.27 2.48 2.48 0 00-1.37.35 1 1 0 00-.54.87.94.94 0 00.4.78 3.31 3.31 0 001.08.5q.68.2 1.86.49a10 10 0 012.3.82 3.83 3.83 0 011.35 1.13 2.5 2.5 0 01.46 1.48z"></path>
								</g>
								<path d="M30.95 80.31a4.85 4.85 0 001.57-2.37 2.8 2.8 0 00-1.57-3.6c-4.6-2.33-7.57 1.82-8 2.79s-1.19 2.5-.71 6 2.17 6.73 7.45 8a22.37 22.37 0 0015-1.75c4.66-2.22 13.4-6.12 15.61-6.51a19.14 19.14 0 014.41-.55V77a12.21 12.21 0 00-11.82-6.22c-8.43.66-11.78 5-13.83 6.86s-5.86 6.24-8.41 5.47-3.27-3.92-2.37-4.89 1.61-.8 2.17 0a4.24 4.24 0 01.5 2.09z"></path>
								<path d="M98.17 80.31a4.85 4.85 0 01-1.57-2.37 2.8 2.8 0 011.57-3.6c4.6-2.33 7.57 1.82 8 2.79s1.19 2.5.71 6-2.17 6.73-7.45 8a22.37 22.37 0 01-15-1.75c-4.66-2.22-13.4-6.12-15.61-6.51a19.14 19.14 0 00-4.41-.55V77a12.21 12.21 0 0111.82-6.22c8.43.66 11.78 5 13.83 6.86s5.86 6.24 8.41 5.47 3.27-3.92 2.37-4.89-1.61-.8-2.17 0a4.24 4.24 0 00-.5 2.09z"></path>
							</svg>
						</HandlebarsIconContainer>
					</div>
					<div className="position-4-icon">
						<Css3IconContainer />
					</div>
					<div className="position-18-icon">
						<GithubIconContainer />
					</div>
					<div className="position-12-icon">
						<GitIconContainer />
					</div>
					<div className="position-16-icon">
						<YarnIconContainer />
					</div>
					{/* <div className="position-5-icon"></div> */}
					{/* <div className="position-6-icon"></div> */}
					{/* <div className="position-7-icon">
						<StyledComponentsIconContainer />
					</div> */}
					{/* <div className="position-8-icon">
						<ReactIconContainer />
					</div> */}
					{/* <div className="position-9-icon"></div> */}
					<div className="position-10-icon">
						<HerokuIconContainer>
							<svg class="about-svg" viewBox="0 0 128 128">
								<path
									d="M39.3 89h53.3c4.6 0 8.3-3.7 8.3-8.3V10.3c0-4.6-3.7-8.3-8.3-8.3H39.3C34.7 2 31 5.7 31 10.3v70.3c0 4.7 3.7 8.4 8.3 8.4zm38.2-75h10.8s-1.8 5-7.5 12H70.4c3.7-4 7.1-12 7.1-12zM57 13.6v20.7s27-10.8 27 8.2V77h-8.8l-.2.1V42.3s2.3-8.3-27.8 3.4c-.1.1-.1-32.1-.1-32.1H57zM47 57.2l9.9 9.9L47 77V57.2zm-11.7 45.6c-4 0-7.3.5-9.7 1.4-.9 3.2-1.3 6.6-1.3 10.4 0 7 1.2 11.3 9.2 11.3 3.7 0 6.8-1.1 9.3-2.3L42 120c-2.4.9-5.5 1.7-8.2 1.7-3.5 0-4.6-.9-4.8-6.9h15v-2.2c0-6.1-2.2-9.8-8.7-9.8zM29 112c.1-3 .3-3.8.5-4.7 1.9-.4 4.1-.4 5.6-.4 3.3 0 3.9 2.1 3.9 5.1H29zm-15.1-9.2c-2.7 0-4.9.7-7.9 1.5V94H2v31h4v-16.6c3-1 5-1.5 7-1.5 1 0 2 .5 2 1.7v16.9l.4-.4H20v-15.8c0-3.8-1.8-6.5-6.1-6.5zm108.1.2v17.4c-3 1-5.6 1.5-7.7 1.5-1 0-2.3-.5-2.3-1.7V103h-4v16.7c0 3.7 1.3 6.3 5.6 6.3 2.7 0 7.4-.4 12.4-3.5V103h-4zm-18.2 0h-5.4c-1.3 3-3.2 7-5.6 9H91V94h-5v31h5v-10h2.1c2.8 3 4.6 7 6 10h5.6c-2.1-4-4.5-8.4-7.7-12.4 2.6-2.7 5-5.6 6.8-9.6zM48 125h4v-16.6c2-.8 5-1.1 7-1.2v-4c-3 .2-7 .9-11 3.1V125zm23.4-22.2c-6.1 0-10.3 3.2-10.3 11.7 0 8 3.2 11.5 10.3 11.5 6.1 0 10.3-3.2 10.3-11.7 0-8-3.2-11.5-10.3-11.5zm0 19.2c-4 0-5.7-1.4-5.7-7.5 0-5.6 2-7.7 5.7-7.7 4 0 5.7 1.4 5.7 7.5-.1 5.6-2.1 7.7-5.7 7.7z"
									fill="#6762A6"></path>
							</svg>
						</HerokuIconContainer>
					</div>
					{/* <div className="position-11-icon">
						<SassIconContainer />
					</div> */}
					{/* <div className="position-12-icon"></div>
					<div className="position-13-icon"></div> */}
					{/* <div className="position-14-icon">
						<Html5IconContainer />
					</div> */}
					{/* <div className="position-15-icon"></div>
					<div className="position-16-icon"></div> */}
					<div className="position-14-icon">
						<ExpressIconContainer />
					</div>
					{/* <div className="position-18-icon"></div>
					<div className="position-19-icon"></div> */}
					<div className="position-20-icon">
						<NodeIconContainer>
							<svg class="about-svg" viewBox="0 0 128 128">
								<path
									fill="#83CD29"
									d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209a.261.261 0 00.246 0l7.937-4.581a.248.248 0 00.122-.215v-9.16a.256.256 0 00-.123-.219l-7.934-4.577a.254.254 0 00-.245 0l-7.933 4.578a.259.259 0 00-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198a1.676 1.676 0 01-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587a1.743 1.743 0 011.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16a1.68 1.68 0 01-.833 1.448l-7.937 4.582a1.651 1.651 0 01-.834.223m2.453-6.311c-3.475 0-4.202-1.595-4.202-2.932a.23.23 0 01.23-.229h1.026a.23.23 0 01.228.194c.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777a.235.235 0 01-.06.176.236.236 0 01-.168.073h-1.031a.228.228 0 01-.223-.179c-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"></path>
								<path
									fill="#404137"
									d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856a1.017 1.017 0 00-1.019-.002l-8.416 4.859a1.018 1.018 0 00-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812a.508.508 0 00.006-.885l-8.468-4.86a.507.507 0 01-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52a.505.505 0 01.507 0l2.637 1.52a.507.507 0 01.255.439v2.396a.507.507 0 00.764.44l5.039-2.932"></path>
								<path
									fill="#83CD29"
									d="M88.984 67.974a.2.2 0 01.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932a.194.194 0 01-.195 0l-1.614-.932a.194.194 0 01-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"></path>
								<path
									fill="#404137"
									d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666a.251.251 0 01-.254 0l-2.89-1.666a.255.255 0 01-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668a.248.248 0 01.255 0l2.891 1.668a.258.258 0 01.126.221v3.338zm.781-24.716a.511.511 0 00-.756.444v12.915a.359.359 0 01-.177.308.359.359 0 01-.356 0l-2.108-1.215a1.017 1.017 0 00-1.015 0l-8.418 4.858a1.018 1.018 0 00-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861a1.02 1.02 0 00.508-.881V50.821c0-.368-.2-.708-.521-.888l-5.011-2.795"></path>
								<path
									fill="#83CD29"
									d="M38.238 59.407a1.014 1.014 0 011.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861a1.02 1.02 0 01-1.017 0l-8.415-4.861a1.02 1.02 0 01-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"></path>
								<path
									fill="#404137"
									d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843a.99.99 0 00-.464-.133h-.087a.993.993 0 00-.464.133l-8.416 4.843a1.02 1.02 0 00-.509.883l.018 13.04c0 .182.095.351.254.439a.487.487 0 00.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226a.994.994 0 01.508-.137c.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864a.508.508 0 00.76-.439l.019-13.04"></path>
							</svg>
						</NodeIconContainer>
					</div>
				</TechnologiesBlockContainer>
			</ProjectComponentContainer>
		</div>
	);
};

export default ProjectComponent;

const ProjectComponentContainer = styled.div`
	display: flex;

	@media (max-width: 550px) {
		flex-direction: column;
	}
`;

const ProjectTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 6.5em;
`;

const ProjectHeader = styled.h2`
	color: #f26419;
	font-size: 3em;

	@media (max-width: 800px) {
		font-size: 2.2em;
	}
`;

const ProjectDescriptionContainer = styled.div`
	width: 40vw;
	/* margin: 3em; */
	@media (max-width: 550px) {
		width: 70vw;
	}
	> p {
		color: #0089aa;
		padding: 2em;
		font-family: 'poppins';
		font-size: 1.3em;

		@media (max-width: 800px) {
			font-size: 1.1em;
		}
	}
`;

const NeonButtonALinkContainer = styled.div``;

const HerokuIconContainer = styled(Heroku)`
	width: 3.5em;
	height: 3.5em;
	color: #6762a6;
`;

const NodeIconContainer = styled.div`
	width: 4em;
	height: 4em;
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
	width: 4em;
	height: 4em;
	${Yarn} {
		color: #238bba;
	}
`;

const JavascriptIconContainer = styled(Javascript)`
	${Javascript} {
		color: #f4dc3c;
	}
`;

const ExpressIconContainer = styled(Express)`
	${Express} {
		color: black;
	}
`;

const HandlebarsIconContainer = styled.div`
	color: black;
	width: 4.5em;
	height: 4.5em;
`;

const Css3IconContainer = styled(Css3)`
	${Css3} {
		color: #1373b4;
	}
`;
const TechnologiesBlockContainer = styled.div`
	position: relative;
	width: 40vw;
	height: 55vh;
	margin: 5em 4em 12em 5em;

	@media (max-width: 800px) {
		margin: 5em 6em 12em 2em;
	}

	@media (max-width: 550px) {
		width: 70vw;
	}

	> .position-1-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		top: -5%;
		left: -5%;
		/* margin: 3em 0px 0px 2em; */

		z-index: 2;

		/* > svg {
			width: 4em;
			height: 4em;

			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		} */

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-2-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		top: -5%;
		left: 20%;
		/* margin: 1em 0px 0px 12.5em; */

		z-index: 2;

		/* > svg {
			width: 4em;
			height: 4em;

			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		} */

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-3-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;

		top: -5%;
		left: 45%;
		/* margin: 3em 0px 0px 23em; */

		z-index: 2;

		/* > svg {
			width: 4em;
			height: 4em;
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		} */

		@media (max-width: 600px) {
			width: 3em;
			height: 3em;
		}
	}

	> .position-4-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		top: -5%;
		left: 70%;
		/* margin: 13em 0px 0px 2em; */

		z-index: 2;

		/* > svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		} */

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-5-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		top: -5%;
		left: 95%;
		/* margin: 12.5em 0px 0px 12.5em; */

		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-6-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		top: 27.5%;
		left: -5%;
		/* margin: 13em 0px 0px 23em; */

		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-7-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		top: 27.5%;
		left: 20%;
		/* margin: 22em 0px 0px 2em; */

		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-8-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		top: 27.5%;
		left: 45%;
		/* margin: 24em 0px 0px 12.5em; */

		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-9-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 27.5%;
		left: 70%;
		/* margin: 22em 0px 0px 23em; */
		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-10-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 27.5%;
		left: 95%;
		/* margin: 28em 0px 0px 29em; */
		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-11-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 62.5%;
		left: -5%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-12-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 62.5%;
		left: 20%;
		/* margin: -4em 0px 0px 27em; */
		z-index: 2;

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-13-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 62.5%;
		left: 45%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-14-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 62.5%;
		left: 70%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-15-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 62.5%;
		left: 95%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-16-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 95%;
		left: -5%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		> svg {
			@media (max-width: 600px) {
				width: 3em;
				height: 3em;
			}
		}

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-17-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 95%;
		left: 20%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-18-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 95%;
		left: 45%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-19-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 95%;
		left: 70%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}

	> .position-20-icon {
		border: 1px solid transparent;
		width: 5em;
		height: 5em;
		border-radius: 250px;
		background-color: white;
		box-shadow: 1px 1px 12px 1px rgba(0, 0, 255, 0.1);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 95%;
		left: 95%;
		/* margin: 13em 0px 0px 35em; */
		z-index: 2;

		@media (max-width: 600px) {
			width: 4em;
			height: 4em;
		}
	}
`;
