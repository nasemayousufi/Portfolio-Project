import { Outlet, Link } from "react-router-dom";
import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Import the LinkedIn icon
import { useState } from 'react';

const Layout = () => {
    return (
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark py-3 d-flex justify-content-center">
    <div className="container px-5">
        <a className="navbar-brand" href="/"> {/* Add your logo */}
            <img src="/images/image13.png" alt="Logo" height="30" /> {/* Add your logo */}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><Link className="nav-link text-white" to="home">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="skill">Skill</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="project">Project</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
            <footer className="bg-dark text-white py-3">
                <div className="container px-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <p>&copy; @2024 - Nasema Yousufi</p>
                        <a className="text-white" href="https://www.linkedin.com/in/nasema-yousufi">
                        <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Layout;