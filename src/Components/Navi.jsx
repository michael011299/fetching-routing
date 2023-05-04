import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navi = () => (
  <Navbar bg='dark' variant='dark'>
    <Container>
      <Link id='nav' to='/'>
        <Navbar.Brand href='#home'>Routing and fetching</Navbar.Brand>
      </Link>
      <Nav className='me-auto'>
        <Link id='nav' to='/'>
          Home
        </Link>
        <Link id='nav' to='/posts'>
          Posts
        </Link>
        <Link id='nav' to='/comments'>
          Comments
        </Link>
        <Link id='nav' to='/albums'>
          Albums
        </Link>
        <Link id='nav' to='/photos'>
          Photos
        </Link>
        <Link id='nav' to='/users'>
          Users
        </Link>
        <Link id='nav' to='/todo'>
          To Do
        </Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Navi;
