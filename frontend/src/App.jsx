import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import DashboardPage from "./pages/DashboardPage";
import CreateLogPage from './pages/CreateLogPage';
import ProjectsPage from './pages/ProjectsPage';
import './styles/globals.css';

function App(){
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/add-log" element={<CreateLogPage />}/>
          <Route path="/projects" element={<ProjectsPage />}/>
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App;