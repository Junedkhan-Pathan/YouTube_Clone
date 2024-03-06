import React, { useState, useEffect } from "react";
import {
  formatTime,
  formatNumberWithSuffix,
  timeDuration,
} from "../utils/constants";
import { getChannelInfo, getVideoDataById } from "../apis/youTubeApis";

const SearchVideoPage = ({ info, videoId }) => {
  const [videos, setVideos] = useState([]);
  const [channelPicture, setChannelPicture] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const { snippet } = info;
  const { title, thumbnails, publishedAt, description, channelTitle } = snippet;

  const viewCount = formatNumberWithSuffix(videos?.statistics?.viewCount);
  let calender = formatTime(publishedAt);
  const duration = timeDuration(videos?.contentDetails?.duration);

  const getVideosById = async () => {
    try {
      if (!videoId) return;
      const video = await getVideoDataById(videoId);
      if (!video) {
        return null;
      }
      setVideos(video || {});
    } catch (error) {
      console.log("Error while fethnig video by its id", error);
    }
  };

  const channelData = async (id) => {
    try {
      const res = await getChannelInfo(id);
      if (!res) {
        return null;
      }
      setChannelPicture(res.snippet?.thumbnails?.default?.url);
    } catch (error) {
      console.log(
        "Erroe in the searchVideo component while fetching channelInfo",
        error
      );
    }
  };

  useEffect(() => {
    getVideosById();
  }, [videoId]);

  useEffect(() => {
    if (info?.snippet?.channelId) {
      channelData(info?.snippet?.channelId);
    }
  }, [info?.snippet?.channelId]);

  return (
    <div
      className="md:flex max-sm:flex-col cursor-pointer lg:w-[90vw] md:w-[84.2vw] max-sm:w-[100%] md:mx-auto md:gap-x-3"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="relative">
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center cursor-pointer justify-center rounded-2xl">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${info?.id?.videoId}?autoplay=1&mute=1`}
              title={info?.snippet?.title}
              frameBorder="0"
              allowFullScreen
              autoPlay
              className="rounded-2xl"
            ></iframe>
          </div>
        )}

        <div className="rounded-2xl w-[100%] mx-auto lg:w-[29vw] md:w-[38.4vw] object-cover">
          <img
            src={thumbnails.medium.url}
            alt="thumbnail"
            className="rounded-2xl w-[94%] mx-auto lg:w-[29vw] md:w-[38.4vw] object-cover"
          />
          <div className="absolute max-sm:bottom-1 max-sm:right-4 lg:bottom-1 lg:right-1 md:bottom-1 md:right-2 bg-black text-white px-2 py-1 rounded-lg text-xs">
            {duration}
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-col justify-start items-start max-sm:flex max-sm:flex-col max-sm:space-y-2 max-sm:my-2 max-sm:gap-y-2  lg:space-y-6 max-sm:mx-[0.85rem]">
        <div className="md:flex md:flex-col max-sm:flex max-sm:flex-col">
          <h1 className="font-medium md:text-md lg:text-lg">{title}</h1>
        </div>
        <div className="text-stone-600 md:flex md:gap-1 text-xs max-sm:flex max-sm:gap-1">
          <span>{viewCount} Views</span>
          <span>•</span>
          <span>{calender}</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={channelPicture}
            alt="ChannelProfile"
            className="rounded-full w-8 max-sm:w-8"
          />
          <span className="text-stone-600 hover:text-stone-900 text-sm">
            {channelTitle}
          </span>
        </div>
        <div className="text-stone-600 text-sm">
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoPage;
