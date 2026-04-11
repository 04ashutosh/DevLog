import React, { useEffect, useState } from "react";
import {logService} from '../services/logService';
import LogTimeline from "../components/logs/LogTimeline";
import Card from "../components/common/Card";

const DashboardPage = () => {
    const [logs, setLogs] = useState([]);

    useEffect(()=>{
        logService.getAll().then(res=>setLogs(res.data));
    },[]);

    return (
        <div className="dashboard">
            <h1>Activity Dashboard</h1>
            <Card title="Recent Logs" subtitle="Tracking your daily contributions">
                <LogTimeline logs={logs}/>
            </Card>
        </div>
    );
};

export default DashboardPage;