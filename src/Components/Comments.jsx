import { getComments } from "../ApiCalls";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";


const Comments = () => {
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getComments().then((comments) => {
      setCommentData(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <h2>All To Do</h2>
        <Spinner id='spinner' animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </>
    );
  } else {
    return (
      <>
        <h2>All Comments</h2>
        <div id='container'>
          {commentData.map((comment) => {
            return (
              <>
                <Card key={comment.id} id='cards'>
                  <Card.Title>Comment: {comment.name}</Card.Title>
                  <Card.Text>Email: {comment.email}</Card.Text>
                  <Card.Text>{comment.body}</Card.Text>
                  <Card.Text>Post ID: {comment.postId}</Card.Text>
                </Card>
              </>
            );
          })}
        </div>
      </>
    );
  }
};
export default Comments;
