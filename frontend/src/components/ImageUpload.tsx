import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { uploadImage } from '../api/imageApi';
import { Container, DragDropArea, Button, Message } from '../styles/ImageStyles';

const ImageUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => setFile(acceptedFiles[0]),
    });

    const handleUpload = async () => {
        if (!file) return setMessage('Please select an image to upload.');

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await uploadImage(formData);
            setMessage(`Image uploaded successfully! URL: ${response.data.url}`);
        } catch (error) {
            setMessage('Image upload failed. Try again.');
        }
    };

    return (
        <Container>
            <h2>Upload Image</h2>

            <DragDropArea {...getRootProps()}>
                <input {...getInputProps()} />
                {file ? <p>{file.name}</p> : <p>Drag & drop an image here or click to select one</p>}
            </DragDropArea>

            <Button onClick={handleUpload}>Upload Image</Button>
            {message && <Message>{message}</Message>}
        </Container>
    );
};

export default ImageUpload;
