import './App.css';
import Home from './containers/Home/Home';
import { About } from './containers/About/About';
import { projects, cardTechData } from './data.js'
import Portfolio from './containers/Portfolio/Portfolio';
import Contact from './containers/Contact/Contact';
import Nav from './components/Nav/Nav.jsx';
import Footer from './containers/Footer/Footer.jsx';

const App = () => {

  return (
    <div className="App">
      <Nav />
      <section id="home">
        <Home/>
      </section>
      <section id="portfolio">
        <Portfolio projects={projects}/>
      </section>
      <section id="about">
        <About cardTechData={cardTechData} />
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
