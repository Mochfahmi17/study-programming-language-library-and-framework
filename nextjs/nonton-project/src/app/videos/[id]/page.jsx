import { apikey } from "@/constant";
import React, { use } from "react";

const fetchVideo = async (id) => {
  let url = new URL(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apikey}`);

  url.searchParams.set("part", "snippet");
  url.searchParams.set("type", "video");

  try {
    const video = await fetch(url);
    return video.json();
  } catch (error) {
    console.log(error);
  }
};

export async function generateMetadata({ params }) {
  // read route params
  const id = (await params).id;

  // fetch data
  const video = await fetchVideo(id);

  return {
    title: video.items[0].snippet.title,
  };
}

const VideoDetailPage = async ({ params }) => {
  const videoSrc = `https://www.youtube.com/embed/${params.id}`;
  const video = await fetchVideo(params.id);
  return (
    <div className="px-8 grid grid-cols-10 gap-4">
      <div className="col-span-7">
        <div className="w-full">
          <iframe src={videoSrc} className="w-full h-[35rem]" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-lg">{video.items[0].snippet.title}</h2>
          <h5 className="font-bold text-sm">{video.items[0].snippet.channelTitle}</h5>
          <p className="text-slate-400 text-base">{video.items[0].snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetailPage;
