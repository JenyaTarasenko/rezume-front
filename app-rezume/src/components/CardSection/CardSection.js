// import React, { useEffect, useState } from "react";
import {fetchProjects} from '../../services/api';
// import './style.css';
// import { Link } from 'react-router-dom';


  // useEffect(() => {
  //   fetch(`${BASE_URL}/api/projects/`)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       setProjects(data);  
  //       setLoading(false);   
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //       setError(error);    
  //       setLoading(false);   
  //     });
  // }, []);  
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';





const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(()=>{
  fetchProjects()
    .then(data=>{
      setProjects(data);
      setLoading(false);
    })
    .catch(error=>{

      setError(error);
      setLoading(false);
    });

},[]);
  
  

  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.slice(0, length) + '...';
    }
    return text;
  };

  if (loading) {
    return <div>Загрузка...</div>;  // Пока загружаются данные
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;  // Если произошла ошибка
  }

  return (
    <section className="card-section">
      <div className="card-conteiner">
        {projects.length === 0 ? (
          <p>Нет проектов для отображения</p>
        ) : (
          projects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="no-link-style">
              <div className="glass-card">
                <div className="card-logo">
                  {/* Вы можете заменить это на свой логотип */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <div className="card-description">
                  <h5>{project.name}</h5>
                </div>
                <div className="card-items">
                  <p>{truncateText(project.description, 100)}</p>
                </div>
                <div className="card-link">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Перейти на проект
                    </a>
                  )}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
