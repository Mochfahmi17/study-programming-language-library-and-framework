import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const VideoItem = ({ video }) => {
  return (
    <Card>
      <CardContent>
        <Link href={`/videos/${Video.id.videoId}`}>
          <Image src={video.snippet.thumbnails.medium.url} width={500} height={500} alt="" />
        </Link>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-lg">{video.snippet.channelTitle.slice(0, 20)}</h2>
          <h5 className="font-bold text-sm">{video.snippet.title.slice(0, 20)} ...</h5>
        </div>
      </CardFooter>
    </Card>
  );
};

export default VideoItem;
