// import React, { useState } from "react";
// import './Todo.css';
// import { addTodo, deleteTodo, removeTodo } from "../redux/todoSlice";
// import { useSelector, useDispatch } from "react-redux";
// import { Button, IconButton, List, ListItem, ListItemText } from "@mui/material";




// const Todo = () => {
//   const [inputData, setInputData] = useState([]);
// console.log(inputData);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <div className="parent">
//         <h5>TODO APP   <button type="button" class="btn btn-light">Logout</button></h5>
//         <div className="child">
//           <h6>Monika's todo list</h6>
//           <div className="row g-3 align-items-center">
//             <div className="col-auto" style={{ marginLeft: "20px", marginTop: "30px", marginRight: "10px", display: "flex", justifyContent: "space-evenly", gap: "10px" }}>
//               <input type="text" className="form-control" id="inputTask2" placeholder="Add your task here"
//                 value={inputData}

//                 onChange={(event) => setInputData(event.target.value)} />
//               <button type="button" className="btn btn-light" onClick={() => dispatch(addTodo(inputData))} >+</button>
            
//             </div></div>
//           <button type="button" className="btn btn-light" style={{
//             width: "80px",
//             margin: "10px", padding: "10px", textAlign: "center"
//           }}
//           >clear all</button>
//         </div>
//         <div className="showItems">
//         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//               {inputData.map((value) => (

//                 <ListItem
//                   key={value}
//                   disableGutters
//                   secondaryAction={
//                     <IconButton aria-label="delete">
//                       <Button variant="text">Delete</Button>
//                     </IconButton>
//                   }
//                 >
//                   <ListItemText primary={`Line item ${value}`} />
//                 </ListItem>
//               ))}y
//             </List>

//           <div className="eachItem">
            
//           </div>
//         </div>

//       </div>





//     </>
//   )
// }

// export default Todo;
import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
 
const Todo=()=>{
return(
<div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-6">
          <TodoForm />
        </div>
        </div>
        <div className="row">
        <div className="col-md-8">
          <TodoList />
          </div>
        </div>
      </div>
)}
export default Todo;