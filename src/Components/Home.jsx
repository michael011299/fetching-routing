import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <h2>My Routing and Fetching practice</h2>
      <h3>Go To: </h3>
      <div id='container'>
        <Link id="link" to='/posts'>
          <Card id="homecard">
            <button>Posts</button>
          </Card>
        </Link>
        <Link id="link" to='/comments'>
          <Card id="homecard">
            <button>Comments</button>
          </Card>
        </Link>
        <Link id="link" to='/albums'>
          <Card id="homecard">
            <button>Albums</button>
          </Card>
        </Link>
        <Link id="link" to='/photos'>
          <Card id="homecard">
            <button>Photos</button>
          </Card>
        </Link>
        <Link id="link" to='/users'>
          <Card id="homecard">
            <button>Users</button>
          </Card>
        </Link>
        <Link id="link" to='/todo'>
          <Card id="homecard">
            <button>To Do</button>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default Home;
