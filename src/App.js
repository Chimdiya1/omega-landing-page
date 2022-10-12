import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Nav from './components/Nav/Nav';
import StakingPools from './components/StakingPools/StakingPools';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <HowItWorks/>
      <StakingPools/>
      <Footer/>
    </div>
  );
}

export default App;
