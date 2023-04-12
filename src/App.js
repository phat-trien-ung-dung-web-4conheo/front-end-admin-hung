import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import GeneralLayout from "./components/GeneralLayout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const admin = useSelector((state) => state.user.login.currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!admin) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Routes>
        {admin && (
          <Route element={<GeneralLayout></GeneralLayout>}>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserList></UserList>}></Route>
            <Route path="/user/:id" element={<User></User>}></Route>
            <Route
              path="/products/"
              element={<ProductList></ProductList>}
            ></Route>

            <Route path="/product/:id" element={<Product></Product>}></Route>
          </Route>
        )}
        {!admin && <Route path="/login" element={<Login></Login>}></Route>}
      </Routes>
    </>
  );
}

export default App;
