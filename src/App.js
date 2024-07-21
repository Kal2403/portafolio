import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/portfolio' element={<Portfolio projects={projects}/>} />
          <Route path='/about' element={<About cardTechData={cardTechData} />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
