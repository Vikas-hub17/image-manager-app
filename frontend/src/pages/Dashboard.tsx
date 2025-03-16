import { useEffect, useState } from 'react'
import ImageUpload from '../components/ImageUpload'
import ImageList from '../components/ImageList'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const DashboardContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd;
  margin-bottom: 2rem;
`;

const Dashboard = () => {
  const [images, setImages] = useState<any[]>([])
  const navigate = useNavigate()

  const fetchImages = async () => {
    try {
      const response = await api.get('/images', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      setImages(response.data.images)
    } catch (error) {
      console.error('Failed to fetch images', error)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <DashboardContainer>
      <Header>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </Header>
      <ImageUpload onUpload={fetchImages} />
      <ImageList images={images} />
    </DashboardContainer>
  )
}

export default Dashboard
