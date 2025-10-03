import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  return (
    <div className="page">
      <Header />
      <div className="page-content">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
