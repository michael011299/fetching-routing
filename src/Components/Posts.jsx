import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { getPosts } from "../ApiCalls";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

const Posts = ({ setPostId }) => {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts().then((posts) => {
      setPostData(posts);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <h2>All Posts</h2>
        <Spinner id='spinner' animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </>
    );
  } else {
    return (
      <>
        <h2>All Posts</h2>
        <div id='container'>
          {postData.map((post) => {
            return (
              <>
                <Card key={post.id} id='cards'>
                  <Card.Title id="title">{post.title}</Card.Title>
                  <Card.Text id="textbody">{post.body}</Card.Text>
                  <Card.Footer id='footer'>
                  <Link to={`/post/${post.id}/comments`}>
                    <Button
                      id='commentbutton'
                      variant="light"
                      onClick={() => setPostId(post.id)}
                    >
                      View Comments for Post {post.id}
                    </Button>
                  </Link>
                  </Card.Footer>
                </Card>
              </>
            );
          })}
        </div>
      </>
    );
  }
};
export default Posts;
