
const About = () => {
    return (
        <div className="my-8 lg:my-24">
            <div>
                <h1 className="text-3xl lg:text-5xl font-bold text-center shadow-xl bg-white p-8">Director</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 shadow-xl">
                  
                  <div>
                    <img src="https://i.postimg.cc/1tnc2QsL/istockphoto-1364917563-612x612.jpg" alt="" />
                  </div>
                  <div className="text-center pt-4 lg:pt-24">
                        <h1 className="text-5xl font-bold text-pink-600">Name: Tom Latham</h1>
                        <div className="text-3xl font-bold text-purple-800">
                            <p>Position: Director</p>
                            <p>Email: tom@gmail.com</p>
                            <p>Country: England</p>
                        </div>
                  </div>

                </div>
                    
                <h1 className="text-3xl lg:text-5xl shadow-xl font-bold text-center mt-4 md:mt-8 lg:mt-24 p-8 bg-white">Instructors</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 ">                    
                    <div className="p-4 bg-white shadow-xl">
                        <img className="w-full" src="https://i.postimg.cc/vZYZHDrr/download-1.jpg " alt="" />
                        <div className="p-4 text-xl font-medium">
                            <p className="text-4xl">Name: Shophia </p>
                            <p>Possition: Lecturer</p>
                            <p>Email: shophia@gmail.com </p> 
                        </div>                      
                    </div>
                    <div className="p-4 bg-white shadow-xl">
                    <img className="w-full" src="https://i.postimg.cc/WpdJcrdZ/images-1.jpg" alt="" />
                        <div className="p-4 text-xl font-medium">
                            <p className="text-4xl">Name: Oliver </p>
                            <p>Possition: Lecturer</p>
                            <p>Email: olivar@gmail.com </p> 
                        </div>                      
                    </div>
                    <div className="p-4 bg-white shadow-xl ">
                        <img className="w-full" src="https://i.postimg.cc/B66S5zYX/download.jpg " alt="" />
                        <div className="p-4 text-xl font-medium">
                            <p className="text-4xl">Name: Tennyson </p>
                            <p>Possition: Lecturer</p>
                            <p>Email: tennysona@gmail.com </p> 
                        </div>                      
                    </div>              
                    
                    
                </div>
                <div>
                
                </div>
            </div>
            <h1 className="text-3xl shadow-xl lg:text-5xl text-green-500 font-bold text-center p-8 bg-white mt-8 md:mt-12 lg:mt-24">Photo Galary</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 shadow-xl gap-4 p-4 lg:p-0 lg:gap-8 ">
                <img className="w-full h-64  border-4 border-red-500 " src="https://i.postimg.cc/QMFNqCWj/shutterstock-1175731426-497x500.jpg" alt="" />
                <img className="w-full h-64  border-4 border-red-500" src="https://i.postimg.cc/y6j5VHdH/images-2.jpg" alt="" />
                <img className="w-full h-64  border-4 border-red-500" src="https://i.postimg.cc/pTW6bGKC/istockphoto-1061642360-612x612.jpg" alt="" />
                <img className="w-full h-64  border-4 border-red-500" src="https://i.postimg.cc/Z5mgx50X/images-1.jpg" alt="" />                   
                <img className="w-full h-64  border-4 border-red-500" src="https://i.postimg.cc/pdbDFmTn/1660557664300.jpg" alt="" />
                <img className="w-full h-64  border-4 border-red-500" src="https://i.postimg.cc/mktcq4ks/634c96a73a43d5bb56b6711d-YXOLMg-Tuwf8-X6l-b-JNsjz-L-h-LH4-MEQAC1-Yvi-S7-Ex-Ui-Vis-PNf6w-Wmz-Vhq4b-I33-O4r-DAa-Eq-Qe4-E.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;