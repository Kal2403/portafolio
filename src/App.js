import './App.css';
import Home from './containers/Home/Home';
import { About } from './containers/About/About';
import { projects } from './data.js';
import Portfolio from './containers/Portfolio/Portfolio';
import Contact from './containers/Contact/Contact';
import Nav from './components/Nav/Nav.jsx';
import Footer from './containers/Footer/Footer.jsx';
import { useTheme } from './components/Darkmode/Darkmode.jsx';
import { useEffect } from 'react';

const App = () => {

  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="App">
      <Nav toggleTheme={toggleTheme} darkMode={darkMode}/>
      <section id="home">
        <Home/>
      </section>
      <section id="portfolio">
        <Portfolio projects={projects}/>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
