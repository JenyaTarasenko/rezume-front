// В файле ProjectDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjectById } from '../../services/api';

function ProjectDetail() {
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

    return (
        <div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                Перейти по ссылке
            </a>
        </div>
    );
}

export default ProjectDetail;
