import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BsArrowLeftShort } from "react-icons/bs";
import { useSelector } from "react-redux";
import { searchedResultsCache } from "../store/searchSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import searchButton from "../assets/light_102.svg";
import toggleCloseButton from "../assets/light_2.svg";
import { getSearchSuggestions } from "../apis/videoApi";

const SearchBar = ({ isMiniScreen, setIsminiScreen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const cachesSearches = useSelector((store) => store.search);
  const search = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getSearchData = async () => {
    const suggestionData = await getSearchSuggestions(searchQuery);
    if (!suggestionData) return null;
    setSuggestions(suggestionData);
    dispatch(searchedResultsCache({ [searchQuery]: suggestionData }));
  };

  useEffect(() => {
    if (searchQuery) {
      //for if we already serched then it get from chached.
      if (cachesSearches[searchQuery]) {
        setSuggestions(cachesSearches[searchQuery]);
      } else {
        getSearchData();
      }
    }
  }, [searchQuery]);

  // Function to handle the search button click
  const handleSearchButtonClick = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768 && !isMiniScreen) {
      setIsminiScreen(true);
    }
  };

  // Focus on the click and blur when leave func
  const focusAndBlurHandler = () => {
    setIsInputFocused((prev) => !prev);
    setShowSuggestions((prev) => !prev);
  };

  const handleClearSearch = (event) => {
    event.preventDefault();
    setSearchQuery("");
    search.current.focus();
  };

  const handleSearch = (event, search) => {
    event.preventDefault();
    if (search !== "") {
      const query = search.replace(" ", "+");
      navigate(`/results?search_query=${query}`);
      handleScrollTop();
      setShowSuggestions(false);
      setSearchQuery("");
    }
  };

  //Components styles..
  const searchSuggestionBarStyles = `${
    isMiniScreen
      ? "max-sm:w-[98%] max-sm:rounded-b-2xl max-sm:h-full max-sm:border-none"
      : "max-sm:hidden"
  } fixed py-5 bg-white md:shadow-2xl md:rounded-2xl md:w-[45vw] lg:w-[42.3vw] lg:h-[55vh] border border-gray-100 overflow-scroll`;

  const inputStyles = `${
    isMiniScreen
      ? "w-[61vw] max-sm:mx-auto transition-all duration-500 max-sm:ml-2 ml-2 pl-[12px] py-2"
      : "max-sm:hidden"
  } ${
    isInputFocused
      ? "max-sm:w-[74vw] max-sm:mx-auto max-sm:focus:outline-0 max-sm:border max-sm:border-red-600 md:pl-[3.2rem] md:border md:border-blue-600"
      : ""
  } md:w-[36vw] lg:w-[42vw] md:py-[7px] lg:py-[7px] border border-gray-300 rounded-l-full py-1 pl-3 md:pl-6 items-center transition-all focus:outline-0 duration-500}`;

  const searchButtonStyles = `${
    isMiniScreen
      ? "max-sm:px-3 max-sm:py-[10px]"
      : "max-sm:border-none max-sm:text-2xl max-sm:px-auto max-sm:ml-32"
  } text-xl px-[2px] py-[7px] border border-gray-300 md:hover:bg-gray-200 rounded-r-full md:px-6 flex justify-center items-center md:bg-gray-100`;

  return (
    <>
      <div>
        {/* Back button for mini screen */}
        <div className="flex items-center">
          {isMiniScreen && (
            <div className="flex">
              <button
                onClick={() => setIsminiScreen(false)}
                onFocus={handleClearSearch}
              >
                <BsArrowLeftShort className="text-4xl" />
              </button>
            </div>
          )}

          {isInputFocused && (
            <div className="absolute flex items-center lg:ml-[1.4rem] md:ml-[1.4rem]">
              <button className="max-sm:hidden ">
                <img src={searchButton} alt="" className="h-5" />
              </button>
            </div>
          )}

          {searchQuery && (
            <div
              className={`${
                isMiniScreen
                  ? "max-sm:right-16 max-sm:mx-auto"
                  : "max-sm:hidden"
              } absolute lg:right-[27rem] md:right-[18.8rem] flex items-center`}
            >
              <button onClick={handleClearSearch} className={``}>
                <img
                  src={toggleCloseButton}
                  alt=""
                  className="h-6 m-2 cursor-pointer"
                />
              </button>
            </div>
          )}

          <input
            type="text"
            ref={search}
            placeholder="Search"
            className={inputStyles}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={focusAndBlurHandler}
            onBlur={focusAndBlurHandler}
          />
          <button
            className={searchButtonStyles}
            onClick={(event) => {
              handleSearchButtonClick();
              handleSearch(event, searchQuery);
            }}
          >
            <img src={searchButton} alt="search button" />
          </button>
        </div>

        {/* Searching suggestion text box */}
        <div>
          {searchQuery && showSuggestions && (
            <div className={searchSuggestionBarStyles}>
              {suggestions.length === 0 ? (
                searchQuery !== "" && (
                  <h1 className="text-center py-4 font-bold text-lg">{`No results found for ${searchQuery}`}</h1>
                )
              ) : (
                <ul className="space-y-2 font-bold">
                  {suggestions?.map((suggestion) => (
                    <li
                      key={suggestion}
                      className="flex items-center hover:bg-gray-200 md:px-[0.7rem] py-1 max-sm:gap-4 cursor-pointer"
                      onClick={(event) => handleSearch(event, suggestion)}
                    >
                      <IoSearchOutline className="md:w-10 md:h-5 mt-1 max-sm:w-10 max-sm:h-5 " />
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
