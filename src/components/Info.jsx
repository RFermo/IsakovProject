import { FaArrowDown, FaArrowLeft } from "react-icons/fa";
import Isakov from "../images/isakov-img2.jpg";
import MusicFarm from "../images/music-farm.webp";

const Info = (props) => {
    return (
        <div className="xl:max-w-17/20 2xl:max-w-4/5 mx-auto mt-5 md:mt-8 lg:mt-12">

            <div id="slider" className="xs:w-full w-11/12 lg:w-4/5 xl:w-3/4 mx-auto flex flex-col md:flex-row items-center slide-in">
                <img className="w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full object-cover" src={Isakov} alt="Gregory Alan Isakov" />
                <span className="md:hidden border-l-4 h-10 border-gray-800"></span>
                <hr className="border-2 border-gray-800 hidden md:block md:w-1/4" />
                <div className="bg-gray-800 p-3 lg:p-5 xs:rounded-none rounded-lg md:ring-4 md:ring-red-50">
                    <h1 className="font-librefranklin font-semibold text-gray-200 text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-center lg:leading-snug 2xl:leading-normal">Welcome to Gregory Alan Isakov's website. Here, you will get to know the artist in detail.</h1>
                </div>
            </div>

            <hr className="border border-black xl:border-gray-100 mt-8 xl:mt-12" />

            <div className="mt-10 md:mt-20 flex flex-col xl:flex-row items-center space-y-9 xl:space-y-0">
                <div className="xs:w-full w-11/12 md:w-2/3 lg:w-5/6">
                    <div id="slider" className="bg-gray-200 lg:w-10/12 xl:w-4/5 mx-auto xs:rounded-none rounded-lg p-3 ring-4 ring-green-600 slide-in xl:h-full">
                        <h1 className="text-lg md:text-xl lg:text-2xl text-center xl:leading-snug 2xl:leading-normal text-gray-800 font-librefranklin font-semibold">From producing wonderful songs to growing crops on his small farm in Colorado, Isakov is an <span className="underline">icon</span> of folk music around the world.</h1>
                    </div>
                </div>

                <div>
                    <FaArrowLeft className="w-14 h-14 xl:w-16 xl:h-16 hidden xl:block text-gray-100 left-bounce "/>
                    <FaArrowDown className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:hidden text-gray-800 md:text-gray-200 animate-bounce "/>
                </div>

                <div className="xs:w-full w-11/12 md:w-2/3 lg:w-5/6">
                    <img className="lg:w-10/12 xl:w-4/5 mx-auto xs:rounded-none rounded-lg mb-14 lg:mb-0" src={MusicFarm} alt="Gregory Alan Isakov on a farm" />
                </div>
                
            </div>
        </div>
    );
}
 
export default Info;