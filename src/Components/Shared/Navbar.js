import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg nav-page">
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link className="nav-link" to="/home"><i class="fa fa-home p-2 mr-5"></i>Home</Link>
                    </li>

                    <li class="nav-item">
                        <Link className="nav-link" to="/projects"><i class="fas fa-tasks p-2 mr-5"></i>Projects</Link>					</li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/resume"><i class="fa fa-file p-2 mr-5"></i>Resume</Link>
                    </li>
                    <li class="nav-item">
                        <Link style={{ marginRight: '30px' }} className="nav-link" to="/aboutMe"><i class="fas fa-address-card p-2"></i>About me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;