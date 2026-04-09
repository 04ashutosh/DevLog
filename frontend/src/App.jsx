import React from 'react';
import './styles/variables.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>DevLog</h1>
        <p>Personal Developer Logging System</p>
      </header>
      <main className="app-main">
        <section className="welcome-banner">
          <h2>Welcome to DevLog</h2>
          <p>Your workspace for tracking daily tasks and project entries.</p>
        </section>
        {/* Further UI components for timeline and logs will go here */}
      </main>
      <footer className="app-footer">
        &copy; 2026 DevLog - Track more, forget less.
      </footer>
    </div>
  );
}

export default App;
