import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

import MountainStage from "../images/MountainStage.jpg";
import Farm from "../images/Farm.JPG";
import SanLuis from "../images/SanLuis.jpg"
import Trapeze from "../images/Trapeze.jpg";
import Art from "../images/Art.jpg"
import Chilling from "../images/Chilling.jpg";

const Photography = () => {
    return (
        <div className="max-w-9/10 md:max-w-3/4 mx-auto mt-10 mb-14 md:mt-20 md:mb-28">
            <div className="flex flex-col xl:flex-row align-center items-center space-y-10 md:space-y-14 xl:space-x-12">

                <div id="slider" className="xl:w-1/2 slide-in">
                    <h1 className="font-librefranklin font-semibold text-center tracking-wide text-xl md:text-2xl lg:text-3xl xl:text-5xl xl:leading-tight">"And the <span className="underline">photographs</span> know I'm a liar, they just laugh as I burn down."</h1>
                    <p className="text-right mt-2 font-librefranklin text-sm">Lyric taken from track "If I Go, I'm Goin"</p>
                </div>

                <div className="xl:w-1/2">
                    <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} interval={5000}>
                        <div>
                            <img className="object-cover" src={MountainStage} alt="Culture Center" />
                            <p className="legend bg-opacity-100 font-librefranklin">Isakov performing at the Culture Center Theater in Charleston, West Virginia.</p>
                        </div>
                        
                        <div>
                            <img className="object-cover" src={SanLuis} alt="YouTube snapshot" />
                            <p className="legend bg-opacity-100 font-librefranklin">Snapshot of Isakov's most watched YouTube video: San Luis.</p>
                        </div>

                        <div>
                            <img className="object-cover" src={Farm} alt="Farm work"/>
                            <p className="legend bg-opacity-100 font-librefranklin">Isakov working at his farm in Boulder County, Colorado.</p>
                        </div>

                        <div>
                            <img className="object-cover" src={Trapeze} alt="YouTube cover" />
                            <p className="legend bg-opacity-100 font-librefranklin">Isakov inspired as he performs a cover of the song <span className="italic">Trapeze Swinger</span>.</p>
                        </div>

                        <div>
                            <img className="object-cover" src={Art} alt="Artwork" />
                            <p className="legend bg-opacity-100 font-librefranklin">Brilliant piece of artwork.</p>
                        </div>

                        <div>
                            <img className="object-cover" src={Chilling} alt="Chilling" />
                            <p className="legend bg-opacity-100 font-librefranklin">Chilling at home doing what he does best.</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
 
export default Photography;