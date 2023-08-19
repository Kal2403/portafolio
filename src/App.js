import './App.css';
import Home from './containers/Home/Home';
import { About } from './containers/About/About';
import { projects, cardTechData } from './data.js'
import Portfolio from './containers/Portfolio/Portfolio';
import Contact from './containers/Contact/Contact';
import Footer from './containers/Footer/Footer';

const App = () => {

  return (
    <div className="App">
      <Home />
      <Portfolio projects={projects}/>
      <About cardTechData={cardTechData} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
