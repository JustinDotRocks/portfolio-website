import Footer from './components/Footer';
import Hero from './components/Hero';
import MainProject from './components/MainProject';
import Navbar from './components/Navbar';
import RecentProjects from './components/RecentProjects';
import WebsiteDescription from './components/WebsiteDescription';
import FrontEndTechnology from './components/FrontEndTechnology';
import BackEndTechnology from './components/BackEndTechnology';
import DevOpsTechnology from './components/DevOpsTechnology';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<FrontEndTechnology />
			<BackEndTechnology />
			<DevOpsTechnology />
			<MainProject />
			<RecentProjects />
			<WebsiteDescription />
			<Footer />
		</div>
	);
}

export default App;
