import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const uploadImage = async (file: File, token: string) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`${API_URL}/images/upload`, formData, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });

    return response.data;
};

export const fetchImages = async (token: string) => {
    const response = await axios.get(`${API_URL}/images`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });

    return response.data;
};
