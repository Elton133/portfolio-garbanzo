import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData';

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const navigate = useNavigate();

  const categories = ['All', 'Web design', 'Applications', 'Web development'];

  const handleFilterClick = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

  const handleSelectClick = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleSelectItemClick = (category) => {
    setSelectedCategory(category.toLowerCase());
    setIsSelectOpen(false);
  };

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((category, index) => (
            <li className="filter-item" key={index}>
              <button
                className={selectedCategory === category.toLowerCase() ? 'active' : ''}
                data-filter-btn
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button 
            className={`filter-select ${isSelectOpen ? 'active' : ''}`} 
            data-select
            onClick={handleSelectClick}
          >
            <div className="select-value" data-selecct-value>
              {selectedCategory === 'all' ? 'Select category' : selectedCategory}
            </div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {categories.map((category, index) => (
              <li className="select-item" key={index}>
                <button 
                  data-select-item
                  onClick={() => handleSelectItemClick(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={index}
            >
              <div 
                className="project-link" 
                onClick={() => navigate(`/project/${project.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-category">{project.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Portfolio;
