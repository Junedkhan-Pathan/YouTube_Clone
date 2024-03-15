import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import RelatedVideos from "../components/VideosComponents/RelatedVideos";
import { getAllVideos } from "../apis/youTubeApis";
import { useDispatch, useSelector } from "react-redux";
import { addQueryData } from "../store/queryDataSlice";

const RelatedVideoPage = () => {
  const storedQureyData = useSelector((state) => state.query);
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      if (storedQureyData["All"]) {
        setVideos(storedQureyData["All"]);
      } else {
        const videos = await getAllVideos();
        if (!videos) {
          throw new Error("Somthing went wrong while fetching releted videos");
        }
        setVideos(videos);
        dispatch(addQueryData({ ["All"]: videos }));
      }
    } catch (error) {
      setError(error);
      console.log("Error while fething the releted videos..", error);
    }
  };

  return (
    <div className="md:flex md:flex-col max-sm:flex max-sm:flex-col lg:gap-x-5 md:gap-x-6 max-sm:mt-8 md:gap-y-10 lg:gap-y-6  max-sm:gap-y-10 my-5">
      {videos.map((video) => (
        <NavLink to={`/watch?v=${video.id}`} key={video.id}>
          <RelatedVideos info={video} />
        </NavLink>
      ))}
    </div>
  );
};

export default RelatedVideoPage;
