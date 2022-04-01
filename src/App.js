import logo from './logo.svg';
import './App.css';
import ControlledCarousel from './components/ControlledCarousel';
import HeaderSection from './components/HeaderSection/HeaderSection';




function App() {
  return (
    <div className="App">
      <HeaderSection />
      <ControlledCarousel />
    </div>
  );
}

export default App;
