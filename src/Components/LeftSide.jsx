import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSide = () => {
    const [allSuccess,setSuccess]=useState([]);
    useEffect(() => {
        fetch('success.json')
        .then(res => res.json())
        .then(data => setSuccess(data))
    },[])
    return (
        <div>
            <h1 className="text-center text-3xl lg:text-6xl my-10 font-bold text-green-800"> Successfull Students: </h1>
            <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 p-4 lg:p-0 lg:grid-cols-3 my-5">
                {
                    allSuccess.map(success=> 
                    (<div key={success.id} className="bg-teal-800 text-white  font-semibold shadow-lg rounded-lg ">
                       <NavLink to={`/success/${success.id}`}>
                        <div className="">
                                <div>
                                    <img className="w-full h-64 p-3" src={success?.img} alt="" />
                                </div>
                                <div className="p-4 bg-orange-500">
                                    <p className="text-3xl font-semibold">Name: {success?.name}</p>
                                    <p className="text-2xl font-semibold">Company: {success?.company}</p>
                                    <p className="text-2xl font-semibold">Email: {success?.name}@gmail.com</p>
                                    <p className=" font-semibold">About: {success?.details}</p>
                                </div>
                                
                            </div>
                       </NavLink>


                    </div>
                    ))
                }
            </div>
            
            
        </div>
    );
};

export default LeftSide;