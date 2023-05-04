import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import { getUsers } from '../ApiCalls';

const Users = () => {
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      getUsers().then((users) => {
        setUserData(users);
        setIsLoading(false);
      });
    }, []);


      if (isLoading) {
        return (
          <>
            <h2>All Users</h2>
            <Spinner  id="spinner" animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </> 
        );
      } else {
        return (
        <>
        <h2>All Users</h2>
        <div id='container'>
          {userData.map((user) => {
            return (
              <>
                <Card key={user.id} id='cards'>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>
                  <strong>Username:</strong><br/>
                    {user.username}
                    </Card.Text>
                  <Card.Text>
                    <strong>Address:</strong> <br/> 
                    {user.address.street} <br/>
                    {user.address.zipcode} <br/>
                    {user.address.city}
                  </Card.Text>
                  <Card.Text>
                    <strong>Phone:</strong><br/>
                    {user.phone}
                    </Card.Text>
                  <Card.Text>
                  <strong>Company:</strong><br/>
                    {user.company.name}
                    </Card.Text>
                </Card>
              </>
            );
          })}
        </div>
      </>);
      }
}
 
export default Users;