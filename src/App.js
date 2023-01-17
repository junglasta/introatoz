import 'bootstrap/dist/css/bootstrap.css';
import Hd from './component/Hd';
import Preinterview from './component/Preinterview';
import Ability from './component/Ability';
import About from './component/About';
import Contact from './component/Contact';
import Thumbimg from './component/Thumbimg';
import Portfolio from './component/Portfolio';
import Ft from './component/Ft';

function App() {
  return (
    <div className="App" id="top">
      <Hd />
      <Ability />
      <About id="about" className='border-top'/>
      <Portfolio id="portfolio" className='border-top bg-dark' title="포트폴리오 멋지지" />
      <Preinterview />
      <Contact id="contact" className='border-top'/>
      <Thumbimg />
      <Ft />
    </div>
  );
}

export default App;
