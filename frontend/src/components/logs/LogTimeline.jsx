import React from "react";

const LogTimeline = ({logs})=>{
    return(
        <div className="timeline">
            {logs.map((log)=>(
                <div key={log.id} className="timeline-item">
                    <div className="timeline-date">
                        {new Date(log.logDate).toLocaleDateString()}
                    </div>
                    <div className="timeline-content">
                        <h4>Daily Summary</h4>
                        <p>{log.summary}</p>
                        <div className="work-items">
                            {log.workItems?.map(item=>{
                                <span key={item.id} className="badge">
                                    {item.project.name} : {item.title} ({item.durationMinutes}m)
                                </span>
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LogTimeline;