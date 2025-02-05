import axios from "axios";

const API_BASE_URL =  process.env.REACT_APP_API_URL || "http://127.0.0.1:8001/api/projects/";

export const fetchProjects = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;  // Возвращаем полученные данные
    } catch (error) {
        console.error("Ошибка при получении проектов:", error);
        throw error;
    }
};



// Новый метод для получения одного проекта по id
export const fetchProjectById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}${id}/`);
        // const response = await fetch(`${API_BASE_URL}/api/projects/${id}/`);
        return response.data;
    } catch (error) {
        console.error(`Ошибка при получении проекта с id=${id}:`, error);
        throw error;
    }
};