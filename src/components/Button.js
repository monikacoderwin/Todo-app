import React from 'react'
import { addTodo, pendingTodo } from '../redux/todosSlice'
import { useState } from 'react'


const Button = () => {
    const[formData,setFormData]=useState("");
    
const handleSubmit=(event)=>{
if(event.detail==1){
dispatch(pendingTodo({ ...formData, id: Date.now() }));
    }
else if(event.detail==2){
dispatch(addTodo({ ...formData, id: Date.now() }));
setFormData({ task:''});
}
else{
    setFormData({ task:'' }); 
}
}
  return (
    <>
    <button onClick={handleSubmit}>Add</button>
    </>
  )
}

export default Button;