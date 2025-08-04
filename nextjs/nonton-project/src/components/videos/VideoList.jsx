import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  return (
    <div className="grid grid-cols-5 gap-8">
      {videos.items.map((video, i) => (
        <VideoItem key={i} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
