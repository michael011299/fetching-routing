import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getCommentsByPostId } from "../ApiCalls";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

const PostComments = ({ postId }) => {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [singlePost, setSinglePost] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        console.log(res.data)
        setSinglePost(res.data);
      });
  }, [postId]);

  useEffect(() => {
    getCommentsByPostId(postId).then((posts) => {
      setPostData(posts);
      setIsLoading(false);
    });
  }, [postId]);

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
        <h2>Single Post Comments</h2>
        <Card key={singlePost.id} id='cards'>
          <Card.Title>{singlePost.title}</Card.Title>
          <Card.Text>{singlePost.body}</Card.Text>
          <Card.Text>Post Id: {singlePost.id}</Card.Text>
        </Card>
        <div id='container'>
          {postData.map((post) => {
            return (
              <>
                <Card key={post.id} id='cards'>
                  <Card.Title id="title">Name: {post.name}</Card.Title>
                  <Card.Text id="textbody">{post.body}</Card.Text>
                  <Card.Title>
                    <strong>Email:</strong><br/>
                    {post.email}</Card.Title>
                  
                  <Card.Text>Post Id: {post.id}</Card.Text>
                </Card>
              </>
            );
          })}
        </div>
      </>
    );
  }
};

export default PostComments;
