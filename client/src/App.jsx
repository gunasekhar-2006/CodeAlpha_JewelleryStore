import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CategoryPage from "./pages/CategoryPage";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/category/:name" element={<CategoryPage />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;