import logo from './logo.svg';
import './App.css';
import ControlledCarousel from './components/ControlledCarousel';
import SearchProducts from './components/SearchProducts';




function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <ControlledCarousel />
      <SearchProducts />
    </div>
  );
}

export default App;
