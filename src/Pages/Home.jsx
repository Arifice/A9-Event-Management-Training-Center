
import { useLoaderData } from "react-router-dom";
import CourseCard from "../Components/CourseCard";
import RightSide from "../Components/RightSide";
import Bannar from "../Components/Bannar";
import { useState } from "react";
import About from "../Components/About";
import Success from "../Components/Success";

const Home = () => {
    const courses=useLoaderData();
    const [dataLength,setDtalength]=useState(4);
    console.log(courses);
    return (
        <div>   
            <Bannar></Bannar>         
            
            <h1 className="text-3xl lg:text-5xl font-bold text-teal-600 text-center bg-white p-4 lg:p-8">Our Courses</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6">
                {
                    courses.slice(0,dataLength).map(course=> <CourseCard key={course.id} course={course}></CourseCard>)
                }                
            </div>
                {
                    dataLength<courses.length ?
                    <div className="flex justify-center"> <button onClick={()=>setDtalength(courses.length)} className="btn btn-secondary text-4xl font-semibold">See All Courses</button></div>
                     :
                     <div className="flex justify-center"> <button onClick={()=>setDtalength(4)} className="btn btn-secondary text-4xl font-semibold">See Less Courses</button></div>
                }
                
           <div className="my-8 lg:my-24">
            
            <RightSide></RightSide>
            <About></About>
            <Success></Success>
           </div>
        </div>        
    );
};

export default Home;