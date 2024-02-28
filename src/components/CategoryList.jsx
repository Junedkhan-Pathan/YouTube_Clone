import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CategoryTagShimmer from "./ShimmerUI/CategoryTagShimmer";
import { DummyTags } from "../utils/constants";
import { getVideoCategoryTags } from "../apis/videoApi";
import NextButton from "../assets/light_44.svg";
import PreviouButton from "../assets/light_43.svg";

const CategoryList = () => {
  const listRef = useRef();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [hideButton, setHideButton] = useState("previous");
  const [tags, setTags] = useState([]);

  const fetchTags = async () => {
    setLoading(true);
    const data = await getVideoCategoryTags();
    if (!data) {
      setTags(["All", ...DummyTags]);
    } else {
      setTags(["All", ...data]);
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
            className="bg-white absolute left-0 "
            onClick={() => sliderHandler("previous")}
          >
            <img
              src={PreviouButton}
              alt=""
              className="w-8 h-8 mx-1 bg-white rounded-full hover:bg-gray-200"
            />
          </button>
        </div>
        <div className={hideButton === "next" ? "hidden" : ""}>
          <button
            className="bg-white absolute right-0 "
            onClick={() => sliderHandler("next")}
          >
            <img
              src={NextButton}
              alt=""
              className="w-8 h-8 mx-1 bg-white rounded-full hover:bg-slate-200"
            />
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
                        className={`bg-gray-100 hover:bg-gray-900 hover:text-white hover:transition duration-500 px-[12px] py-[6px] rounded-lg ${
                          selectedCategory === name
                            ? "bg-gray-900 text-white"
                            : ""
                        }`}
                        onClick={() => {
                          // navigate(`/explore?eq=${name.replace(" ", "+")}`);
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
