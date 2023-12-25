import * as Yup from 'yup';

export const signupValidation= Yup.object({
    name: Yup.string().min(3).max(20).required("Please enter your name"),
    email: Yup.string().email().required("Please enter correct email id"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password:Yup.string().oneOf([Yup.ref("password"),null],"Password must match"),
})