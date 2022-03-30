import logo from './logo.svg';
import './App.css';
import ControlledCarousel from './components/ControlledCarousel';
import SearchProducts from './components/searchProducts/SearchProducts';




function App() {
  return (
    <div className="App">
      <SearchProducts />
      <ControlledCarousel />
    </div>
  );
}

export default App;
