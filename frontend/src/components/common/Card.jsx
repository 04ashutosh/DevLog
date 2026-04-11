import React from "react";

const Card = ({children, title, substitle}) => {
    return (
        <div className="glass-card"> 
            {title && <div className="card-header">
                <h3>{title}</h3>
                {substitle && <p className="text-muted">{substitle}</p>}    
            </div>}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
};

export default Card;