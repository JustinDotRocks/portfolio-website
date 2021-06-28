import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import FrontEndTechnology from '../components/FrontEndTechnology';
import BackEndTechnology from '../components/BackEndTechnology';
import DevOpsTechnology from '../components/DevOpsTechnology';
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
