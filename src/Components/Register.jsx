/* eslint-disable react/no-unescaped-entities */

import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { FaEyeSlash,FaEye } from "react-icons/fa";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const Register = () => {
    const [showPassword,setShowPassword]=useState(false)
    const [registerError,setRegisterError]=useState('');
    const {createUser} =useContext(AuthContext);
    const navigate=useNavigate();

    const handleRegister = e =>{
        e.preventDefault();        
        // const form=new FormData(e.currentTarget);
        // const name=form.get('name');
        // const photo=form.get('photo');
        // const email=form.get('email');
        // const password=form.get('password');
        // const terms=form.get('terms')
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const terms=e.target.terms.checked;
        console.log(name,email,password,terms,photo);  

        if(!/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)){
            Swal.fire({
                icon: "error",
                title: "Oops!!",
                text: "password should be contain at least 6 character,1 uppercase & 1 special charecter ",                                    
              });
              return;
        }
        if(!terms){
            Swal.fire({
                icon: "error",
                title: "Oops!!",
                text: "Please accept ours terms & conditions ",                                    
              });
              return;
        }


        setRegisterError('');

        createUser(email,password)
        .then(result=>{
            console.log(result.user)

            updateProfile(result.user,{
                displayName:name, photoURL:photo
            })
            .then(result=>{
                console.log(result);
            })
            .catch(error=>{
                console.log(error);
            })
            sendEmailVerification(result.user)
                .then(()=>{
                    Swal.fire({
                        icon: "success",
                        title: "Yes...",
                        text: "please verify your email",                    
                      });
                })
                .catch()
            Swal.fire({
                icon: "success",
                title: "Yes...",
                text: "You have successfully created your account.",                    
              });
            navigate('/');
        })
        .catch(error=>{
            console.log(error);
            setRegisterError(error.message);
            Swal.fire({
                icon: "error",
                title: "Oops!!",
                text: `${registerError}`,                    
              });
        })
    } 

    return (
        <div className="my-8 lg:my-24 ">
            <h1 className="text-3xl lg:text-5xl text-center font-semibold">Please Register </h1>
             <form onSubmit={handleRegister} className="mx-auto md:w-3/4 lg:w-1/2 ">
                        <div className="form-control my-4">
                            <label className="label">
                                <span className="label-text lg:text-4xl font-semibold ">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Required" className="input lg:text-4xl p-8 font-semibold input-bordered" required />
                        </div>
                        <div className="form-control my-4">
                            <label className="label">
                                <span className="label-text lg:text-4xl font-semibold ">Profile picture url</span>
                            </label>
                            <input type="text" name="photo" placeholder="Not Required" className="input lg:text-4xl p-8 font-semibold input-bordered"/>
                        </div>
                        <div className="form-control my-4">
                            <label className="label">
                                <span className="label-text lg:text-4xl font-semibold ">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Required" className="input lg:text-4xl p-8 font-semibold input-bordered" required />
                        </div>
                        <div className="form-control my-4 relative">
                            <label className="label">
                                <span className="label-text lg:text-4xl font-semibold">Password</span>
                            </label>
                          
                               <input type={showPassword?'text':'password'} name="password" placeholder="Required" className="input lg:text-4xl p-8 font-semibold input-bordered" required />
                               <button onClick={()=>setShowPassword(!showPassword)} className=" text-xl lg:text-3xl font-semibold absolute right-16 top-16 lg:top-20"> 
                               
                               {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                               
                               </button>                            
                        </div>

                        <div className="lg:text-2xl">
                            <input type="checkbox" name="terms" id="terms" />
                            <label className="ml-5 mt-3" htmlFor="terms">Accept our terms & conditions</label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary text-xl lg:text-4xl font-semibold   ">Register</button>
                        </div>
            </form>
             {/* {
                registerError && <p className="text-red-700 text-3xl font-semibold text-center">{registerError}</p>
             } */}
            <p className="lg:text-3xl text-center my-3 font-bold">Already have an account? please <NavLink to={'/login'} className='text-blue-600 underline'>Login</NavLink></p>
            
            
        </div>
    );
};

export default Register;