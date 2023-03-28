import React from 'react'
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
// import song from '/assets/song.mp3'

export const SongPlayer = () => {

    const [isPlaying, setPlaying] = React.useState(false);

    function togglePlay() {
        !isPlaying ? document.getElementById('myAudio').play() : document.getElementById('myAudio').pause();
    }

    return (
        <div className="w-[100%] max-h-[100%] overflow-auto p-6 flex justify-center items-center">
            <audio controls src="/assets/song.mp3" id="myAudio" style={{ display: "none" }}>
            </audio>
            <div className="music-card">
                <div className="music-card-img"
                    style={{
                        background: `url(/assets/music.png)`,
                    }}
                >
                </div>
                <div className="controls-container">

                    {!isPlaying ?
                        <BsPlayCircle
                            className='play-btn'
                            onClick={() => {
                                setPlaying(old => !old)
                                togglePlay();

                            }}
                        /> :
                        <BsPauseCircle
                            className='pause-btn'
                            onClick={() => {
                                setPlaying(old => !old);
                                togglePlay();
                            }}
                        />}
                </div>
            </div>
        </div>
    )
}
