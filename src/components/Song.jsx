// AudioPlayer imports

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Song = (props) => {
    return (
        <div className="xl:max-w-3/5 mx-auto">
            <div className="flex flex-col">
                <div className="flex flex-col space-y-7 xl:flex-row xl:space-y-0 justify-between items-center py-8">
                    <div>
                        <h2 className="text-gray-200 text-2xl font-librefranklin font-semibold">
                            {props.trackNum}. <span className="pl-1.5">{props.name}</span>
                        </h2>
                        <p className="text-gray-200 font-librefranklin pt-1">Duration: {props.trackDuration}</p>
                    </div>

                    <div>
                        <AudioPlayer 
                            className="rounded-lg"
                            src={props.preview}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Song;