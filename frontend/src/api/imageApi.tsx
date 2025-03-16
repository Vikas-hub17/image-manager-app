import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export interface ImageData {
    url: string;
    description?: string;
}

export const uploadImage = async (formData: FormData) => {
    return await axios.post(`${API_BASE_URL}/images/upload`, formData);
};

export const getImages = async (page: number = 1, limit: number = 6): Promise<{ images: ImageData[], totalPages: number }> => {
    const response = await axios.get(`${API_BASE_URL}/images/list?page=${page}&limit=${limit}`);
    return response.data;
};

export const analyzeImage = async (imageUrl: string) => {
    const response = await axios.post(`${API_BASE_URL}/images/analyze`, { imageUrl });
    return response.data.description;
};
