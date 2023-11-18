import moment from 'moment';
const Header = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <img className="lg:w-16 w-7 h-7  lg:h-16 rounded-full" src="https://i.postimg.cc/nct6cDhc/images.png"></img>
                <div>
                    <h1 className="text-2xl lg:text-6xl font-bold text-purple-700 text-center"> TechBD Training Institutions</h1>  
                </div>
            </div>
                      
            <h1 className=" text-xl lg:text-4xl font-semibold text-green-600  text-center lg:mt-2" >Train your way to success </h1>
            
            <h1 className="text-xl lg:text-2xl text-center text-teal-600">{moment().format("dddd, Do MMMM,  YYYY, h:mm:ss a")} </h1>
            <p className='text-center lg:text-xl font-semibold'>Court station, Rajshahi</p>
        </div>
    );
};

export default Header;