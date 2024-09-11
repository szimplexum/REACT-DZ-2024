import { useRef } from "react";

function VideoPlayer() {
    const videoRef = useRef();

    const handleEnter = () => {
        videoRef.current.play();
    };

    const handleLeave = () => {
        videoRef.current.pause();
    };

    return (
        <video
            ref={videoRef}
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            width={500}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            muted
        />
    );
}

export default VideoPlayer;
