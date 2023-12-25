import React from "react";
import "./Signup.css";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";


const Signin=()=>{
    const navigate=useNavigate();
    const initialValues = {
   
        email: "",
        password: "",
        
    };
    const { values, handleChange, handleBlur } = useFormik({
        initialValues: initialValues,})

    const handleLogin=(e)=>{
        e.preventDefault();
        const loggeduser=JSON.parse(localStorage.getItem("user"));
        if(values.email===loggeduser.email && 
            values.password===loggeduser.password)
            {
                navigate("/home");
            }
            // else{
            //     alert("invalid username and password");
            // }
    }

    return(
        <>
        <div className="parent">
        <div className='header'>
        <h5 style={{padding:"10px"}}>TODO APP
        <button type="button" class="btn btn-light">Sign up</button></h5>
        </div>
        <div className="child">
        <h4>New here?</h4>
        <div className="child"> <p>Logged in user can access the benefits of our website resources.</p>
        <p> You can manage your daily routine and done your work on time.
        </p>
        <form onSubmit={handleLogin}>
        <div className="inputs">
<h3>Sign in</h3>

<TextField id="outlined-basic" label="Email-id" variant="outlined"  name="email" value={values.email} type="email"
                        onChange={handleChange} onBlur={handleBlur} />
<TextField id="outlined-basic" label="Password" variant="outlined"
name="confirm_password" value={values.confirm_password}
type="password" onChange={handleChange} onBlur={handleBlur}  />

<button type="submit" class="btn btn-primary" >Login</button>

</div>
</form>
</div>

</div>
        </div>
        </>
    )
}

export default Signin;