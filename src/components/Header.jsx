import { useEffect, useState } from "react";
import { Link, NavLink, useAsyncError, useNavigate } from "react-router-dom";
import Login from "./Login";
import { toast } from "react-toastify";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  // const [storedData, setStoredData] = useState(null)
  // console.log(storedData);
  const navigate = useNavigate();
  

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('signupData'))
    // console.log(userData);
    
    setLoggedIn(userData ? true : false)
    // setStoredData(userData)
  // console.log(storedData);
  }, [])
  

  const handleAuth = () => {
    if (loggedIn) {
      // setStoredData(null)
      localStorage.removeItem('signupData')
      toast.success('Logout Successfully')
    } else {
      navigate('/login')
    }
    
  }
  return (
    <>
      <header className="bg-gray-800 text-white fixed w-full  left-0 top-0 ">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="text-lg font-semibold">
            <Link to="/">MyLogo</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-orange-400  ${isActive ? "text-orange-500" : " "}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-orange-400  ${isActive ? "text-orange-500" : " "}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `hover:text-orange-400  ${isActive ? "text-orange-500" : " "}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-orange-400  ${isActive ? "text-orange-500" : " "}`
              }
            >
              Contact
            </NavLink>
            <NavLink
              onClick={handleAuth}
             
              to="/login"
              className={({ isActive }) =>
                `hover:text-orange-400  ${isActive ? "text-orange-500" : " "}`
              }
            >
              {loggedIn ? 'Logout' : 'Login'}
            </NavLink>

           
          </nav>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {/* Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-700">
            <nav className="flex flex-col space-y-2 p-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-orange-400  ${isActive ? "text-orange-500" : " "}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-orange-400  ${isActive ? "text-orange-500" : " "}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `hover:text-orange-400  ${isActive ? "text-orange-500" : " "}`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-orange-400  ${isActive ? "text-orange-500" : " "}`
                }
              >
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
