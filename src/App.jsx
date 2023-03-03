import './App.css';
import Counterup from './components/Counterup/Counterup.component';
import Courses from './components/Courses/Courses.component';
import Features from './components/Features/Features.component';
import Header from './components/Header/Header.component.jsx'
import Hero from './components/Hero/Hero.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Features/>
      <Courses/>
      <Counterup/>
    </div>
  );
}

export default App;