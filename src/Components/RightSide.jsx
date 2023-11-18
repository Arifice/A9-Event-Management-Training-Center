import Marquee from "react-fast-marquee";
const RightSide = () => {
    return (
        <div className="flex  flex-col-reverse">            

            <div className="w-full p-4">
                
                <Marquee direction="left" speed={100} pauseOnHover>
                    <img className="w-full h-64 mx-5 border-4 border-red-500 " src="https://i.postimg.cc/QMFNqCWj/shutterstock-1175731426-497x500.jpg" alt="" />
                    <img className="w-full h-64 mx-5 border-4 border-red-500" src="https://i.postimg.cc/y6j5VHdH/images-2.jpg" alt="" />
                    <img className="w-full h-64 mx-5 border-4 border-red-500" src="https://i.postimg.cc/pTW6bGKC/istockphoto-1061642360-612x612.jpg" alt="" />
                    <img className="w-full h-64 mx-5 border-4 border-red-500" src="https://i.postimg.cc/Z5mgx50X/images-1.jpg" alt="" />
                    <img className="w-full h-64 mx-5 border-4 border-red-500" src="https://i.postimg.cc/4yLdbSQS/images.jpg" alt="" />                    
                    <img className="w-full h-64 mx-5 border-4 border-red-500" src="https://i.postimg.cc/pdbDFmTn/1660557664300.jpg" alt="" />
                    <img className="w-full h-64 mx-5 border-4 border-red-500" src="https://i.postimg.cc/mktcq4ks/634c96a73a43d5bb56b6711d-YXOLMg-Tuwf8-X6l-b-JNsjz-L-h-LH4-MEQAC1-Yvi-S7-Ex-Ui-Vis-PNf6w-Wmz-Vhq4b-I33-O4r-DAa-Eq-Qe4-E.jpg" alt="" />
                    
                </Marquee>
            </div>
        </div>
    );
};

export default RightSide;