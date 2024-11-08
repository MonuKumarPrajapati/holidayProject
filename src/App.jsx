// import React from 'react'

import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "./pages/UserDashboard";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Forgot from "./pages/Forgot";
import PostDetailsPage from "./pages/BlogDetailsPage";
import Protected from "./components/Protected";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductPage from "./pages/ProductPage";

// const auth = JSON.parse(localStorage.getItem("signupData"));

// const isLoggedIn = auth;
// console.log(isLoggedIn);

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    {/* <Route index element={<Protected Component={Home} />} /> */}
    <Route index='' element={<Home/>} />
    {/* <Route index element={<Protected>
        <Home/>
      </Protected>} /> */}
    <Route path="about" element={<Protected Component={About} />} />
    <Route path="services" element={<Protected Component={Services} />} />
    <Route path="contact" element={<Protected Component={Contact} />} />
    <Route path="forgot" element={<Forgot />} />
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<Signup />} />
    <Route path="user" element={<Protected Component={UserDashboard} />} />

    <Route path="product" element={<ProductPage/>}/>

    {/* <Route path="posts/:postId" element={<BlogDetailsPage />} /> */}
  </Route>
);



const router = createBrowserRouter(routes, { basename: "/holidayProject" });

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
