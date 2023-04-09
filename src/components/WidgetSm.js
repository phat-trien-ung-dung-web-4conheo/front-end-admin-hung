import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { adminRequest } from "../requestMethods";
import Loading from "./Loading/Loading";

const WidgetSm = () => {
  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState([]);
  const admin = useSelector((state) => state.user.login.currentUser);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await adminRequest.get("users/");
        setUsers(res.data);
        setLoading(false);
      } catch (err) {
        console.log("err widgetSm", err);
        setLoading(false);
      }
    };
    getUsers();
  }, []);
  console.log("users", users);
  return (
    <div className="flex-1 shadow-[0px_1px_9px_-1px_#000000] p-4">
      <h2 className="text-xl font-semibold pb-3">New Join Members</h2>
      <ul className="flex flex-col gap-3 justify-center ">
        <div className="flex justify-center items-center">
          {loading && <Loading></Loading>}
        </div>
        {!loading &&
          users.map((user) => (
            <li className="flex gap-2 items-center ">
              <img
                className="rounded-full h-10 w-10 cursor-pointer"
                src={
                  user.img ||
                  "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
                }
                alt=""
              />
              <div className="flex flex-col max-w-[100%] overflow-hidden text-ellipsis">
                <span className="font-bold">{user.username}</span>
                <span className="text-[#848484 ] ">{user.email}</span>
              </div>
              <button className="ml-auto px-2 py-1 flex items-center gap-1 border rounded-lg bg-[#dcdae5] text-[#606063]">
                <VisibilityIcon className="!text-base"></VisibilityIcon>
                Display
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
