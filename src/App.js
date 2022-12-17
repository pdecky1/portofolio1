
import './App.css';
import Navbar from './components/NavBar.js';
import HeaderHero from './components/HeaderHero';
import About from './components/About';
import Portofolio from './components/Portofolio';
import JPortofolio from './components/JudulPortofilio';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeaderHero />
      <About />
      <JPortofolio />
      <Portofolio />
      <Footer />
    </div>
  );
}

export default App;
