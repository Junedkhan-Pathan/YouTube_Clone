import React, { useMemo, useState } from "react";
// import ChannelData from "../components/HomePageContainer/WatchPageData/ChannelData";
import { useSearchParams } from "react-router-dom";
import RelatedVideoPage from "./RelatedVideoPage";
import CommentsData from "../components/CommentsChats/CommentsData";
import LiveChat from "../components/CommentsChats/LiveChat";
import ChannelData from "../components/ChannelData";

const WatchPage = () => {
  // const [container, setContainer] = useState(true);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const videoSrc = useMemo(
    () => `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`,
    [videoId]
  );

  return (
    <div>
      <div
        className={`lg:flex max-sm:flex-col md:gap-4 md:mt-[4rem] max-sm:mt-[4.8rem] space-y-5 lg:space-y-0 md:mx-[1.82rem] max-sm:mx-[0.65rem] max-sm:w-[95vw] md:w-[92.5vw] lg:w-[64.5vw]`}
      >
        <div>
          <div>
            <iframe
              className="rounded-2xl max-sm:w-[95vw] max-sm:h-[28vh] md:w-[92.5vw] md:h-[40vh] lg:w-[64.5vw] lg:h-[81vh] object-cover"
              src={videoSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <ChannelData videoId={videoId} />
          </div>
          <div className="md:hidden max-sm:hidden lg:block">
            <CommentsData videoId={videoId} />
          </div>
        </div>
        <div>
          <LiveChat />
          <RelatedVideoPage />
        </div>
      </div>
      <div className="lg:hidden">
        <CommentsData videoId={videoId} />
      </div>
    </div>
  );
};

export default WatchPage;
