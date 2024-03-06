import React, { useState, useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import CustomError from "./Error/CustomError";
import SearchVideoPage from "../pages/SearchVideoPage";
import SearchVideoShimmer from "./ShimmerUI/SearchVideoShimmer";
import CategoryList from "./CategoryList";
import { getAllVideos } from "../apis/youTubeApis";
import ScrollToTop from "../utils/ScrollToTop";

const SearchResults = () => {
  const [searchParam] = useSearchParams();
  const searchQuery = searchParam.get("search_query");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVideos();
  }, [searchQuery]);

  const getVideos = async () => {
    setLoading(true);
    try {
      const videos = await getAllVideos(searchQuery);
      if (!videos) {
        throw new Error("Somthing went wrong while fetching search videos");
      }
      setVideos(videos);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(
        "Error while fething the search videos in Search Results",
        error
      );
    }
  };

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col gap-6 md:my-[3.81rem] lg:w-[90.2vw] md:w-[84.2vw] max-sm:w-[100%] max-sm:my-[4.6rem] max-sm:mx-auto md:mx-24">
        <div>
          <CategoryList />
        </div>
        <div className="text-center text-lg md:mt-6 max-sm:mt-6 max-sm:mx-[0.68rem]">
          {error && (
            <h1>
              Unable to show any results for :{" "}
              <span className="font-bold">{searchQuery}</span>
            </h1>
          )}
        </div>
        <div className="md:flex md:flex-col max-sm:flex max-sm:flex-col lg:gap-x-5 md:gap-x-6 max-sm:mt-2 md:gap-y-8 max-sm:gap-y-6">
          {loading ? (
            <SearchVideoShimmer />
          ) : error ? (
            <div className="">
              <CustomError message="Unable to fetch the request for now!" />
            </div>
          ) : (
            videos.map((video) => (
              <NavLink
                to={"/watch?v=" + video?.id?.videoId}
                key={video?.id?.videoId}
              >
                <SearchVideoPage info={video} videoId={video?.id?.videoId} />
              </NavLink>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
