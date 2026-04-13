import React from "react";

const Card = ({ children, title, subtitle }) => {
    return (
        <div className="glass-card"> 
            {title && <div className="card-header">
                <h3>{title}</h3>
                {subtitle && <p className="text-muted">{subtitle}</p>}    
            </div>}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
};

export default Card;