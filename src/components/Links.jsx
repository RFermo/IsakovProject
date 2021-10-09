import {FaChild, FaMusic} from "react-icons/fa";
import {useEffect} from "react";
import MainAlbums from "./albums/MainAlbums";
import useFetch from "./useFetch";

// Animate on scroll 
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Links = () => {

    useEffect(() => {
        Aos.init({duration: 1000}); // Initialization
    }, []);

    // The API request below gets Isakov's most important albums to show in the home page.

    const {albums: {albums}, isPending, error} = useFetch("https://api.spotify.com/v1/albums?ids=5K7PZiOlAn8sxxhh0QTFuJ,3IcfYXw7lTtLfG5XWLlSZi,06UoTVgpPiGnRPGjowrG3g", "majorAlbums");

    return (
        <div>

            {/* Link to biography */}

            <div className="bg-gray-800 md:bg-gray-200 py-10 xl:py-20">
                <div data-aos="fade-up" className="max-w-11/12 xl:max-w-17/20 mx-auto">
                    <div>
                        <h1 className="font-librefranklin font-semibold text-gray-100 md:text-gray-800 text-center leading-relaxed text-lg lg:text-xl xl:text-2xl xl:leading-snug">
                            Want to find out about Isakov's beginnings in music and horticulture? Check out his biography page!
                        </h1>
                    </div>

                    <div className="group bg-gray-200 md:bg-gray-800 xl:bg-gray-200 xl:border-2 xl:border-gray-800 w-max mx-auto rounded-lg mt-5 xl:mt-8 overflow-hidden">
                        <a href="/biography" className="flex items-center text-gray-800 md:text-gray-200 xl:text-gray-800 space-x-2 px-4 py-1.5 xl:px-8 xl:py-3 fill-link group-hover:text-gray-100">
                            <FaChild className="w-5 h-5 xl:w-7 xl:h-7"/>
                            <span className="font-librefranklin font-semibold text-lg xl:text-2xl">Biography</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Link to music */}

            <div className="bg-gray-200 md:bg-gray-800 py-10 md:py-16 xl:py-20">
                <div className="max-w-11/12 lg:max-w-100 xl:max-w-17/20 mx-auto">

                    <div data-aos="fade-down">
                        <h1 className="font-librefranklin font-semibold text-gray-800 md:text-gray-200 text-center leading-relaxed text-lg lg:text-xl xl:text-2xl xl:leading-snug">
                            The albums filled with soul touching songs and truths... Isakov is a <span className="underline">master</span> at producing those.
                        </h1>
                    </div>
                    
                    {error && 
                        <div className="mt-10">
                            <h1 className="text-gray-800 md:text-gray-200 text-center font-librefranklin text-2xl">ERROR: Albums could not be fetched! Please try again later.</h1>
                        </div>
                    }

                    {isPending && 
                        <div className="flex justify-center space-x-2 animate-pulse mt-16">
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        </div>
                    }
                    
                    <div className="flex overflow-x-scroll overflow-y-hidden lg:overflow-hidden no-scrollbar mt-8 lg:mt-12 xl:mt-16 lg:justify-center">
                        <div className="flex flex-nowrap space-x-8 lg:space-x-16 xl:space-x-24">

                            {albums && albums.map((album) => {

                                if (album.name === "This Empty Northern Hemisphere") { // This is only for styling purposes since title is too long.
                                    album.name = "This Empty Northern..."
                                }

                                return (
                                    <MainAlbums
                                        key={album.id}
                                        title={album.name}
                                        date={album.release_date}
                                        img={album.images[0].url}
                                        numSongs={album.total_tracks}
                                        flip="flip-left"
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div className="group bg-gray-800 md:bg-gray-200 w-max mx-auto rounded-lg mt-12 xl:mt-16 overflow-hidden">
                        <Link to="/music" className="flex items-center text-gray-200 md:text-gray-800 space-x-6 px-4 py-1.5 xl:px-8 xl:py-3">
                            <FaMusic className="w-5 h-5 xl:w-7 xl:h-7"/>
                            <span className="font-librefranklin font-semibold text-lg lg:text-xl xl:text-2xl">Find out more about his music!</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Links;