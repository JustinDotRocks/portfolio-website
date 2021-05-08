import Footer from './components/Footer';
import Hero from './components/Hero';
//import InfoScroll from './components/InfoScroll';
import Technologies from './components/Technologies';
import MainProject from './components/MainProject';
import Navbar from './components/Navbar';
import RecentProjects from './components/RecentProjects';
import WebsiteDescription from './components/WebsiteDescription';
import FullStackJourney from './components/FullStackJourney';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<FullStackJourney />
			<MainProject />
			<Technologies />
			<RecentProjects />
			<WebsiteDescription />
			<Footer />
		</div>
	);
}

export default App;
