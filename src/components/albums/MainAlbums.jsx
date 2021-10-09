const MainAlbums = (props) => {
    return (
        <div className="inline-block pr-1 md:pr-3 lg:pr-0">
            <div data-aos={props.flip} className="w-72 h-72 xl:w-80 xl:h-96 2xl:w-96 2xl:h-96 bg-gray-800 md:bg-gray-200 rounded-lg">
                <div>
                    <img className="h-40 xl:h-48 2xl:h-52 w-full object-fit rounded-t-lg" src={props.img} alt="" />
                </div>

                <div className="text-center mt-3 xl:my-10 2xl:my-7">
                    <h1 className="text-gray-200 md:text-gray-800 font-librefranklin xl:text-xl py-1">Album: <span className="font-semibold">{props.title}</span></h1>
                    <h1 className="text-gray-200 md:text-gray-800 font-librefranklin xl:text-xl py-1">Date of release: <span className="font-semibold">{props.date}</span></h1>
                    <h1 className="text-gray-200 md:text-gray-800 font-librefranklin xl:text-xl py-1">Songs: <span className="font-semibold">{props.numSongs}</span></h1>
                </div>
            </div>
        </div>
    );
}
 
export default MainAlbums;