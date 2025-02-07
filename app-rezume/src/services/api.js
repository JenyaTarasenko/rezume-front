import axios from "axios";
import BASE_URL from "../config";

const API_BASE_URL = `${BASE_URL}/api/projects/`;


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
     
        return response.data;
    } catch (error) {
        console.error(`Ошибка при получении проекта с id=${id}:`, error);
        throw error;
    }
};