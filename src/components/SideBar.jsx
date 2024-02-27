/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Explore,
  Premium,
  Setting,
  Home,
  Subscriptions,
} from "../utils/constants.jsx";
import youTubeLogo from "../assets/light_5.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import toggleIcon from "../assets/light_4.svg";
import YouIcon from "../assets/YouIcon.jsx";
import SubscriptionsIcon from "../assets/SubscriptionsIcon.jsx";
import ShortsIcon from "../assets/ShortsIcon.jsx";
import HomeIcon from "../assets/HomeIcon.jsx";

const SideBar = () => {
  const [selectedButton, setSelectedButton] = useState("Home");
  const [isLoading, setIsLoading] = useState(false);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const handleChannelButtonClick = (ButtonName) => {
    const Query = ButtonName.replace(" ", "+");
    setSelectedButton(Query);
    setIsLoading(true); // Start loading
    StopLoading(); // Stop Loading and Close sidebar after 500ms
    if (Query === "Home") {
      navigate("/");
    } else {
      navigate(`/channel?cId=${Query}`);
    }
  };

  const handleExploreButtonClick = (ExploreName) => {
    const newQuery = ExploreName.replace(" ", "+");
    setSelectedButton(newQuery);
    setIsLoading(true); // Start loading
    StopLoading(); // Stop Loading and Close sidebar after 500ms
    if (newQuery === "Home") {
      navigate("/");
    } else {
      navigate(`/explore?eq=${newQuery}`);
    }
  };

  const SideBarStyle = isMenuOpen
    ? "sidebar-open fixed left-0 md:w-[30vw] lg:w-[19vw] max-sm:w-[60vw] h-full bg-white z-50 text-sm md:top-0 max-sm:top-0 shadow-gray-700 shadow-2xl transition-shadow duration-300"
    : "fixed max-sm:hidden md:flex-col text-[0.69rem] space-y-8 mt-[73px] ml-1";

  const StopLoading = () => {
    setTimeout(() => {
      // Close sidebar after 1000ms
      dispatch(toggleMenu());
      setIsLoading(false); // Stop loading
    }, 3000);
  };



  return (
    <div className={SideBarStyle}>
      {!isMenuOpen ? (
        //If sidebar is closed
        <>
          <div className="hover:bg-gray-100 hover:rounded-lg cursor-pointer flex flex-col items-center gap-1">
            <NavLink to="/" exact="true" className="flex flex-col items-center">
              <HomeIcon />
              <span>Home</span>
            </NavLink>
          </div>
          <div className="hover:bg-gray-100 hover:rounded-lg cursor-pointer flex flex-col items-center gap-1">
            <NavLink to="/shorts">
              <ShortsIcon />
              <span>Shorts</span>
            </NavLink>
          </div>
          <div className="hover:bg-gray-100 hover:rounded-lg cursor-pointer flex flex-col items-center gap-1">
            <NavLink to="/explore">
              <SubscriptionsIcon />
              <span>Subscriptions</span>
            </NavLink>
          </div>
          <div className="hover:bg-gray-100 hover:rounded-lg cursor-pointer flex flex-col items-center gap-1">
            <NavLink to="/feed/you">
              <YouIcon />
              <span>You</span>
            </NavLink>
          </div>
        </>
      ) : (
        //If sidebar is opened
        <>
          {/* Toggle and Logo Button  */}
          <div className="fixed flex items-center md:w-[30vw] lg:w-[19vw] max-sm:w-[60vw] md:gap-1 max-sm:gap-1 bg-white px-[1.35rem] md:h-[3.8rem] max-sm:px-[0.35rem] max-sm:h-[4.6rem]">
            <div className="md:p-1 md:mt-[0.1rem] max-sm:p-1 hover:bg-gray-200 hover:rounded-full">
              <img
                src={toggleIcon}
                className="cursor-pointer text-black"
                onClick={() => {
                  dispatch(toggleMenu());
                }}
              />
            </div>
            <img
              src={youTubeLogo}
              alt="YouTubeLogo"
              className="h-5 cursor-pointer ml-2"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Main links  */}
          <div className="flex flex-col gap-y-1 md:px-4 mt-[35px] h-screen overflow-y-auto max-sm:mt-[38px] py-8 sidebar">
            <ul>
              {Home.map(({ icon, name }) => {
                return (
                  // <div key={name}>
                  //   <li
                  // className={`list-none pl-[13px] rounded-lg cursor-pointer hover:bg-gray-100 hover:rounded-lg lg:hover:w-[16.2vw] md:hover:w-[25.5vw] hover:w-[58.5vw] ${
                  //   selectedButton === name
                  //     ? "bg-gray-100 lg:w-[16.2vw] md:w-[25.5vw] max-sm:w-[58.5vw]"
                  //     : ""
                  // }`}
                  // onClick={() => handleExploreButtonClick(name)}
                  //   >
                  //     <button className="flex items-center gap-5">
                  //       {icon}
                  //       <span>{name}</span>
                  //     </button>
                  //   </li>
                  // </div>
                  <div key={name}>
                    <NavLink
                      to="/"
                      className={({ isActive }) => {
                        `list-none pl-[13px] rounded-lg cursor-pointer hover:bg-gray-100 hover:rounded-lg lg:hover:w-[16.2vw] md:hover:w-[25.5vw] hover:w-[58.5vw] ${
                          isActive
                            ? "bg-gray-100 lg:w-[16.2vw] md:w-[25.5vw] max-sm:w-[58.5vw]"
                            : ""
                        }`;
                      }}
                      // onClick={() => handleExploreButtonClick(name)}
                    >
                      <button className=" h-9 flex items-center gap-5">
                        {icon}
                        <span>{name}</span>
                      </button>
                    </NavLink>
                  </div>
                );
              })}
            </ul>

            <div className="my-2 w-52">
              <hr />
            </div>

            <ul>
              <h1 className="md:font-bold ml-3 mb-2 md:text-lg text-md font-bold">
                Subscriptions
              </h1>
              {Subscriptions.map(({ src, profileId, fullname }) => {
                return (
                  <div key={profileId}>
                    <li
                      className={`list-none py-[10px] pl-[13px] rounded-lg cursor-pointer hover:bg-gray-100 hover:rounded-lg lg:hover:w-[16.2vw] md:hover:w-[25.5vw] hover:w-[58.5vw] ${
                        selectedButton === fullname
                          ? "bg-gray-100 lg:w-[16.2vw] md:w-[25.5vw] max-sm:w-[58.5vw]"
                          : ""
                      }`}
                      onClick={() => handleChannelButtonClick(fullname)}
                    >
                      <div className="flex items-center gap-5">
                        <img src={src} alt="" className="rounded-full w-5" />
                        <span className="">{fullname}</span>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>

            <div className="my-2 w-52">
              <hr />
            </div>

            <ul>
              <h1 className="md:font-bold ml-3 mb-2 md:text-lg text-md font-bold">
                Explore
              </h1>
              {Explore.map(({ icon, name }) => {
                return (
                  <div key={name}>
                    <li
                      className={`list-none pl-[13px] rounded-lg cursor-pointer hover:bg-gray-100 hover:rounded-lg lg:hover:w-[16.2vw] md:hover:w-[25.5vw] hover:w-[58.5vw] ${
                        selectedButton === name
                          ? "bg-gray-100 lg:w-[16.2vw] md:w-[25.5vw] max-sm:w-[58.5vw]"
                          : ""
                      }`}
                      onClick={() => handleExploreButtonClick(name)}
                    >
                      <div className="flex items-center gap-5">
                        {icon}
                        <span>{name}</span>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>

            <div className="my-2 w-52">
              <hr />
            </div>

            <ul>
              <h1 className="md:font-bold ml-3 mb-2 md:text-lg text-md font-bold">
                More from YouTube
              </h1>
              {Premium.map(({ icon, name }) => {
                return (
                  <div key={name}>
                    <li
                      className={`list-none pl-[13px] rounded-lg cursor-pointer hover:bg-gray-100 hover:rounded-lg lg:hover:w-[16.2vw] md:hover:w-[25.5vw]  hover:w-[58.5vw] ${
                        selectedButton === name
                          ? "bg-gray-100 lg:w-[16.2vw] md:w-[25.5vw] max-sm:w-[58.5vw]"
                          : ""
                      }`}
                      onClick={() => handleExploreButtonClick(name)}
                    >
                      <div className="flex items-center gap-5">
                        <span className="text-red-600">{icon}</span>
                        <span>{name}</span>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>

            <div className="my-2 w-52">
              <hr />
            </div>

            <ul>
              {Setting.map(({ icon, name }) => {
                return (
                  <div key={name}>
                    <li
                      className={`list-none pl-[13px] rounded-lg cursor-pointer hover:bg-gray-100 hover:rounded-lg lg:hover:w-[16.2vw] md:hover:w-[25.5vw] hover:w-[58.5vw} ${
                        selectedButton === name
                          ? "bg-gray-100 lg:w-[16.2vw] md:w-[25.5vw] max-sm:w-[58.5vw]"
                          : ""
                      }`}
                    >
                      <button className="flex items-center gap-5">
                        {icon}
                        <span>{name}</span>
                      </button>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
