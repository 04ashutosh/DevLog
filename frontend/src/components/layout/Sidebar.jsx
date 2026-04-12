import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">DevLog</div>
            <nav className="sidebar-nav">
                <NavLink to="/" end className={({isActive}) => isActive?'active':''}>
                    Dashboard
                </NavLink>
                <NavLink to="/add-log" className={({isActive}) => isActive ? 'active' : ''}>
                    Add Log
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''}>
                    Projects
                </NavLink>
            </nav>
        </aside>
    );
};

export default Sidebar;