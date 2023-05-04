import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import { getAlbums } from '../ApiCalls';

const Albums = () => {
    const [albumData, setAlbumData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      getAlbums().then((albums) => {
        setAlbumData(albums);
        setIsLoading(false);
      });
    }, []);


      if (isLoading) {
        return (
          <>
            <h2>All Albums</h2>
            <Spinner  id="spinner" animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </> 
        );
      } else {
    return (    
    <>
        <h2>All Albums</h2>
        <div id='container'>
          {albumData.map((album) => {
            return (
              <>
                <Card key={album.id} id='cards'>
                  <Card.Title>Album Title: {album.title}</Card.Title>
                  <Card.Text>User Id: {album.userId}</Card.Text>
                </Card>
              </>
            );
          })}
        </div>
      </>);
}
}
export default Albums;