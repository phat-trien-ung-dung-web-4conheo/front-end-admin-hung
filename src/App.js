import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
function App() {
  return (
    <>
      <Topbar></Topbar>
      <div className="flex gap-3">
        <Sidebar></Sidebar>
        <div className="flex-[4]">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/user" element={<UserList></UserList>}></Route>
            <Route path="/user/:id" element={<User></User>}></Route>
            <Route
              path="/product-list/"
              element={<ProductList></ProductList>}
            ></Route>
            <Route path="/product/:id" element={<Product></Product>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
