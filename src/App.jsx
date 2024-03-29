import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/SideBar";

const App = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const mainStyle = isMenuOpen ? "blur-effect lock-scrollbar" : "";

  return (
    <div className="flex">
      <SideBar />
      <div className={mainStyle}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
