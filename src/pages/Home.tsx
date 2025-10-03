import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import About from '../components/About';

const Home = () => {
  return (
    <div className="page">
      <Header />
    
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
            <Footer />

    </div>
  );
};

export default Home;
