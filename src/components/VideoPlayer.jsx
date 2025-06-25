const VideoPlayer = ({ videoUrl }) => {
  if (!videoUrl)
    return (
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="aspect-video bg-gray-950 flex items-center justify-center relative">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-2xl font-bold">!</span>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Video unavailable
            </h3>
            <p className="text-gray-400 mb-4">
              Playback on other websites has been disabled by the video owner
            </p>
            <button className="text-blue-400 underline hover:text-blue-300 transition-colors">
              Watch on YouTube
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <iframe
        className="aspect-video w-full"
        src={videoUrl}
        title="Video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
