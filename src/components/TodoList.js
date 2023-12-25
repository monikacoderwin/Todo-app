import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import ErrorBoundary from './ErrorBoundary';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      <div className="card" style={{marginTop:"10px", marginLeft:"380px", backgroundColor:"#191970", color: "white",width:"600px",marginTop:"20px"}}>
        <div className="card-header">Todo List</div>
        <div className="card-body">
          <table className="table" style={{backgroundColor:"#191970", color:"white", marginLeft:"10px"}}>
            <thead>
              <tr>
                <th>ID</th>
                <th> Task</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.length === 0 ? (
                <div className="d-flex justify-content-center">
                  No Todo Avilable
                </div>
              ) : (
                todos.map((todo) => (
                  <ErrorBoundary>
                    {' '}
                    <TodoItem key={todo.id} todo={todo} />{' '}
                  </ErrorBoundary>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
