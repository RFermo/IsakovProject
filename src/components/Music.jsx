import useFetch from "./useFetch";
import {useEffect} from "react";
import Albums from "./albums/Albums";

// Animate on scroll 
import Aos from "aos";
import "aos/dist/aos.css";

const Music = () => {

    useEffect(() => {
        Aos.init({duration: 1000}); // Aos Initialization
    }, []);

    setTimeout(() => {Aos.refresh();}, 500); // This line of code refreshes Aos so that animation works properly when fetching albums.

    const {albums: {items}, isPending, error} = useFetch("https://api.spotify.com/v1/artists/5sXaGoRLSpd7VeyZrLkKwt/albums?limit=7", "allAlbums"); // Gets 6 major albums.

    return (
        <div>
            <div className="max-w-9/10 md:max-w-3/5 lg:max-w-3/4 xl:max-w-17/20 2xl:max-w-4/5 mx-auto">
                <div className="bg-yellow-800 w-max mx-auto px-8 py-4 shadow-xl rounded-lg cursor-default mt-14 slide-in">
                    <h1 className="font-merriweather font-bold text-2xl md:text-3xl xl:text-4xl text-green-50">Isakov's albums</h1>
                </div>

                {/* Handling data fetching errors. */}

                {error && 
                    <div className="mt-14">
                        <h1 className="font-librefranklin xl:text-3xl text-center">{error}</h1>
                    </div>
                }

                {/* Loading albums... */}

                {isPending &&
                    <div className="flex justify-center space-x-2 animate-pulse mt-16">
                        <div className="w-4 h-4 lg:w-8 lg:h-8 bg-gray-800 rounded-full"></div>
                        <div className="w-4 h-4 lg:w-8 lg:h-8 bg-gray-800 rounded-full"></div>
                        <div className="w-4 h-4 lg:w-8 lg:h-8 bg-gray-800 rounded-full"></div>
                    </div>
                }

                <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-10 md:gap-14 ${error ? "mt-8" : "mt-14 mb-24"}`}>

                    {items && items.map((item) => {
                        
                        if (item.name.length > 25) {
                            item.name = item.name.slice(0, 20) + "...";
                        }

                        return (
                            <Albums
                                key={item.id}
                                name={item.name}
                                img={item.images[0].url}
                                id={item.id}
                            />
                        );
                    })}
                </div>
            </div>

            <div className={`${isPending ? "hidden" : "block"} bg-gray-800 mt-10`}>
                <div className="max-w-9/10 md:max-w-3/5 lg:max-w-17/20 2xl:max-w-4/5 mx-auto">
                    <div className="flex flex-col lg:flex-row 2xl:max-w-17/20 mx-auto py-16 xl:py-24 space-y-10 lg:space-y-0 lg:space-x-24 items-center">
                        <div data-aos="fade-right" className="lg:w-1/2 bg-gray-200 h-48 flex items-center rounded-lg px-4">
                            <h1 className="font-librefranklin font-semibold text-center text-gray-800 text-lg md:text-xl xl:text-2xl">San Luis is by far Isakov's <span className="underline">most popular song</span>. In this video shot by Andy Mann, we can see some amazing landscape scenes featuring the Great Sand Dunes National Park.</h1>
                        </div>
                        <div data-aos="fade-left" className="lg:w-1/2 w-full">
                            <iframe className="w-full h-64 md:h-80" src="https://www.youtube.com/embed/7BJ7MDOmLPE" title="YouTube video player" frameBorder="0"  allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Music;