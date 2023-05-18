import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { adminRequest } from "../requestMethods";
import { app } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { addProduct } from "../redux/apiCalls";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
//YUP VALIDATION
const schema = yup.object({
  title: yup.string().required("Title is required"),
  price: yup.number().required("Price is required"),
  desc: yup.string().required("Desc is required"),
  size: yup.number().required("Size is required"),
  color: yup.string().required("Color is required"),
  categories: yup.string().required("Categories is required"),
});

const NewProduct = () => {
  const metadata = {
    contentType: "image/png",
  };
  // Add formik and yup for validate the form
  //FORM
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  //Upload multiple images
  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["Id"] = Math.random();
      setFiles((PrevImages) => [...PrevImages, newImage]);
    }
  };
  const navigate = useNavigate();
  const handleClickSubmit = (value) => {
    //  const res = adminRequest.post("/products", value);
    const info = {
      title: value.title,
      price: value.price,
      desc: value.desc,
      size: (() => {
        const result = value.size.replace(/[^\d\s]/g, "").replace(/\s+/g, " ");
        const array = result
          .split(" ")
          .filter((value, index, self) => self.indexOf(value) === index);
        return array;
      })(),
      color: (() => {
        const array = value.color.replace(/\s+/g, " ").trim().split(" ");
        return array;
      })(),
      categories: (() => {
        const array = value.categories.split(/,/).map((word) => word.trim());
        return array;
      })(),
    };
    const downloadURLs = [];
    Promise.all(
      files.map((file) => {
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        return new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Upload progress tracking
            },
            (error) => {
              // Error handling
              reject(error);
            },
            () => {
              // Upload completed successfully
              getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                  resolve(downloadURL);
                })
                .catch((error) => {
                  reject(error);
                });
            }
          );
        });
      })
    )
      .then((downloadURLs) => {
        const product = { ...info, img: downloadURLs };
        addProduct(dispatch, product);
        navigate("/products");
      })
      .catch((error) => {
        // Handle errors
      })
      .finally(() => {
        reset();
        setFiles([]);
      });
    // console.log(info, "Info");
  };
  // localStorage.clear();
  // const products = useSelector((state) => state.product.products);
  // console.log(products, "Products");
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">New Product</h2>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(handleClickSubmit)}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter title"
            {...register("title")}
            className="p-3 border border-[#ccc] rounded-lg "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            placeholder="Enter price"
            {...register("price")}
            className="p-3 border border-[#ccc] rounded-lg "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
            placeholder="Enter description"
            {...register("desc")}
            className="p-3 border border-[#ccc] rounded-lg "
          />
        </div>
        {/* Make the array sizes product for this one  */}
        <div className="flex flex-col gap-2">
          <label htmlFor="size">Size</label>
          <input
            type="text"
            id="size"
            {...register("size")}
            placeholder="Enter size"
            className="p-3 border border-[#ccc] rounded-lg "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="color">Color</label>
          <input
            type="text"
            id="color"
            {...register("color")}
            placeholder="Enter color"
            className="p-3 border border-[#ccc] rounded-lg "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="categories">Categories</label>
          <input
            type="text"
            id="categories"
            {...register("categories")}
            placeholder="Enter categories"
            className="p-3 border border-[#ccc] rounded-lg "
          />
        </div>
        {/* Connect to firebase storage to store image */}
        <div className="flex flex-col gap-2">
          <label htmlFor="image">image</label>
          <input
            type="file"
            name="image"
            id="image"
            multiple
            // {...register("image")}
            className="p-3 border border-[#ccc] rounded-lg "
            onChange={handleChange}
          />
        </div>
        <div className="flex">
          <button
            type="submit"
            className="py-2 px-5 rounded-lg inline-block text-white bg-blue-600 hover:opacity-70 transition-all duration-200"
          >
            Create product
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewProduct;
