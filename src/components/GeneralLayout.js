import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const GeneralLayout = () => {
  return (
    <>
      <Topbar></Topbar>
      <div className="flex gap-3">
        <Sidebar></Sidebar>
        <div className="flex-[4]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default GeneralLayout;
