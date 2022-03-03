import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OtherInfo from './components/OtherInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="dark:bg-[#0b0e11] transition-colors duration-100">
      <Navbar/>
      <Hero/>
      <OtherInfo/>
      <Footer />
    </div>
  );
}

export default App;
