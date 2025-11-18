import { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './style.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';
import { Helmet } from 'react-helmet';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Derive active page from location
  const getActivePage = () => {
    const path = location.pathname;
    if (path.startsWith('/project/')) {
      return 'portfolio';
    } else if (path === '/') {
      return 'about';
    } else {
      const page = path.substring(1);
      return page || 'about';
    }
  };

  const [activePage, setActivePage] = useState(getActivePage());

  const handlePageChange = (page) => {
    setActivePage(page);
    navigate(`/${page === 'about' ? '' : page}`);
  };

  return (
    <main>
      <Helmet>
        <title>Elton John Morden — Software Engineer & Cloud Practitioner</title>
        <meta
          name="description"
          content="Portfolio of Elton John Morden, a Software Engineer and AWS Cloud Practitioner from Ghana."
        />
        <meta property="og:title" content="Elton John Morden — Software Engineer" />
        <meta property="og:description" content="Explore my work, projects and experience." />
        <meta property="og:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />

        <script type="application/ld+json">
      {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Elton John Morden",
        "jobTitle": "Software Engineer & AWS Cloud Practitioner",
        "url": "https://eltonmorden.me",
        "sameAs": [
          "https://linkedin.com/in/eltonmorden",
          "https://github.com/Elton133",
        ]
      }
    `}
  </script>
      </Helmet>
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={handlePageChange} />
        
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
