import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TimelineIcon from "@mui/icons-material/Timeline";
import PeopleIcon from "@mui/icons-material/People";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssessmentIcon from "@mui/icons-material/Assessment";
const Sidebar = () => {
  const sidebarItem = [
    {
      title: "Dashboard",
      list: [
        { name: "Home", icon: <HomeIcon /> },
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
        { name: "Users", icon: <PeopleIcon /> },
        { name: "Products", icon: <Inventory2Icon /> },
        {
          name: "Transactions",
          icon: <AttachMoneyIcon />,
        },
        { name: "Reports", icon: <AssessmentIcon /> },
      ],
    },
  ];
  return (
    <div className="flex-1 p-4 bg-[#fcfbff] ">
      {sidebarItem.map((items) => (
        <div className="">
          <div className="text-[#aeaeae] font-bold text-sm p-2">
            {items.title}
          </div>
          <ul className="flex flex-col gap-2">
            {items.list.map((item) => (
              <li
                className={`p-3 ${
                  item.name === "Home" ? "active" : ""
                } cursor-pointer hover:bg-[#f0f0ff] flex items-center gap-2 rounded-lg text-[#52505b]`}
              >
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
