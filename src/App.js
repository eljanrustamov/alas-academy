import './App.css';
import Features from './components/Features/Features.component';
import Header from './components/Header/Header.component.jsx'
import Hero from './components/Hero/Hero.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Features/>
    </div>
  );
}

export default App;
