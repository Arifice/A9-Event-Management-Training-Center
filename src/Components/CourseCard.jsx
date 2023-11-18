/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CourseCard = ({course}) => {
    const {name,id,img,details}=course;
    return (
        <div>            
            <div className="">
                <div className="card card-compact  bg-base-100 shadow-xl m-5">
                    <figure><img className="w-full h-64 p-2 " src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">{name}</h2>
                         <p className="text-justify text-xl">{details.slice(0,100)}</p>                         
                        <div className="flex justify-center">                            
                           <NavLink to={`/${id}`}> <button className="btn btn-accent text-3xl m-3 font-bold">Show Details</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            
        
        </div>
    );
};

export default CourseCard;