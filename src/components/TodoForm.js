import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../redux/todosSlice';
import TodoList from './TodoList';

function TodoForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    task:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
  if(formData.task)
      dispatch(addTodo({ ...formData, id: Date.now() }));
      setFormData({task:''});
    }
  const handleDelete=()=>{
    dispatch(removeTodo());
  }

  return (<>
    <div className='Parent'>
        <div className='header'> 
        <h5 style={{display:"flex", justifyContent:"space-between", padding:"10px",backgroundColor:"#191970",color:"white",width:"1320px", height:"50px"}}>TODO APP
        <button type="button" class="btn btn-light">Logout</button></h5>
        </div>
      <div className="card" style={{backgroundColor:"#191970",color:"white", marginLeft:"480px",marginTop:"70px",width:"400px"}}>
        <div className="card-header">Monika's Todo</div>
        <div className="card-body" >
          <form>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Add your task here"
                name="task"
                value={formData.task}
                onChange={handleInputChange}
              />
            </div>
            <div className='button' style={{display:"flex", justifyContent:"center", gap: "10px"}}>
            <button
              type="button"
              className="btn btn-light"
              onClick={handleSubmit}
            >
              Add
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={handleDelete}
            >
              Clear
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
 </> )};

export default TodoForm;
