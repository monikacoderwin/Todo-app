import React from 'react';

const apiUserData=()=>{

    fetch("https://internship-backend-0bu7.onrender.com/api/todo")
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
}
export default apiUserData;