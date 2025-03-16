import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    text-align: center;
`;

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
`;

const ImageList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
    margin-top: ${({ theme }) => theme.spacing.medium};
`;

const ImageItem = styled.img`
    width: 100%;
    height: 150px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: ${({ theme }) => theme.spacing.medium};

    &:hover {
        background-color: #45a049;
    }
`;

const DashboardPage: React.FC = () => {
    const sampleImages = [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/250'
    ];

    return (
        <Container>
            <Title>Your Image Dashboard</Title>

            <ImageList>
                {sampleImages.map((img, idx) => (
                    <ImageItem key={idx} src={img} alt={`Image ${idx + 1}`} />
                ))}
            </ImageList>

            <Button>Upload New Image</Button>
        </Container>
    );
};

export default DashboardPage;
