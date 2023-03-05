import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
const Topbar = () => {
  return (
    <div className="p-5 flex justify-between">
      <h1 className="cursor-pointer text-lg font-bold text-blue-600">
        Hungadmin
      </h1>
      <div className="">
        <div className="flex gap-5 items-center">
          <NotificationsNoneIcon className="cursor-pointer"></NotificationsNoneIcon>
          <LanguageIcon className="cursor-pointer"></LanguageIcon>
          <SettingsIcon className="cursor-pointer"></SettingsIcon>
          <img
            src="
          https://source.unsplash.com/featured/300x201
          "
            className="rounded-full h-10 w-10 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
