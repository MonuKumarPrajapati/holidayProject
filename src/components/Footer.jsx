import React from 'react'
import { Link } from 'react-router-dom';
 
  

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col bg-gray-800 text-white py-8 mt-4  w-full bottom-0">
                <div className="w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto px-4 ">
                    <div className="flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
                        {/* Brand or Logo */}
                        <div className="w-full md:w-auto text-center md:text-left">
                            <h1 className="text-2xl font-bold">MyBrand</h1>
                        </div>

                        {/* Navigation Links */}
                        <div className="w-full md:w-auto text-center md:text-left">
                            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                                <li><Link to="/" className="hover:underline">Home</Link></li>
                                <li><Link to="/about" className="hover:underline">About</Link></li>
                                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                                <li><Link to="/services" className="hover:underline">Services</Link></li>
                            </ul>
                        </div>

                        {/* Social Media Icons */}
                        <div className="w-full md:w-auto flex justify-center md:justify-end space-x-4">
                            <Link to="#" className="hover:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    {/* Replace these with social media icons */}
                                    <path d="M24 4.56v15.02c0 .7-.57 1.27-1.27 1.27H1.27C.57 20.85 0 20.28 0 19.58V4.56c0-.7.57-1.27 1.27-1.27h21.46c.7 0 1.27.57 1.27 1.27z" />
                                </svg>
                            </Link>
                            {/* Add more icons as needed */}
                        </div>
                    </div>

                    {/* Copyright Text */}
                    <div className="text-center pt-4 border-t border-gray-700 mt-6">
                        <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};
    
  


export default Footer