import React, { useState } from "react";
import youTubeLogo from "../../assets/light_5.svg";
import toggleIcon from "../../assets/light_4.svg";
import micIcon from "../../assets/light_6.svg";
import createVideoIcon from "../../assets/light_7.svg";
import notificatoinIcon from "../../assets/light_8.svg";

import Profile from "../../assets/Profile.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";
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
        }flex items-center md:gap-1 max-sm:gap-1`}
      >
        <div className="p-1 hover:bg-gray-200 hover:rounded-full">
          <img
            src={toggleIcon}
            className="cursor-pointer"
            onClick={() => dispatch(toggleMenu())}
          />
        </div>
        <img
          src={youTubeLogo}
          alt="YouTubeLogo"
          className="h-5 cursor-pointer ml-2"
          onClick={() => navigate("/")}
        />
      </div>

      {/* SearchBar Component */}
      <div className="flex items-center lg:gap-6 md:gap-3 max-sm:mr-5 ">
        <SearchBar
          isMiniScreen={isMiniScreen}
          setIsminiScreen={setIsminiScreen}
        />
        <div className=" bg-gray-100 cursor-pointer hover:bg-gray-200 rounded-full p-[9.5px] max-sm:hidden ">
          <img src={micIcon} className="text-xl" alt="Mic button" />
        </div>
      </div>

      {/* Create,notification,user icons */}
      <div className="flex items-center gap-6 text-[22px]">
        <img
          src={createVideoIcon}
          alt=""
          className="hover:cursor-pointer md:flex hidden text-black"
        />
        <div
          className={`${
            isMiniScreen ? "max-sm:hidden" : ""
          } relative hover:rounded-full hover:bg:gray-200`}
        >
          <img
            src={notificatoinIcon}
            alt=""
            className="hover:cursor-pointer relative text-black"
          />
          <span className="absolute bottom-3 left-3 text-xs bg-red-600 rounded-full px-1 text-white hover:cursor-pointer">
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
