import React, { useEffect, useState } from "react";
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
import { updateProduct } from "../redux/apiCalls";
import { useNavigate, useParams } from "react-router-dom";
//YUP VALIDATION
const schema = yup.object({
  title: yup.string().required("Title is required"),
  price: yup.number().required("Price is required"),
  desc: yup.string().required("Desc is required"),
  size: yup.string().required("Size is required"),
  color: yup.string().required("Color is required"),
  categories: yup.string().required("Categories is required"),
});

const Product = () => {
  const metadata = {
    contentType: "image/png",
  };
  const [resetScreen, setResetScreen] = useState(true);

  //Get existing data
  const params = useParams();
  const idProduct = params?.id;
  const [getExistingData, setGetExistingData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await adminRequest.get(`products/find/${idProduct}`);
      setGetExistingData(res.data);
    };
    getData();
  }, []);
  console.log(getExistingData, "getExistingData");
  // Add formik and yup for validate the form
  //FORM
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: getExistingData.title,
      price: getExistingData.price,
      desc: getExistingData.desc,
      size: getExistingData.size,
      color: getExistingData.color,
      categories: getExistingData.categories,
    },
  });
  // Set initial values using setValue
  useEffect(() => {
    if (resetScreen) {
      setValue("title", getExistingData.title || "");
      setValue("price", getExistingData.price || "");
      setValue("desc", getExistingData.desc || "");
      setValue("size", getExistingData.size?.join(" ") || "");
      setValue("color", getExistingData.color?.join(" ") || "");
      setValue("categories", getExistingData.categories?.join(" ") || "");
    }
  }, [getExistingData, setValue, resetScreen]);
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

  const handleClickSubmit = async (value) => {
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
        const array = value.categories.split(/,| /).map((word) => word.trim());
        return array;
      })(),
    };
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
        const product = {
          ...info,
          img: downloadURLs.length !== 0 ? downloadURLs : getExistingData?.img,
        };
        updateProduct(dispatch, idProduct, product);
        navigate("/products");
        setResetScreen(!resetScreen);
      })
      .catch((error) => {
        // Handle errors
      })
      .finally(() => {});
    // console.log(info, "Info");
  };
  console.log("148 ", getExistingData?.img?.join(" "));
  // localStorage.clear();
  // const products = useSelector((state) => state.product.products);
  // console.log(products, "Products");
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">Update Product</h2>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(handleClickSubmit)}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            defaultValue={getExistingData.title}
            placeholder="Enter title"
            {...register("title")}
            className="p-3 border border-[#ccc] rounded-lg "
          />
          {errors?.title && <p>{errors.title.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            placeholder="Enter price"
            defaultValue={getExistingData.price}
            id="price"
            {...register("price")}
            className="p-3 border border-[#ccc] rounded-lg "
          />
          {errors?.price && <p>{errors.price.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
            defaultValue={getExistingData.desc}
            placeholder="Enter description"
            {...register("desc")}
            className="p-3 border border-[#ccc] rounded-lg "
          />
          {errors?.desc && <p>{errors.desc.message}</p>}
        </div>
        {/* Make the array sizes product for this one  */}
        <div className="flex flex-col gap-2">
          <label htmlFor="size">Size</label>
          <input
            type="text"
            id="size"
            defaultValue={getExistingData.size}
            {...register("size")}
            placeholder="Enter size"
            className="p-3 border border-[#ccc] rounded-lg "
          />
          {errors?.size && <p>{errors.size.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="color">Color</label>
          <input
            type="text"
            id="color"
            defaultValue={getExistingData.color}
            {...register("color")}
            placeholder="red green"
            className="p-3 border border-[#ccc] rounded-lg "
          />
          {errors?.color && <p>{errors.color.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="categories">Categories</label>
          <input
            type="text"
            id="categories"
            defaultValue={getExistingData.categories}
            {...register("categories")}
            placeholder="men women"
            className="p-3 border border-[#ccc] rounded-lg "
          />
          {errors?.categories && <p>{errors.categories.message}</p>}
        </div>
        {/* Connect to firebase storage to store image */}
        <div className="flex flex-col gap-2">
          <label htmlFor="image">Image</label>
          <div className="flex gap-2">
            {getExistingData &&
              getExistingData?.img?.map((image) => (
                <img
                  className="w-[250px] inline-block mr-2 h-[300px] rounded-lg"
                  src={image}
                  alt=""
                />
              ))}
          </div>
          <input
            type="file"
            name="image"
            id="image"
            multiple
            className="p-3 border border-[#ccc] rounded-lg"
            onChange={handleChange}
            // value={getExistingData?.img?.join(", ")}
          />
        </div>
        <div className="flex">
          <button
            type="submit"
            className="py-2 px-5 rounded-lg inline-block text-white bg-blue-600 hover:opacity-70 transition-all duration-200"
          >
            Update
          </button>
        </div>
      </form>
    </section>
  );
};

export default Product;
