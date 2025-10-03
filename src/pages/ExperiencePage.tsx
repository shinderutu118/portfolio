import Header from '../components/Header';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

const ExperiencePage = () => {
  return (
    <div className="page">
      <Header />
      <div className="page-content">
        <Experience />
      </div>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
