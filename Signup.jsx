import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import './Signup.css';
import { useFormik } from "formik";
import { signupValidation } from "../validation";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signUpUser } from "../redux/authSlice";

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};

const Signup = () => {

    const [Username, setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
   const handleApi=()=>{
    console.table(Username,email,password)
    dispatch(signUpUser({Username,email,password}))
   }
    
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(values));
        navigate("/signin");
    }

    const { values, errors, handleChange,touched, handleBlur } = useFormik({
        initialValues: initialValues,
        validationSchema: signupValidation,
        onSubmit: (values,action) => {
            console.log(values);
            action.resetForm();
        }
    });
    console.log(errors);

    
    return (<>

        <div className="parent">
            <div className='header'>
                <h5 style={{ padding: "10px" }}>TODO APP
                    <button type="button" class="btn btn-light">Login</button></h5>
            </div>
            <div className="child">
                <h4>One of us</h4>
                <p>Logged in user can access the benefits of our website resources.</p>
                <p> You can manage your daily routine and done your work on time.
                </p>
                <form onSubmit={handleSubmit}>
                <div className="input">

                   <h3>Sign up</h3>
                    <TextField id="outlined-basic" label="Username" name="name"
                        value={values.name} type="text" variant="outlined"
                        onChange={handleChange} onBlur={handleBlur} 
                        />
                        {errors.name && touched.name?(<p className="form-error">
                            {errors.name}</p>):null
                            }
                    <TextField id="outlined-basic" label="Email-id"
                        name="email" value={values.email} type="email" variant="outlined"
                        onChange={handleChange} onBlur={handleBlur} 
                        />
                        {errors.email && touched.email?(<p className="form-error">
                            {errors.email}</p>):null
                            }
                    <TextField id="outlined-basic" label="Password"
                        name="password" value={values.password} type="password"
                        variant="outlined" onChange={handleChange} onBlur={handleBlur} 
                        />
                        {errors.password && touched.password?(<p className="form-error">
                            {errors.password}</p>):null
                            }
                    <TextField id="outlined-basic" label="Confirm Password"
                        name="confirm_password" value={values.confirm_password}
                        type="password" onChange={handleChange} onBlur={handleBlur} variant="outlined" 
                        />
                        {errors.confirm_password && touched.confirm_password?(<p className="form-error">
                            {errors.confirm_password}</p>):null
                            }
                    <button class="btn btn-primary" type="submit" >Sign up</button>
                    <button class="btn btn-primary" type="button" onClick={()=>handleApi()} >Sign up with api</button>
                    </div>
                   </form>
                </div>
            </div>


    </>)
}
export default Signup;