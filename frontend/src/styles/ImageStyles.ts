import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 800px;
    padding: 20px;
    background-color: #ffffff;
    border: 2px solid #4CAF50;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
`;

export const ImageItem = styled.div`
    background-color: #f9f9f9;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    text-align: center;

    img {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
    }

    p {
        color: #4CAF50;
        font-weight: bold;
        margin-top: 8px;
    }
`;

export const AnalyzeButton = styled.button`
    background-color: #0078ff;
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #005ecb;
    }
`;

export const Message = styled.p`
    color: red;
    font-weight: bold;
`;

export const PaginationButton = styled.button`
    background-color: #4CAF50;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;

    &:disabled {
        background-color: #9E9E9E;
        cursor: not-allowed;
    }
`;

export const DragDropArea = styled.div`
    border: 2px dashed #4CAF50;
    padding: 40px;
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: #eaf5ea;
    }
`;
