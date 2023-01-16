import 'bootstrap/dist/css/bootstrap.css';
import Navi from './component/Navi';
import Portfolio from './component/Portfolio';

function App() {
  return (
    <div>
      <Navi />
      <section style={{height:"100vh"}} id="" className='border-top'></section>
      <section style={{height:"100vh"}} id="about" className='border-top bg-dark'></section>
      <Portfolio id="portfolio" title="포트폴리오 멋지지" />
      <section style={{height:"100vh"}} id="contact" className='border-top'></section>
    </div>
  );
}

export default App;
