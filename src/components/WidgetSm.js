import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import { adminRequest } from "../requestMethods";
import Loading from "./Loading/Loading";
import handleLoading from "../redux/loadingSlice";
const WidgetSm = () => {

  const [users, setUsers] = useState([]);
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loading.isLoading)
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await adminRequest.get("users/");
        setUsers(res.data);
        dispatch(handleLoading(false))
      } catch (err) {
        console.log("err widgetSm", err);
        dispatch(handleLoading(false));
      }
    };
    getUsers();
  }, []);
  console.log("users", users);
  return (
    <div className="flex-1 shadow-[0px_1px_9px_-1px_#000000] p-4">
      <h2 className="pb-3 text-xl font-semibold">New Join Members</h2>
      <ul className="flex flex-col justify-center gap-3 ">
        <div className="flex items-center justify-center">
          {loading && <Loading></Loading>}
        </div>
        {!loading &&
          users.map((user, idx) => (
            <li key={idx} className="flex items-center gap-2 ">
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
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
