import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import VideoShimmer from "../ShimmerUI/VideoShimmer";
import CustomError from "../Error/CustomError";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { getAllVideos } from "../../apis/videoApi";
// import { useDispatch, useSelector } from "react-redux";
// import { addVideos } from "../../store/videosSlice";
import CategoryList from "../CategoryList";

const VideoContainer = () => {
  // const storedVideos = useSelector((state) => state.videos);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams, _] = useSearchParams();
  const channelName = searchParams.get("cId");

  useEffect(() => {
    getVideos();
  }, [location.state?.category, channelName]);

  const getVideos = async () => {
    setLoading(true);
    const category = location?.state?.category || channelName || "All";
    try {
      const videos = await getAllVideos(category);
      if (!videos) {
        throw new Error("Somthing went wrong while fetching videos");
      }
      setVideos(videos);
      // dispatch(addVideos(videos));
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log("Error while fething the videos in video container", error);
    }
  };

  if (error) {
    return <CustomError message={error.message} />;
  }

  return (
    <>
      <div className="flex flex-col gap-6 md:my-[3.81rem] lg:w-[90.40vw] md:w-[84.2vw] max-sm:w-[100vw] max-sm:my-[4.6rem] max-sm:mx-auto md:mx-24">
        <CategoryList />
        <div className="md:flex md:flex-wrap max-sm:flex max-sm:flex-col lg:gap-x-5 md:gap-x-6 md:gap-y-10 max-sm:gap-y-10 md:mt-20 max-sm:mt-16">
          {loading ? (
            <VideoShimmer />
          ) : (
            videos.map((video, index) => (
              <NavLink
                key={index}
                to={`/watch?v=${
                  typeof video.id !== "object" ? video.id : video?.id?.videoId
                }`}
              >
                <VideoCard
                  info={video}
                  videoId={video?.id?.videoId}
                  key={video.id || video?.id?.videoId}
                />
              </NavLink>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default VideoContainer;
