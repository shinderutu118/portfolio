import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="page">
      <Header />
      <div className="page-content">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
