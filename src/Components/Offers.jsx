import Marquee from "react-fast-marquee";
const Offers = () => {
    return (
        <div className="flex items-center justify-center bg-white px-4">
            <div>
                <button className="btn lg:text-2xl font-bold btn-secondary">Offers</button>
            </div>
            <div>
                <Marquee className="lg:text-3xl " speed={150} pauseOnHover>
                <span className="text-blue-600  font-semibold">30% discount within 20th December </span> <span className="text-red-600 font-semibold mx-5 lg:mx-20">20% Discount within 31 January</span>
                </Marquee>
            </div>
        </div>
        
    );
};

export default Offers;