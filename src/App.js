import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import GeneralLayout from "./components/GeneralLayout";
function App() {
  return (
    <>
      <Routes>
        <Route element={<GeneralLayout></GeneralLayout>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/user" element={<UserList></UserList>}></Route>
          <Route path="/user/:id" element={<User></User>}></Route>
          <Route
            path="/product-list/"
            element={<ProductList></ProductList>}
          ></Route>
          <Route path="/product/:id" element={<Product></Product>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
