import React from "react";

const MainLayout = ({children}) => {
    return (
        <div className="main-layout">
            <aside className="sidebar">
                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <li>Add Log</li>
                        <li>Projects</li>
                    </ul>
                </nav>
            </aside>
            <main className="content">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;