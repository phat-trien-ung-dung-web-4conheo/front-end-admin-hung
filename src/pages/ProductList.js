import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../data";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-2">
            <img
              className="rounded-full h-10 w-10 cursor-pointer"
              src={params.row.avatar}
              alt=""
            />
            {params.row.product}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 80 },
    {
      field: "status",
      headerName: "status",
      type: "number",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-5">
            <Link to={"/product/" + params.row.id}>
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

export default ProductList;
