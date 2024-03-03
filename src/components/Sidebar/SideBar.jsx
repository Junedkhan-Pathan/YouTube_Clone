import React, { useState } from "react";
import {
  Explore,
  Premium,
  Setting,
  Home,
  Subscriptions,
} from "../../utils/constants.jsx";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../store/appSlice.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  YouTubeLogo,
  HomeIcon,
  ShortsIcon,
  SubscriptionsIcon,
  YouIcon,
  ToggleIcon,
} from "../../assets/Index.js";

const SideBar = () => {
  const [selectedButton, setSelectedButton] = useState("Home");
  // const [isLoading, setIsLoading] = useState(false);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChannelButtonClick = (ButtonName) => {
    const Query = ButtonName.replace(" ", "+");
    setSelectedButton(Query);
    // setIsLoading(true);
    StopLoading();
    if (Query === "Home") {
      navigate("/");
    } else {
      navigate(`/channel?cId=${Query}`);
    }
  };

  const handleExploreButtonClick = (Query) => {
    const newQuery = Query.replace(" ", "+");
    setSelectedButton(newQuery);
    // setIsLoading(true);
    StopLoading();
    navigate("/", {
      state: {
        category: `${Query.replace(" ", "+")}`,
      },
    });
  };

  const SideBarStyle = isMenuOpen
    ? "sidebar-open fixed left-0 md:w-[30vw] lg:w-[19vw] max-sm:w-[60vw] h-full bg-white z-50 text-sm md:top-0 max-sm:top-0 shadow-gray-700 shadow-2xl transition-shadow duration-400"
    : "m-2 fixed max-sm:hidden md:flex-col text-[0.69rem] mt-[73px]";

  const StopLoading = () => {
    setTimeout(() => {
      dispatch(toggleMenu());
      // setIsLoading(false);
    }, 2000);
  };

  //This is for the Watch menu to hide the the side bar otherwise it remain their on the video.
  if (!isMenuOpen) {
    if (location.pathname === "/watch") {
      return null;
    }
  }

  return (
    <div className={SideBarStyle}>
      {!isMenuOpen ? (
        //If sidebar is closed
        <div className="flex flex-col gap-2">
          <div className="py-4 hover:bg-gray-100 hover:rounded-lg cursor-pointer flex flex-col items-center gap-1">
            <NavLink to="/" exact="true" className="flex flex-col items-center">
              <HomeIcon />
              <span>Home</span>
            </NavLink>
          </div>
          <div className="py-4 hover:bg-gray-100 hover:rounded-lg cursor-pointer flex flex-col items-center gap-1">
            <NavLink to="#">
              <ShortsIcon />
              <span>Shorts</span>
            </NavLink>
          </div>
          <div className="py-4 hover:bg-gray-100 hover:rounded-lg cursor-pointer flex flex-col items-center gap-1">
            <NavLink to="#">
              <SubscriptionsIcon />
              <span>Subscriptions</span>
            </NavLink>
          </div>
          <div className="py-4 hover:bg-gray-100 hover:rounded-lg cursor-pointer flex flex-col items-center gap-1">
            <NavLink to="#">
              <YouIcon />
              <span>You</span>
            </NavLink>
          </div>
        </div>
      ) : (
        //If sidebar is opened
        <>
          {/* Toggle and Logo Button  */}
          <div className="fixed flex items-center md:w-[30vw] lg:w-[19vw] max-sm:w-[60vw] md:gap-2 max-sm:gap-1 bg-white px-[1.35rem] md:h-[3.8rem] max-sm:px-[0.35rem] max-sm:h-[4.6rem]">
            <div
              className="p-2 cursor-pointer text-black hover:bg-gray-200 hover:rounded-full"
              onClick={() => {
                dispatch(toggleMenu());
              }}
            >
              <ToggleIcon />
            </div>
            <div className="w-24 cursor-pointer" onClick={() => navigate("/")}>
              <YouTubeLogo />
            </div>
          </div>

          {/* Link container  */}
          <div className="flex flex-col gap-y-1 md:px-4 mt-[35px] h-screen overflow-y-auto max-sm:mt-[38px] py-8 sidebar">
            {/* Main links  */}
            <ul className="flex flex-col">
              {Home.map(({ icon, name }) => {
                return (
                  <NavLink
                    to="/"
                    className={({ isActive }) => {
                      `${
                        isActive
                          ? "bg-gray-100 lg:w-[16.2vw] md:w-[25.5vw] max-sm:w-[58.5vw]"
                          : ""
                      }`;
                    }}
                    // onClick={() => handleExploreButtonClick(name)}
                  >
                    <div
                      key={name}
                      className="`list-none py-[4px] pl-[13px] rounded-lg cursor-pointer hover:bg-gray-100 lg:hover:w-[16.2vw] md:hover:w-[25.5vw] hover:w-[58.5vw]"
                    >
                      <button className=" h-9 flex items-center gap-5">
                        {icon}
                        <span>{name}</span>
                      </button>
                    </div>
                  </NavLink>
                );
              })}
            </ul>

            <div className="my-2 w-52">
              <hr />
            </div>

            {/* Subsription links  */}
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

            {/* Expolre links  */}
            <ul className="flex flex-col ">
              <h1 className="md:font-bold mb-1  ml-3  md:text-lg text-md font-bold">
                Explore
              </h1>
              {Explore.map(({ icon, name }) => {
                return (
                  <div key={name}>
                    <li
                      className={`list-none py-[9px] pl-[13px] rounded-lg cursor-pointer hover:bg-gray-100 hover:rounded-lg lg:hover:w-[16.2vw] md:hover:w-[25.5vw] hover:w-[58.5vw] ${
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

            {/* YouTube more links  */}
            <ul className="flex flex-col">
              <h1 className="md:font-bold ml-3 md:text-lg text-md font-bold">
                More from YouTube
              </h1>
              {Premium.map(({ icon, name }) => {
                return (
                  <div key={name}>
                    <li
                      className={`list-none py-[9px] pl-[13px] rounded-lg cursor-pointer hover:bg-gray-100 hover:rounded-lg lg:hover:w-[16.2vw] md:hover:w-[25.5vw]  hover:w-[58.5vw] ${
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

            {/* Setting ,Help etc links  */}
            <ul className="flex flex-col">
              {Setting.map(({ icon, name }) => {
                return (
                  <div key={name}>
                    <li
                      className={`list-none py-[9px] pl-[13px] rounded-lg cursor-pointer hover:bg-gray-100 hover:rounded-lg lg:hover:w-[16.2vw] md:hover:w-[25.5vw] hover:w-[58.5vw} ${
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
