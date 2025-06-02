import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// CSS
import "./App.css";

// Components
import Navbar from "./pages/Auth/base/Navbar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import PrivateComponents from "./components/PrivateComponents";
import Upload from "./components/Upload";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";
import VendorRegister from "./components/VendorRegister";
import Home from "./pages/User/Home";

// for notifications toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Home/>
      <div className="app-container">
        <Routes>
          {/* Public Routes */}
          <Route path="/vendor/register" element={<VendorRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Admin Routes */}
          <Route element={<PrivateComponents />}>
            <Route path="/upload" element={<Upload />} />
            <Route path="/admin/usercard" element={<UserList />} />
            <Route path="/admin/productcard" element={<ProductList />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;