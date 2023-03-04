import './App.css';
import About from './components/About/About.component';
import Counterup from './components/Counterup/Counterup.component';
import Courses from './components/Courses/Courses.component';
import CtaArea from './components/CtaArea/CtaArea.component';
import Features from './components/Features/Features.component';
import Footer from './components/Footer/Footer.component';
import Header from './components/Header/Header.component.jsx'
import Hero from './components/Hero/Hero.component';
import Partners from './components/Partners/Partners.component';
import Team from './components/Team/Team.component';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Features/>
      <Partners/>
      <Courses/>
      <Counterup/>
      <Team/>
      <CtaArea/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;