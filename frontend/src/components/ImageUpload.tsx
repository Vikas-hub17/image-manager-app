import React, { useState } from 'react'
import api from '../services/api'
import styled from 'styled-components'

const UploadContainer = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
  margin: 2rem auto;
  max-width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
`;

const FileInput = styled.input`
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #18BC9C;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #F39C12;
    transform: translateY(-2px);
  }
`;

interface ImageUploadProps {
  onUpload: () => void
}

const ImageUpload = ({ onUpload }: ImageUploadProps) => {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return
    const formData = new FormData()
    formData.append('file', file)
    try {
      await api.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      onUpload()
    } catch (error) {
      console.error('Upload failed', error)
    }
  }

  return (
    <UploadContainer>
      <Title>Upload Image</Title>
      <FileInput type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </UploadContainer>
  )
}

export default ImageUpload
