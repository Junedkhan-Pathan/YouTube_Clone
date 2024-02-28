import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import VideoShimmer from "../ShimmerUI/VideoShimmer";
import CustomError from "../Error/CustomError";
import { NavLink, useLocation } from "react-router-dom";
import { getAllVideos } from "../../apis/videoApi";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../../store/videosSlice";

const VideoContainer = () => {
  const videos = useSelector((state) => state.videos);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    getVideos();
  }, [location.state?.category]);

  const getVideos = async () => {
    setLoading(true);
    const category = location?.state?.category || "All";
    try {
      const videos = await getAllVideos(category);
      if (!videos) {
        throw new Error("Somthing went wrong while fetching videos");
      }
      dispatch(addVideos(videos));
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <CustomError message={error.message} />;
  }

  return (
    <div className="md:flex md:flex-wrap max-sm:flex max-sm:flex-col lg:gap-x-5 md:gap-x-6 md:gap-y-10 max-sm:gap-y-10 md:mt-20 max-sm:mt-16">
      {loading ? (
        <VideoShimmer />
      ) : (
        videos[0].map((video) => (
          <NavLink to={`/watch?v=${video.id}`}>
            <VideoCard info={video} videoId={video.id} key={video?.id} />
          </NavLink>
        ))
      )}
    </div>
  );
};

export default VideoContainer;
