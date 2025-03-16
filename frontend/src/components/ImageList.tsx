import React, { useEffect, useState } from 'react';
import { fetchImages } from '../services/api';
import { ImageCard, ImageContainer, ImageDescription } from '../styles/ImageStyles';

interface Image {
    id: number;
    file_name: string;
    image_url: string;
    description: string;
}

interface ImageListProps {
    token: string;
}

const ImageList: React.FC<ImageListProps> = ({ token }) => {
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const data = await fetchImages(token);
                setImages(data);
            } catch (error) {
                console.error("Failed to load images:", error);
            }
        };

        loadImages();
    }, [token]);

    return (
        <ImageContainer>
            {images.map((image) => (
                <ImageCard key={image.id}>
                    <img src={image.image_url} alt={image.file_name} />
                    {image.description && (
                        <ImageDescription>
                            <strong>Description:</strong> {image.description}
                        </ImageDescription>
                    )}
                </ImageCard>
            ))}
        </ImageContainer>
    );
};

export default ImageList;
