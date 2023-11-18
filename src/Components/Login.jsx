/* eslint-disable react/no-unescaped-entities */
import { FaGoogle,FaFacebook,FaGithub} from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { FaEyeSlash,FaEye } from "react-icons/fa";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, getAuth,sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";



const Login = () => {
    const auth =getAuth(app)
    const googleProvider=new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();
    const facebookProvider=new FacebookAuthProvider();

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,googleProvider)
            .then(result=>{
                console.log(result);
                Swal.fire({
                    icon: "success",
                    title: "Yes...",
                    text: "You have successfully signIn with google",                    
                  });
                navigate('/');
            })
            .catch(error=>{
                console.log(error);
            })
    }

    const handleGithubSign=()=>{
        signInWithPopup(auth,githubProvider)
            .then(result=>{
                console.log(result);
                Swal.fire({
                    icon: "success",
                    title: "Yes...",
                    text: "You have successfully signIn with github",                    
                  });
                navigate('/');
            })
            .catch(error=>{
                console.log(error);
            })
    }

    const handleFacebookSignIn=()=>{
        signInWithPopup(auth,facebookProvider)
            .then(result=>{
                console.log(result);
                Swal.fire({
                    icon: "success",
                    title: "Yes...",
                    text: "You have successfully signIn with facebook",                    
                  });
                navigate('/');
            })
            .catch(error=>{
                console.log(error);
            })
    }

    const [showPassword,setShowPassword]=useState(false)
    const emailRef=useRef(null);
    const {login}=useContext(AuthContext);

    const location=useLocation();

    const navigate=useNavigate(); 

    const handleLogin = e =>{
        e.preventDefault();        
        const form=new FormData(e.currentTarget);     
        const email=form.get('email');
        const password=form.get('password');
        console.log(email,password);

        login(email,password)
            .then(result=>{
                console.log(result);
                Swal.fire({
                    icon: "success",
                    title: "Yes...",
                    text: "You have successfully login",                    
                  });
                navigate(location?.state ? location.state : '/' );
            })
            .catch(error=>{
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops!!",
                    text: `${error.message}`,                    
                  });
                return;
            })       

    }
    const handleForgetPassword=()=>{
        const email=emailRef.current.value;
        if(!email){
            Swal.fire({
                icon: "error",
                title: "Oops!!",
                text: 'Please provide your email',                    
              });
            return;
        }
        sendPasswordResetEmail(auth,email)
            .then(result=>{
                console.log(result);
                Swal.fire({
                    icon: "error",
                    title: "Oops!!",
                    text: 'Please check your email',                    
                  });
            })
            .catch(error=>{
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops!!",
                    text: `${error.message}`,                    
                  });
                return;
            })
    }
    return (        
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 lg:p-0 lg:gap-8 my-8 lg:my-24">
                <div className="col-span-2 border-4 border-teal-700 p-4 lg:p-8 bg-red-100">
                    <h1 className="text-3xl lg:text-5xl text-center font-semibold ">Please Login </h1>
                    <form onSubmit={handleLogin} className=" w-full ">
                                <div className="form-control my-4">
                                    <label className="label">
                                        <span className="label-text lg:text-4xl font-semibold ">Email</span>
                                    </label>
                                    <input ref={emailRef} type="email" name="email" placeholder="email" className="input lg:text-4xl lg:p-8 font-semibold input-bordered" required />
                                </div>
                                <div className="form-control my-4 relative">
                                    <label className="label">
                                        <span className="label-text lg:text-4xl font-semibold">Password</span>
                                    </label>
                          
                                    <input type={showPassword?'text':'password'} name="password" placeholder="password" className="input lg:text-4xl lg:p-8 font-semibold input-bordered" required />
                                    <button onClick={()=>setShowPassword(!showPassword)} className="text-3xl font-semibold absolute right-12 lg:right-16 top-12 lg:top-20"> 
                                    
                                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                    
                                    </button>

                                    <label className="label">
                                        <a onClick={handleForgetPassword} href="#" className=" text-xl lg:text-2xl font-semibold label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                            
                                </div>
                                <div className=" flex justify-center mt-2 lg:mt-6">
                                    <button className="btn btn-secondary text-2xl lg:text-4xl font-semibold w-1/2 ">Login</button>
                                </div>
                    </form>
                    <p className="text-xl lg:text-3xl text-center my-2 lg:my-5 font-semibold">Don't have an account? please <NavLink to={'/register'} className='text-purple-700 underline'>Register</NavLink></p>
                </div>                
                <div className="p-4 space-y-4">                
                    <h1 className="text-3xl lg:text-5xl font-semibold">Login with </h1>
                    <a className="btn btn-outline w-full text-2xl lg:text-4xl font-semibold text-pink-600" onClick={handleGoogleSignIn} > <FaGoogle></FaGoogle>Google</a>
                    <a className="btn btn-outline w-full text-2xl lg:text-4xl font-semibold text-pink-600" onClick={handleGithubSign}> <FaGithub></FaGithub>Github</a>
                    <a className="btn btn-outline w-full text-2xl lg:text-4xl font-semibold text-pink-600" onClick={handleFacebookSignIn}> <FaFacebook></FaFacebook>Facbook</a>
                    
                </div>                
            </div>
            
            
        
    );
};

export default Login;