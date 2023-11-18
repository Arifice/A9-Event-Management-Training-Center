import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    
    console.log('navbar',user)
    const handleSignOut=()=>{
        logOut()
            .then(result=>{
                console.log(result);
                Swal.fire({
                    icon: "success",
                    title: "Yes...",
                    text: "You have successfully log out!",                    
                  });
            })
            .then(error=>{
                console.log(error);                
            })

    }
    const navlinks = <>
            <li className="text-2xl font-semibold"><NavLink to={'/'}>Home</NavLink></li>                        
            <li className="text-2xl font-semibold"><NavLink to={'/about'}>About</NavLink></li>            
            <li className="text-2xl font-semibold"><NavLink to={'/success'}>Success</NavLink></li>                        
            <li className="text-2xl font-semibold"><NavLink to={'/login'}>Login</NavLink></li>                        
            <li className="text-2xl font-semibold"><NavLink to={'/register'}>Register</NavLink></li>                                    
            
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <h1 className="lg:text-xl pr-2 font-semibold">{user?.displayName}</h1>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="lg:w-16 w-8 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                    </div>
                </label>

                {
                    user?
                    <button onClick={handleSignOut} className="lg:text-2xl ml-1 lg:ml-3 font-semibold">Log Out</button>
                    :
                    <NavLink to={'/login'}> <button className="lg:text-2xl ml-1 lg:ml-3 font-semibold">Login</button> </NavLink>     
                }
            </div>
        </div>
    );
};

export default Navbar;