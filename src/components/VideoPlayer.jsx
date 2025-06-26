const VideoPlayer = ({ videoUrl, onEnd }) => {
  return (
    <video
      key={videoUrl}
      src={videoUrl}
      controls
      autoPlay
      onEnded={onEnd}
      className="w-full rounded-lg"
    />
  );
};

export default VideoPlayer;
