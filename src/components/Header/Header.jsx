import React, { useState } from "react";
import {
  YouTubeLogo,
  ToggleIcon,
  MicIcon,
  CreateVideoIcon,
  NotificationIcon,
} from "../../assets/Index.js";
import Profile from "../../assets/Profile.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { toggleMenu } from "../../store/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [isMiniScreen, setIsminiScreen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed flex justify-between items-center md:mx-auto md:px-[1.35rem] max-sm:px-[0.35rem] max-sm:pr-3 lg:pr-7 md:pr-6 max-sm:mx:auto max-sm:h-[4.6rem] md:h-[3.8rem] bg-white w-[100vw] z-30">
      {/* Logo & menubar icon */}
      <div
        className={`${
          isMiniScreen ? "max-sm:hidden" : ""
        } flex items-center gap-2 max-sm:gap-1`}
      >
        <div
          className="hover:bg-gray-200 hover:rounded-full cursor-pointer p-2"
          onClick={() => dispatch(toggleMenu())}
        >
          <ToggleIcon />
        </div>
        <div className="w-24 cursor-pointer" onClick={() => navigate("/")}>
          <YouTubeLogo />
        </div>
      </div>

      {/* SearchBar Component */}
      <div className="flex items-center lg:gap-6 md:gap-3 max-sm:mr-5 ">
        <SearchBar
          isMiniScreen={isMiniScreen}
          setIsminiScreen={setIsminiScreen}
        />
        <div className=" bg-gray-100 cursor-pointer hover:bg-gray-200 rounded-full p-[9.5px] max-sm:hidden ">
          <MicIcon />
        </div>
      </div>

      {/* Create,notification,user icons */}
      <div className="flex items-center gap-6 text-[22px] hover:cursor-pointer text-black">
        <div className="p-2 hover:bg-gray-200 rounded-full md:flex hidden">
          <CreateVideoIcon />
        </div>
        <div
          className={`${
            isMiniScreen ? "max-sm:hidden" : ""
          }hover:cursor-pointer bg text-black relative hover:rounded-full hover:bg:gray-200  `}
        >
          <div className="p-2 hover:bg-gray-200 rounded-full">
            <NotificationIcon />
          </div>
          <span className="absolute bottom-5 left-5 text-xs bg-red-600 rounded-full px-1 text-white hover:cursor-pointer">
            9+
          </span>
        </div>
        <div className={`w-8 h-9 hover:cursor-pointer`}>
          <img className="h-full rounded-full" src={Profile} alt="Mypic" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
