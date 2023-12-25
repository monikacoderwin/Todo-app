import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo,editTodo, deleteTodo } from '../redux/todosSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    task: todo.task
  });

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTodo({ ...editedData, id: todo.id }));
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
    };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  const handleInputChange = (e) => {
    // const { name, } = e.target;
    addTodo(setEditedData(e.target.value));
    setEditedData("");
  };

  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="task"
            value={editedData.task}
            onChange={handleInputChange}
          />
        ) : (
          todo.task
        )}
      </td>
      <td>
        
        {isEditing ? (
    
          <button className="btn btn-light mr-2" onClick={handleEdit}>
            Save
          </button>
        ) : (
          <button className="btn btn-light mr-2" onClick={handleEdit}>
            Edit
          </button>
        )}
        <button className="btn btn-light" onClick={handleDelete}>
          Delete
        </button>
       
      </td>
    </tr>
  );
}

export default TodoItem;
