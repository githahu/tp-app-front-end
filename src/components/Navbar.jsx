import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="logo">
                <h2>
                    my app
                </h2>
           
            </div>
            <section className="navbar-menu">
            <NavLink to="/">
                  Home
                </NavLink>
                <NavLink to="/students">
                  Students
                </NavLink>
                <NavLink to="/teachers">
                  Teachers
                </NavLink>
                <NavLink to="/results">
                  Results 
                </NavLink>

            </section>
        </div>
    )

}

export default Navbar