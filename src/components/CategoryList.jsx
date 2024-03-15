import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CategoryTagShimmer from "./ShimmerUI/CategoryTagShimmer";
import { DummyTags } from "../utils/constants";
import { getVideoCategoryTags } from "../apis/youTubeApis";
import { PreviousButtonIcon, NextButtonIcon } from "../assets/Index.js";
import { useDispatch, useSelector } from "react-redux";
import { addTags } from "../store/tagsSlice.js";

const CategoryList = () => {
  const storedTags = useSelector((state) => state.tags);
  const listRef = useRef();
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [hideButton, setHideButton] = useState("previous");
  const dispatch = useDispatch();

  const fetchTags = async () => {
    setLoading(true);
    if (storedTags && storedTags.length > 0) {
      setTags(["All", ...storedTags[0]]);
    } else {
      const data = await getVideoCategoryTags();
      if (!data) {
        setTags(["All", ...DummyTags]);
      }
      setTags(["All", ...data]);
      dispatch(addTags(data));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTags();
  }, []);

  const sliderHandler = (direction) => {
    const box = listRef.current;
    const scrollWidth = box.scrollWidth;
    const clientWidth = box.clientWidth;
    const slideWidth = Math.floor(box.clientWidth / 3);
    if (direction) {
      box.scrollLeft += direction === "previous" ? -slideWidth : slideWidth;
    }
    if (box.scrollLeft == 0) {
      setHideButton("previous");
    }
    if (box.scrollLeft >= 10 && box.scrollLeft <= scrollWidth) {
      setHideButton("");
    }
    if (box.scrollLeft + clientWidth == scrollWidth) {
      setHideButton("next");
    }
  };

  return (
    <div className="fixed z-10 lg:w-[90.2vw] md:w-[84.2vw] max-sm:w-[94vw] max-sm:mx-3 bg-white md:pt-3">
      {/* Tags swipe buttons  */}
      <div className={`${loading ? "hidden" : ""} max-sm:hidden`}>
        <div className={hideButton === "previous" ? "hidden" : ""}>
          <button
            className="bg-white absolute left-0"
            onClick={() => sliderHandler("previous")}
          >
            <div className="w-8 p-1 bg-white rounded-full hover:bg-gray-200">
              <PreviousButtonIcon />
            </div>
          </button>
        </div>
        <div className={hideButton === "next" ? "hidden" : ""}>
          <button
            className="bg-white absolute right-0 "
            onClick={() => sliderHandler("next")}
          >
            <div className="w-8 p-1  bg-white rounded-full hover:bg-slate-200">
              <NextButtonIcon />
            </div>
          </button>
        </div>
      </div>

      {/* tags  */}
      <div className="overflow-x-auto transition-transform duration-300 ease-in-out">
        <ul
          onScroll={() => sliderHandler()}
          className="flex text-sm gap-4 overflow-y-auto scrollBar whitespace-nowrap scroll-smooth"
          ref={listRef}
        >
          {loading ? (
            <CategoryTagShimmer />
          ) : (
            <>
              {tags.length > 0 && (
                <section className="space-x-2">
                  {tags.map((name, index) => {
                    return (
                      <button
                        key={index}
                        className={`font-semibold bg-gray-100 hover:bg-gray-900 hover:text-white hover:transition duration-500 px-[12px] py-[6px] rounded-lg ${
                          selectedCategory === name
                            ? "bg-gray-900 text-white"
                            : ""
                        }`}
                        onClick={() => {
                          navigate("/", {
                            state: {
                              category: `${name.replace(" ", "+")}`,
                            },
                          });

                          setSelectedCategory(name);
                        }}
                      >
                        {name}
                      </button>
                    );
                  })}
                </section>
              )}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
