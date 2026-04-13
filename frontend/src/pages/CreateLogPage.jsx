import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectService } from '../services/projectService';
import { logService } from '../services/logService';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const CreateLogPage = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [log, setLog] = useState({ logDate: new Date().toISOString().split('T')[0], summary: '', workItems: [] });

    useEffect(() => {
        projectService.getAll().then(res => setProjects(res.data)).catch(() => {});
    }, []);

    const addWorkItem = () => {
        setLog({ ...log, workItems: [...log.workItems, { projectId: '', title: '', durationMinutes: 0 }] });
    };

    const handleWorkItemChange = (index, field, value) => {
        const newItems = [...log.workItems];
        newItems[index][field] = value;
        setLog({ ...log, workItems: newItems });
    };

    const removeWorkItem = (index) => {
        if (window.confirm('Remove this work item?')) {
            const newItems = log.workItems.filter((_, i) => i !== index);
            setLog({ ...log, workItems: newItems });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        logService.create(log).then(() => navigate('/'));
    };

    return (
        <Card title="Add Daily Log" subtitle="Record what you accomplished today">
            <form onSubmit={handleSubmit} className="log-form">
                <div className="form-group">
                    <label>Date</label>
                    <input type="date" value={log.logDate} onChange={e => setLog({ ...log, logDate: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label>Daily Reflection</label>
                    <textarea value={log.summary} onChange={e => setLog({ ...log, summary: e.target.value })} placeholder="What did you learn today?" />
                </div>
                <div className="work-items-section">
                    <h3>Work Items</h3>
                    {log.workItems.map((item, index) => (
                        <div key={index} className="work-item-row">
                            <select value={item.projectId} onChange={e => handleWorkItemChange(index, 'projectId', e.target.value)} required>
                                <option value="">Select Project</option>
                                {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                            </select>
                            <input placeholder="Task title" value={item.title} onChange={e => handleWorkItemChange(index, 'title', e.target.value)} required />
                            <input type="number" placeholder="Mins" value={item.durationMinutes} onChange={e => handleWorkItemChange(index, 'durationMinutes', e.target.value)} required />
                            <button
                                type="button"
                                onClick={() => removeWorkItem(index)}
                                style={{
                                    background: 'transparent',
                                    border: '1px solid var(--glass-border)',
                                    color: '#ff6b6b',
                                    borderRadius: '6px',
                                    padding: '0 0.75rem',
                                    cursor: 'pointer',
                                    fontSize: '1.1rem',
                                    flexShrink: 0,
                                    transition: 'all 0.2s'
                                }}
                                title="Remove this item"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                        <Button onClick={addWorkItem} variant="secondary" type="button">
                            + Add Item
                        </Button>
                        <Button type="submit">
                            Submit Day Log
                        </Button>
                    </div>
                </div>
            </form>
        </Card>
    );
};

export default CreateLogPage;