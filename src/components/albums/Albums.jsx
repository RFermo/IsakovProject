import {Link} from "react-router-dom";
import {HiArrowLeft, HiArrowRight} from "react-icons/hi";
import Typewriter from "typewriter-effect";

const Albums = (props) => {

    return (
        <div className="shadow-xl">
            <img className="h-64 w-full object-fit" src={props.img} alt="Album" />
            <div className="mt-3">

                <div className="mx-auto w-max">
                    <Typewriter
                        options={{
                            wrapperClassName: "font-courgette text-3xl text-gray-800",
                            delay: 55,
                            cursorClassName: "text-gray-800"
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString(`${props.name}`)
                            .callFunction((state) => {
                                state.elements.cursor.style.display = "none";
                            })
                            .start();
                        }}
                    >
                    </Typewriter>
                </div>
                        
                <div className="group w-max mx-auto border-2 border-gray-800 rounded-lg my-5">
                    <Link to={`/albums/${props.id}`} className="flex items-center space-x-4 px-5 py-2 text-gray-800 group-hover:text-gray-100 fill-link">
                        <HiArrowRight className="w-5 h-5 right-bounce" />
                        <p className="font-librefranklin font-semibold text-lg md:text-xl">Check it out!</p>
                        <HiArrowLeft className="w-5 h-5 left-bounce" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Albums;