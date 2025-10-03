import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="page">
      <Header />
      <div className="page-content">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
