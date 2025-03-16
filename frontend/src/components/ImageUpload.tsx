import React, { useState } from 'react';
import { uploadImage } from '../services/api';
import { ImageContainer, UploadButton, ImageDescription } from '../styles/ImageStyles';

interface ImageUploadProps {
    token: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ token }) => {
    const [file, setFile] = useState<File | null>(null);
    const [description, setDescription] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) return alert("Please select a file first.");
        
        try {
            const data = await uploadImage(file, token);
            setDescription(data.description);  // Show AI-generated description
            alert("Image uploaded successfully!");
        } catch (error) {
            console.error("Upload error:", error);
            alert("Failed to upload image.");
        }
    };

    return (
        <ImageContainer>
            <input type="file" onChange={handleFileChange} />
            <UploadButton onClick={handleUpload}>Upload Image</UploadButton>

            {description && (
                <ImageDescription>
                    <strong>AI Description:</strong> {description}
                </ImageDescription>
            )}
        </ImageContainer>
    );
};

export default ImageUpload;
