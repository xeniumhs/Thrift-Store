import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// CSS
import "./App.css";

// Components
import Navbar from "./pages/Auth/base/Navbar";
import Footer from "./pages/Auth/base/Footer";

import Login from "./pages/Auth/Login";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Register from "./pages/Auth/Register";
import PrivateComponents from "./components/PrivateComponents";
import Upload from "./components/Product/Upload";
import UserList from "./components/UserList";
import ProductList from "./components/Product/ProductList";
import VendorRegister from "./components/Vendor/VendorRegister";
import Home from "./pages/User/Home";
import FAQ from "./components/FAQ";

// for notifications toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderList from "./components/Admin/OrderList";
import AdminRoute from "./components/Admin/AdminRoute";
import Unauthorized from "./components/Unauthorized";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/vendor/register" element={<VendorRegister />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Protected routes */}
          <Route element={<PrivateComponents />}>
            <Route path="/upload" element={<Upload />} />

            <Route path="/admin/productcard" element={<ProductList />} />
          </Route>
          <Route element={<AdminRoute />}>
            <Route path="/admin/usercard" element={<UserList />} />
            <Route path="/admin/orderlist" element={<OrderList />} />
          </Route>
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </Router>
  );
}
export default App;
