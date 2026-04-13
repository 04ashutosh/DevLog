import React from "react";
import { NavLink } from "react-router-dom";
import { authService } from "../../services/authService";

const Sidebar = () => {
    const handleExport = () => {
        window.open('http://localhost:9000/api/export/csv', '_blank');
    };

    return (
        <aside className="sidebar" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
                <div className="sidebar-logo">DevLog</div>
                <nav className="sidebar-nav">
                    <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                        📊 Dashboard
                    </NavLink>
                    <NavLink to="/add-log" className={({ isActive }) => isActive ? 'active' : ''}>
                        ✏️ Add Log
                    </NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
                        📁 Projects
                    </NavLink>
                    <NavLink to="/analytics" className={({ isActive }) => isActive ? 'active' : ''}>
                        📈 Analytics
                    </NavLink>
                </nav>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '2rem' }}>
                <button
                    onClick={handleExport}
                    style={{
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--accent-primary)',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontSize: '0.95rem',
                        transition: 'var(--transition)',
                        fontFamily: 'inherit',
                    }}
                    onMouseEnter={e => e.target.style.opacity = '0.8'}
                    onMouseLeave={e => e.target.style.opacity = '1'}
                >
                    ⬇️ Export CSV
                </button>
                <button
                    onClick={authService.logout}
                    style={{
                        background: 'transparent',
                        border: '1px solid rgba(255, 107, 107, 0.4)',
                        color: '#ff6b6b',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontSize: '0.95rem',
                        transition: 'var(--transition)',
                        fontFamily: 'inherit',
                    }}
                    onMouseEnter={e => e.target.style.borderColor = '#ff6b6b'}
                    onMouseLeave={e => e.target.style.borderColor = 'rgba(255, 107, 107, 0.4)'}
                >
                    🚪 Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;