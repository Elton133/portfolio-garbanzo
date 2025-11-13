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
