import { SearchInput } from "@/components/SearchInput";
import VideoList from "@/components/videos/VideoList";
import { apikey } from "@/constant";
import React from "react";

async function fetchVideo(query) {
  let url = new URL(`https://www.googleapis.com/youtube/v3/search?q=${query}&key=${apikey}`);

  url.searchParams.set("maxResults", "20");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("type", "video");

  try {
    const video = await fetch(url);
    return video.json();
  } catch (error) {
    console.log(error);
  }
}

const Videos = async ({ searchParams }) => {
  const videos = await fetchVideo(searchParams.query);
  console.log(videos);
  return (
    <div>
      <div className="w-1/2">
        <SearchInput />
      </div>
      <div className="mt-8">
        {/* Video list */}
        <VideoList videos={videos} />
      </div>
    </div>
  );
};

export default Videos;
