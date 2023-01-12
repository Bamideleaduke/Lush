import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/product/Products";
import Error from "./pages/error/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/product/SingleProduct";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login"
import ProtectedRoute from "./ProtectedRoute";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="login" element={<Login setUser={setUser}></Login>} />
          <Route path="dashboard" element={<ProtectedRoute user={user}>
            <Dashboard user={user}></Dashboard>
          </ProtectedRoute>} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
