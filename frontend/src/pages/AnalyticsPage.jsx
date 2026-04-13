import React, { useEffect, useState } from "react";
import { analyticsService } from "../services/analyticsService";
import Button from "../components/common/Button";
import Card from "../components/common/Card";

const AnalyticsPage = () => {
    const [stats, setStats] = useState({});

    useEffect(() => {
        analyticsService.getStats().then(res => setStats(res.data));
    }, []);

    return (
        <div className="analytics-page">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Productivity Insights</h1>
                <Button onClick={analyticsService.downloadCsv}>Export to CSV</Button>
            </header>

            <div className="stats-grid" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))', gap: '1.5rem' }}>
                {Object.entries(stats).map(([project, minutes]) => (
                    <Card key={project} title={project}>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                            {Math.round(minutes / 60 * 10) / 10}h
                        </div>
                        <p className="text-muted">{minutes} total minutes</p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AnalyticsPage;