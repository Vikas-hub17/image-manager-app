import React, { useEffect, useState } from 'react';
import { getImages, ImageData } from '../api/imageApi';
import { Container, ImageContainer, ImageItem, Message, PaginationButton } from '../styles/ImageStyles';

const ImageList: React.FC = () => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [message, setMessage] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await getImages(currentPage);
                setImages(response.images);
                setTotalPages(response.totalPages);
            } catch (error) {
                setMessage('Failed to load images.');
            }
        };

        fetchImages();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <Container>
            <h2>Uploaded Images</h2>
            {message && <Message>{message}</Message>}
            <ImageContainer>
                {images.map((image, index) => (
                    <ImageItem key={index}>
                        <img src={image.url} alt="Uploaded" />
                        <p>{image.description || 'No description available'}</p>
                    </ImageItem>
                ))}
            </ImageContainer>

            <div>
                <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </PaginationButton>
                <span>Page {currentPage} of {totalPages}</span>
                <PaginationButton onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </PaginationButton>
            </div>
        </Container>
    );
};

export default ImageList;
