import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import FrontEndTechnology from '../components/Technologies/FrontEndTechnology';
import BackEndTechnology from '../components/Technologies/BackEndTechnology';
import DevOpsTechnology from '../components/Technologies/DevOpsTechnology';
import ProjectsComponent from '../components/ProjectsComponent';

function HomePage() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<FrontEndTechnology />
			<BackEndTechnology />
			<DevOpsTechnology />
			<ProjectsComponent />
			<Footer />
		</div>
	);
}

export default HomePage;
