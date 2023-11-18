import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const CourseDetails = () => {
    const navigate=useNavigate();

    const courses=useLoaderData();

    const {id}=useParams();

    const course=courses.filter(course=>course.id==id);

    console.log(id,course);  
    const handleSelect =()=>{
        Swal.fire({
            icon: "success",
            title: "Yes...",
            text: "You have successfully select this course",                    
          });

    }  
    const handleGoback=()=>{
        navigate(-1);
    }

    return (
        <div className="">
            <img className="w-full h-1/2 p-4 mt-8 lg:mt-24" src={course[0]?.img} alt="" />
            <h1 className="text-3xl lg:text-5xl font-bold p-4 my-4">Name: {course[0].name}</h1>
            <p className="text-xl lg:text-3xl text-justify p-4">{course[0].details}</p>
            <div className="flex justify-between lg:justify-around p-1 lg:p-4 ">
                
                <div>
                    <p className="text-xl md:text-2xl lg:text-4xl font-semibold bg-green-300 p-2 lg:p-4 m-5">credit: {course[0].credit}</p>
                    <p className="text-xl md:text-2xl lg:text-4xl font-semibold bg-red-300 p-2 lg:p-4 m-5">Duration: {course[0].time}</p>
                </div>
               <div>
                    <p className="text-xl md:text-2xl lg:text-4xl font-semibold bg-yellow-300 p-2 lg:p-4 m-5">Price: {course[0].price}$</p>
                    <p className="text-xl md:text-2xl lg:text-4xl font-semibold bg-orange-300 p-2 lg:p-4 m-5">course id: {course[0].id}</p>
               </div>               
            </div>
            <div className="flex gap-8 justify-center mb-24 mt-5">
                 <button onClick={handleSelect} className="btn btn-outline text-xl md:text-3xl lg:text-5xl w-1/3 btn-secondary font-bold text-center">Select</button>
                 <button onClick={handleGoback} className="btn btn-outline text-xl md:text-3xl lg:text-5xl w-1/3 btn-secondary font-bold text-center">Go Back</button>
            </div>
        </div>
    );
};

export default CourseDetails;