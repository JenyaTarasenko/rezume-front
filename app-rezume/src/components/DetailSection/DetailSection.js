
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjectById } from '../../services/api';
import './style.css'


function DetailSection(){

    const { id } = useParams(); // Получаем id из URL
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProjectById(id)
            .then((data) => {
                setProject(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
            console.log("API URL: ", process.env.REACT_APP_API_URL);
    }, [id]); // id - зависимость, чтобы запрос выполнялся при изменении id

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Произошла ошибка при загрузке данных проекта.</div>;
    }

    if (!project) {
        return <div>Проект не найден.</div>;
    }
    console.log(`${process.env.REACT_APP_API_URL}/media/projects/three.jpg`);
    console.log(`${process.env.REACT_APP_API_URL}/media/projects/three.jpg`);

    return(

        <section className='detail-project'>
            

            <div className='detail-text'>
                <h1>{project.name}</h1>
            </div>
            <div className='detail-description'>
                <h2>{project.description}</h2>
                
                <a href={project.link}><p>Посмотреть проект в сети:<strong>{project.link}</strong></p></a>
            </div>

            <div className='detail-conteiner-image-item'>
                <div className='detail-text-conteiner'>
                    <div className='detail-style-text'>
                        <div className='detail-line'></div>
                        <h5>Какие техи нологии я использовал</h5>
                    </div>
                    
                </div>
                <div className='detail-conteiner-image'>
                    <img src={`http://localhost:8001${project.image_logo}`} />
                    <img src={project.image_logo}/>
                    <img
                        src={`${process.env.REACT_APP_API_URL}/media/projects/${project.image}`}
                        alt={project.name}
                    />
                </div>
            </div>

            <div className='detail-description'>
                <h2>{project.tehnology_project}</h2>
            </div>

            <div class="image-container">
                <img src={`http://localhost:8001${project.image}`} />
                <img src={`${process.env.REACT_APP_API_URL}/media/three.png`} alt="Example" />

            </div>

           
            
        </section>


    );
}
export default DetailSection;