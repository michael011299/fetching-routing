import { useState, useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import { getPhotos } from "../ApiCalls";
import Spinner from "react-bootstrap/Spinner";

const Photos = () => {
  const [photoData, setPhotoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPhotos().then((photos) => {
      setPhotoData(photos);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <h2>All Photos</h2>
        <Spinner  id="spinner" animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </> 
    );
  } else {
    return (
      <>
        <h2>All Photos</h2>
        <div id='container'>
          {photoData.map((photo) => {
            return (
              <Card key={photo.id} id='cards'>
                <Card.Title>Title: {photo.title}</Card.Title>
                <Card.Text>Album Id: {photo.albumId}</Card.Text>
                <Card.Text>{photo.body}</Card.Text>
                <Image src={photo.thumbnailUrl} />
              </Card>
            );
          })}
        </div>
      </>
    );
  }
};

export default Photos;
