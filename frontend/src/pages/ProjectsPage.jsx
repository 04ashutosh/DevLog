import React, { useEffect, useState } from "react";
import { projectService } from "../services/projectService";
import Button from "../components/common/Button";
import Card from "../components/common/Card";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({ name: '', description: '' });

    const fetchProjects = () => projectService.getAll().then(res => setProjects(res.data));
    useEffect(() => { fetchProjects(); }, []);

    const handleCreate = (e) => {
        e.preventDefault();
        projectService.create(newProject).then(() => {
            setNewProject({ name: '', description: '' });
            fetchProjects();
        });
    };

    return (
        <div className="projects-page">
            <Card title="Create Project">
                <form onSubmit={handleCreate}>
                    <input placeholder="Project Name" className="form-control" value={newProject.name}
                        onChange={e => setNewProject({ ...newProject, name: e.target.value })}
                        required />
                    <textarea placeholder="Description" className="form-control" value={newProject.description} onChange={e => setNewProject({ ...newProject, description: e.target.value })} />
                    <Button type="submit">Add Project</Button>
                </form>
            </Card>
            <div className="project-grid" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))', gap: '1rem' }}>
                {projects.map(p => (
                    <Card key={p.id} title={p.name}>
                        <p className="text-muted">{p.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;