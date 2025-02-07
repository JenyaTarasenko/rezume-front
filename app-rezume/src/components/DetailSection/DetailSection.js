
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchProjectById } from '../../services/api';
// import './style.css'


// function DetailSection(){

//     const { id } = useParams(); // Получаем id из URL
//     const [project, setProject] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchProjectById(id)
//             .then((data) => {
//                 setProject(data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 setError(error);
//                 setLoading(false);
//             });
            
//     }, [id]); // id - зависимость, чтобы запрос выполнялся при изменении id

//     if (loading) {
//         return <div>Загрузка...</div>;
//     }

//     if (error) {
//         return <div>Произошла ошибка при загрузке данных проекта.</div>;
//     }

//     if (!project) {
//         return <div>Проект не найден.</div>;
//     }


//     return(

//         <section className='detail-project'>
            

//             <div className='detail-text'>
//                 <h1>{project.name}</h1>
//             </div>
//             <div className='detail-description'>
//                 <h2>{project.description}</h2>
                
//                 <a href={project.link}><p>Посмотреть проект в сети:<strong>{project.link}</strong></p></a>
//             </div>

//             <div className='detail-conteiner-image-item'>
//                 <div className='detail-text-conteiner'>
//                     <div className='detail-style-text'>
//                         <div className='detail-line'></div>
//                         <h5>Какие техи нологии я использовал</h5>
//                     </div>
                    
//                 </div>
//                 <div className='detail-conteiner-image'>
//                     <img src={`http://localhost:8001${project.image_logo}`} alt="detail"/>
//                     <img src={project.image_logo}/>
//                     <img
      
//                         alt={project.name}
//                     />
//                 </div>
//             </div>

//             <div className='detail-description'>
//                 <h2>{project.tehnology_project}</h2>
//             </div>

//             <div class="image-container">
//                 <img src={`http://localhost:8001${project.image}`} alt="detail"/>
               

//             </div>

           
            
//         </section>


//     );
// }
// export default DetailSection;
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './style.css';

const ProjectDetail = () => {
  const { id } = useParams(); // Получаем id из URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jenyadevelop.pythonanywhere.com/api/projects/${id}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка загрузки данных');
        }
        return response.json();
      })
      .then(data => {
        setProject(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка:', error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;
  if (!project) return <div>Проект не найден</div>;

  return (
    <div className="detail-container">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>1</p><img src={`https://jenyadevelop.pythonanywhere.com/api/projects/${project.image}`} alt="detail" className="project-image" />
      
      {project.link && (
        <p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Перейти на сайт проекта
          </a>
          <p>2</p><img src={`https://jenyadevelop.pythonanywhere.com${project.image}`} alt="detail" className="project-image" />

          <p>3</p>  <img src={project.image} alt={project.name} className="project-image" />
          <p>4</p> <img src={project.image_logo} alt={project.name} className="project-image" />
        </p>
      )}
      <Link to="/">Назад к списку проектов</Link>
    </div>
  );
};

export default ProjectDetail;
