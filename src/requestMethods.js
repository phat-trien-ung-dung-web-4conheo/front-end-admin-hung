import axios from "axios";

// const BASE_URL = "https://back-end-webdevis207.up.railway.app/api/";
// const BASE_URL = "https://webdevis207.up.railway.app/api";
// =======
const BASE_URL = "http://localhost:3003/api/";
// // const BASE_URL = "https://webdevis207.herokuapp.com/api";
// >>>>>>> feature/user/login
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .login.currentUser.accessToken;

console.log(
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).login
    .currentUser.accessToken
);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
