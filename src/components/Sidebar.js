import React, { useRef, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TimelineIcon from "@mui/icons-material/Timeline";
import PeopleIcon from "@mui/icons-material/People";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const sidebarItem = [
    {
      title: "Dashboard",
      list: [
        { name: "Home", icon: <HomeIcon />, navigate: "/" },
        { name: "Analytics", icon: <TimelineIcon /> },
        {
          name: "Sales",
          icon: <TrendingUpIcon />,
        },
      ],
    },
    {
      title: "Quick menu",
      list: [
        { name: "Users", icon: <PeopleIcon />,  navigate: "/user" },
        { name: "Products", icon: <Inventory2Icon />, navigate: "/products" },
        {
          name: "Transactions",
          icon: <AttachMoneyIcon />,
        },
        { name: "Reports", icon: <AssessmentIcon /> },
      ],
    },
  ];
  const [text, setText] = useState("");
  //Handle click active
  const navigate = useNavigate();
  const handleClickActive = (e) => {
    setText(e.target.innerText);
    navigate(`/${e.target.innerText === "Home" ? "" : e.target.innerText.toLowerCase()}`);
  };
  return (
    <div className="flex-1 p-4 bg-[#fcfbff] ">
      {sidebarItem.map((items) => (
        <>
          <div className="text-[#aeaeae] font-bold text-sm p-2">
            {items.title}
          </div>
          <ul className="flex flex-col gap-2">
            {items.list.map((item) => (
              <li
                onClick={handleClickActive}
                className={`p-3 ${
                  text === item.name || (text === "" && item.name === "Home")
                    ? "active"
                    : ""
                } cursor-pointer hover:bg-[#f0f0ff] flex items-center gap-2 rounded-lg text-[#52505b]`}
              >
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default Sidebar;
