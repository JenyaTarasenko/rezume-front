import React, { useEffect, useState } from "react";
import {fetchProjects} from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';




 

function CardSection() {
    const [projects, setProjects] = useState([]); // Хук для хранения проектов
    
    useEffect(() => {
        // Получаем данные с API при монтировании компонента
        fetchProjects()
            .then((data) => setProjects(data))
            .catch((error) => console.error("Ошибка при получении данных:", error));
    }, []); // Пустой массив зависимостей, чтобы запрос выполнялся только один раз


      // Функция для обрезки текста до 10 слов
    const truncateText = (text, wordLimit) => {
        const words = text.split(" "); // Разбиваем текст на массив слов
        if (words.length <= wordLimit) return text; // Если слов меньше или равно лимиту, возвращаем текст
        return words.slice(0, wordLimit).join(" ") + "..."; // Берем первые wordLimit слов и добавляем "..."
    };

    return (
        <section className="card-section">
            <div className="card-conteiner">
                {projects.length === 0 ? (
                    <p>Загрузка...</p>
                ) : (
                    projects.map((project) => (
                        <Link to={`/projects/${project.id}`} key={project.id} className="no-link-style" >
                            <div className="glass-card" key={project.id}>
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
                                    <p>{truncateText(project.description, 10)}</p>
                                </div>
                                <div className="card-link">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
                                </div>
                            </div>
                        </Link>    
                    ))
                )}
            </div>
        </section>
    );
}
export default CardSection;