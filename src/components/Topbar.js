import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/userRedux";
import { useNavigate } from "react-router-dom";
const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/login");
    console.log("Logout success");
  };
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
          <div
            className="px-3 py-2 bg-blue-500 rounded-lg hover:opacity-60 cursor-pointer text-white transition-all duration-200"
            onClick={handleLogOut}
          >
            Log out
          </div>
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
