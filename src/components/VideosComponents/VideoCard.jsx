import React, { useState, useEffect } from "react";
import {
  timeDuration,
  formatTime,
  formatNumberWithSuffix,
} from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { getChannelInfo, getVideoDataById } from "../../apis/videoApi";
import { useDispatch } from "react-redux";
import { addChannel } from "../../store/channelSlice";

const VideoCard = ({ info, videoId }) => {
  const [videos, setVideos] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [channelPhoto, setChannelPhoto] = useState("");
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  useEffect(() => {
    if (info) {
      channelData();
    }
  }, [info]);

  const channelData = async () => {
    try {
      const res = await getChannelInfo(info?.snippet?.channelId);
      if (!res) {
        return null;
      }
      setChannelPhoto(res.snippet?.thumbnails?.default?.url);
      // dispatch(addChannel(res));
    } catch (error) {
      console.log(
        "Erroe in the videocard component while fetching channelInfo",
        error
      );
    }
  };

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

  useEffect(() => {
    getVideosById();
  }, [videoId]);

  const { snippet, statistics, contentDetails } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const extractDuration =
    contentDetails?.duration || videos?.contentDetails?.duration || 0;
  const duration = timeDuration(extractDuration);
  const calender = formatTime(publishedAt);
  const views = statistics?.viewCount || videos?.statistics?.viewCount;
  const viewCount = views ? formatNumberWithSuffix(views) : 0;

  return (
    <div
      className="p-1 cursor-pointer md:w-[40.4vw] lg:w-[29vw] max-sm:w-[100%]"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className={"relative"}>
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center cursor-pointer justify-center rounded-2xl">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${info.id}?autoplay=1&mute=1`}
              title={info.snippet?.title}
              frameBorder="0"
              // allowFullScreen
              autoPlay
              className={`${
                isHovered ? "" : "rounded-2xl ease-in-out duration-100 "
              }`}
              onClick={() => {
                navigate(`/watch?v=${videoId}`);
              }}
            ></iframe>
          </div>
        )}
        <img
          src={thumbnails?.medium.url}
          alt="thumbnail"
          className="rounded-2xl w-[94%] mx-auto lg:w-[29vw] md:w-[40.4vw]"
        />
        <div className="absolute max-sm:bottom-1 max-sm:right-4 lg:bottom-1 lg:right-1 md:bottom-2 md:right-4 bg-black text-white px-2 py-1 rounded-lg text-xs">
          {duration}
        </div>
      </div>
      <div className="w-full flex gap-1 pt-3 max-sm:text-justify md:mx-auto mx-[1.2rem] md:text-justify">
        <div className="w-2/12 rounded-full">
          <img
            src={channelPhoto}
            alt="ChannelProfile"
            className="w-2/3 rounded-full"
          />
        </div>
        <div className="w-9/12 flex flex-col">
          <div className="overflow-hidden h-fit font-bold text-[16px]">
            {title.length > 65 ? title.trim().slice(0, 60) + "..." : title}
          </div>
          <Link to={`/channel?cId=${channelTitle.replace("", "+")}`}>
            <div className=" text-stone-600 hover:text-stone-900 font-medium md:text-[14px]">
              {channelTitle}
            </div>
          </Link>
          <div className="flex font-medium text-stone-600 text-sm justify-start items-center text-center">
            <div>{viewCount} views</div>
            <div className="font-extrabold mx-1">•</div>
            <div>{calender}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
