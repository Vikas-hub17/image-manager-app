import styled from 'styled-components'

interface Image {
  id: number
  file_name: string
  s3_key: string
  upload_date: string
}

interface ImageListProps {
  images: Image[]
}

const ListTitle = styled.h2`
  text-align: center;
  margin-top: 2rem;
`;

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin-top: 2rem;
`;

const ListItem = styled.li`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageTag = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ImageName = styled.p`
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
`;

const ImageList = ({ images }: ImageListProps) => {
  return (
    <div>
      <ListTitle>Your Images</ListTitle>
      <ListContainer>
        {images.map(image => (
          <ListItem key={image.id}>
            <ImageTag src={`https://your-s3-bucket-url/${image.s3_key}`} alt={image.file_name} />
            <ImageName>{image.file_name}</ImageName>
          </ListItem>
        ))}
      </ListContainer>
    </div>
  )
}

export default ImageList
