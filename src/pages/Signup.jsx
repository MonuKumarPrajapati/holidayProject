import { useState } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  // console.log(formData);

  // validate the email format by regax
  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;

    return emailRegex.test(email);
  };

  // const isValidPassword = (password) => {

  // }

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) {
      newErrors.name("Name is Required");
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      // console.log('email');
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 character";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "password must match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {               // this function is called on submiting the form
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      // Retrieve existing data from localStorage, or start with an empty array
      let existingData = JSON.parse(localStorage.getItem("signupData")) || [];
      if (!Array.isArray(existingData)) {
        existingData = [];
      }

      // Create a new user object with email, password, and confirmPassword properties
      let newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };

      // Add the new user to the existing array
      existingData.push(newUser);

      // Save the updated array back to localStorage
      localStorage.setItem("signupData", JSON.stringify(existingData));

      // Show success toast
      toast.success("SignUp successfully");
      // console.log("Form submitted", newUser);

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/login");
    } else {
      // console.log("Form validation failed");
      toast.warning("Form validation failed");
    }
  };

  const handleChange = (e) => {
    // const { name, value } = e.target; this is destructure way
    let name = e.target.name;
    let value = e.target.value;
    // console.log(name, value);

    setFormData({
      ...formData,
      [name]: value, // in this way we make change on username username will change, email email will change.
    });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center min-h-screen bg-gray-100"
      >
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Signup
          </h2>

          <div className="mt-6">
            <div>
              <label className="block text-sm text-gray-600">Username</label>
              <input
                type="name"
                name="name"
                onChange={handleChange}
                value={formData.name.trim()}
                placeholder="Type your username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors?.name && (
                <div className=" text-red-600">{errors.email}</div>
              )}
            </div>
            <div className=" mt-4">
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email.trim()}
                placeholder="Type your email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors?.email && (
                <div className=" text-red-600">{errors.email}</div>
              )}
            </div>
            {/* <div className="mt-4">
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                
                placeholder="Type your email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div> */}

            <div className="mt-4">
              <label className="block text-sm text-gray-600">
                Create Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={formData.password.trim()}
                placeholder="Create password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors?.password && (
                <div className=" text-red-600">{errors.password}</div>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-sm text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword.trim()}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors?.confirmPassword && (
                <div className=" text-red-600">{errors.confirmPassword}</div>
              )}
            </div>

            {/* <div className="flex items-center justify-between mt-4">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div> */}

            <button
              type="submit"
              // onClick={handleSignUp}
              className="w-full py-2 mt-6 text-white bg-gradient-to-r from-blue-400 to-pink-500 rounded-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              SignUp
            </button>
          </div>

          <div className="mt-6 text-center text-gray-600">Or Sign Up Using</div>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
              {/* <!-- Facebook icon --> */}
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center">
              {/* <!-- Twitter icon --> */}
              <i className="fab fa-twitter"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center">
              {/* <!-- Google icon --> */}
              <i className="fab fa-google"></i>
            </button>
          </div>

          <div className="mt-6 text-center text-gray-600">
            <h3>
              Already have an Account ?{" "}
              <span className=" text-blue-500 cursor-pointer">
                {" "}
                <Link to="/login"> Login</Link>
              </span>
            </h3>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
