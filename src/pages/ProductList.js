import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../data";
import { Link, useNavigate } from "react-router-dom";
import { adminRequest, publicRequest } from "../requestMethods";

const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("products/");
        console.log(res);
        setData(res.data);
      } catch (err) {
        console.log("err product", err);
      }
    };
    getProducts();
  }, []);
  console.log("data", data);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 80 },
    {
      field: "title",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-2">
            <img
              className="rounded-full h-10 w-10 cursor-pointer"
              src={params.row.img[0]}
              alt=""
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 80 },
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
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end ">
        <p
          className="text-white inline-block rounded-lg cursor-pointer  hover:shadow-xl  px-3 py-2 bg-blue-500 hover:bg-blue-400 transition-all duration-150"
          onClick={() => navigate("/newproduct")}
        >
          Create Product
        </p>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          getRowId={(row) => row._id}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ProductList;
