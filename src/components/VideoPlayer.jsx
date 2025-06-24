const VideoPlayer = () => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
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
        <button className="absolute bottom-4 right-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
          <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
        </button>
      </div>
      <div className="bg-gray-900 p-4 flex items-center justify-between">
        <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
          <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
        </button>
        <span className="text-gray-400 text-sm">0:00 / 1:40</span>
      </div>
    </div>
  );
};

export default VideoPlayer;
