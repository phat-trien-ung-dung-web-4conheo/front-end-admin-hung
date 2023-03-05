import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../data";
import { Link } from "react-router-dom";

const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-2">
            <img
              className="rounded-full h-10 w-10 cursor-pointer"
              src={params.row.avatar}
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 260 },
    {
      field: "status",
      headerName: "status",
      type: "number",
      width: 120,
    },
    {
      field: "transactions",
      headerName: "Transactions",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-5">
            <Link to={"/user/" + params.row.id}>
              <button className="p-2 py-1 border rounded-lg bg-blue-500 text-white">
                Edit
              </button>
            </Link>
            <DeleteOutlineIcon
              className="cursor-pointer text-red-500"
              onClick={() => handleDelete(params.row.id)}
            ></DeleteOutlineIcon>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default UserList;
