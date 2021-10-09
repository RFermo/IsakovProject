import useFetch from "../useFetch";
import {useParams} from "react-router";
import Song from "../Song";

const OneAlbum = () => {

    const {id} = useParams();
    const {albums, isPending, error, tracks} = useFetch(`https://api.spotify.com/v1/albums/${id}`, "one");

    const millisToMinsAndSecs = (millis) => {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return (seconds === 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
    };

    return (
        <div className="max-w-17/20 md:max-w-3/5 xl:max-w-3/5 2xl:max-w-4/5 mx-auto">

            <div className={`${isPending || error ? "hidden" : "block"} 2xl:max-w-3/5 mx-auto mt-10 xl:mt-20 flex flex-col lg:flex-row items-center space-y-6 xl:space-y-0`}>
                <div className="lg:w-1/2">
                    <h1 className="font-librefranklin font-semibold text-3xl xl:text-4xl pb-3 md:py-1.5">{albums.albumName}</h1>
                    <p className="font-librefranklin xl:text-lg py-1.5">
                        Album tracks: <span className="pl-1 font-semibold">{albums.totalTracks}</span>
                    </p>
                    <p className="font-librefranklin xl:text-lg py-1.5">
                        Release date: <span className="pl-1 font-semibold">{albums.releaseDate}</span>
                    </p>
                    <p className="font-librefranklin xl:text-lg py-1.5">
                        Label: <span className="pl-1 font-semibold">{albums.label}</span>
                    </p>
                </div>
                <div className="lg:w-1/2 w-full">
                    <img className="h-56 xl:h-72 w-full object-fit" src={albums.img} alt="Album" />
                </div>
            </div>

            <div className="2xl:max-w-3/5 mx-auto mt-12 lg:mt-20">
                <div className={`bg-gray-800 rounded-lg ${error ? "p-8 w-max mx-auto" : null} ${isPending ? "flex items-center justify-center h-44" : null}`}>

                    {isPending && 
                        <div className="flex justify-center space-x-2 animate-pulse">
                            <div className="w-4 h-4 lg:w-8 lg:h-8 bg-gray-200 rounded-full"></div>
                            <div className="w-4 h-4 lg:w-8 lg:h-8 bg-gray-200 rounded-full"></div>
                            <div className="w-4 h-4 lg:w-8 lg:h-8 bg-gray-200 rounded-full"></div>
                        </div>
                    }

                    {error && 
                        <div>
                            <h1 className="text-center text-gray-200 text-3xl">Data could not be fetched. Please try again later.</h1>
                        </div>
                    }

                    {tracks && tracks.map((track) => {

                        const track_mins_secs = millisToMinsAndSecs(track.duration_ms);

                        return (
                            <div key={track.id}>
                                <Song
                                    name={track.name}
                                    trackNum={track.track_number}
                                    trackDuration={track_mins_secs}
                                    preview={track.preview_url}
                                />
                                <div className="border-t-2"></div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}
 
export default OneAlbum;