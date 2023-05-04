import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getToDo } from "../ApiCalls";
import Spinner from "react-bootstrap/Spinner";

const ToDo = () => {
  const [toDoData, setToDoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getToDo().then((todo) => {
      setToDoData(todo);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <h2>All To Do</h2>
        <Spinner  id="spinner" animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </> 
    );
  } else {
    return (
      <>
        <h2>All To Do</h2>
        <div id='container'>
          {toDoData.map((todo) => {
            return (
              <Card key={todo.id} id='cards'>
                <Card.Title>To do: {todo.title}</Card.Title>
                <Card.Text>Completed: {todo.completed}</Card.Text>
                <Card.Text>UserId: {todo.userId}</Card.Text>
              </Card>
            );
          })}
        </div>
      </>
    );
  }
};

export default ToDo;