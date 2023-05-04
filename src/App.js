import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Comments from "./Components/Comments";
import Posts from "./Components/Posts";
import Home from "./Components/Home";
import Albums from "./Components/Albums";
import Navi from "./Components/Navi";
import Photos from "./Components/Photos";
import Users from "./Components/Users";
import ToDo from './Components/ToDo';
import PostComments from "./Components/PostComments";
import { useState } from "react";

const App = () => {
  const [postId, setPostId] = useState(0)

  return (
    <>
      <Navi />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts setPostId={setPostId}/>} />
        <Route path='/comments' element={<Comments />} />
        <Route path='/albums' element={<Albums />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/users' element={<Users />} />
        <Route path='/todo' element={<ToDo />} />
        <Route path={`/post/${postId}/comments`} element={<PostComments postId={postId}/>}/>
      </Routes>
      </>
  );
};

export default App;
