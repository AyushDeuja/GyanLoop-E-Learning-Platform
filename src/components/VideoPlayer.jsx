const VideoPlayer = ({ videoUrl, onEnd }) => {
  return (
    <video
      src={videoUrl}
      controls
      autoPlay
      onEnded={onEnd}
      className="w-full rounded-lg"
    />
  );
};

export default VideoPlayer;
