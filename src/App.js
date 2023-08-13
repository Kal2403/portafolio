import './App.css';
import Home from './containers/Home/Home';
import { About } from './containers/About/About';
import { projects, cardTechData } from './data.js'
import Portfolio from './containers/Portfolio/Portfolio';

const App = () => {

  return (
    <div className="App">
      <Home />
      <Portfolio projects={projects}/>
      <About cardTechData={cardTechData} />
    </div>
  );
}

export default App;
