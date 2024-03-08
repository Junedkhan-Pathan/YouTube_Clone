import React, { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import Comments from "./Comments";
import { getCommentsOfVideos } from "../../apis/youTubeApis";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../../store/commentsSlice";

const CommentsData = ({ videoId }) => {
  const storedComments = useSelector((state) => state.comments);
  const [comments, setComments] = useState([]);
  const dipatch = useDispatch();

  const getComments = async () => {
    if (!videoId) return;
    try {
      if (storedComments[videoId]) {
        setComments(storedComments[videoId]);
      } else {
        const comments = await getCommentsOfVideos(videoId);
        if (!comments) return;
        setComments(comments);
        dipatch(addComments({ [videoId]: comments }));
      }
    } catch (error) {
      console.log(
        "Error while fething the comments of video in components",
        error
      );
    }
  };

  useEffect(() => {
    getComments();
  }, [videoId]);

  return (
    <div className="md:mx-[1.82rem] lg:mx-0 max-sm:mx-[0.65rem] max-sm:w-[95vw] md:w-[92.5vw] lg:w-[64.5vw] lg:my-3">
      <div className="flex items-center gap-x-8">
        <span className="font-bold text-lg cursor-pointer">
          {comments.length} Comments
        </span>
        <div className="flex items-center gap-1">
          <BiMenuAltLeft className="text-3xl cursor-pointer" />
          <span className="font-bold cursor-pointer">Sort by</span>
        </div>
      </div>
      <div className="border border-gray-200 rounded-xl my-3 py-3 px-5">
        <ul>
          {comments.map((comment, index) => (
            <Comments key={index} info={comment} isReply={false} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentsData;
