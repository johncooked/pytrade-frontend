import React, { useState } from "react";
import "./AgentPanel.css";

const AgentPanel = () => {
    const [agents, setAgents] = useState([]);

    const handleAddAgent = () => {
        // Add a new agent (this is just a placeholder for demonstration)
        const newAgent = {
            id: agents.length + 1,
            name: `Agent ${agents.length + 1}`,
        };
        setAgents([...agents, newAgent]);
    };

    return (
        <div className="agent-panel flex-col">
            <div className="agent-panel-header flex-col">
                <div className="header-top">
                    <h2>Agent Overview</h2>
                </div>
                <div className="header-bottom flex-row">
                    <div className="header-bottom-start flex-row">
                        Total Balance: $0
                    </div>
                    <div className="header-bottom-end flex-row">
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                        <span className="material-symbols-outlined">edit</span>
                        <span className="material-symbols-outlined">add</span>
                    </div>
                </div>
            </div>
            <div className="agent-card-labels flex-row">
                <span className="material-symbols-outlined">
                    check_box_outline_blank
                </span>
                <span className="name-label">
                    <b>Name</b>
                </span>
                <span className="pair-label">
                    <b>Trading Pair</b>
                </span>
                <span className="balance-label">
                    <b>Balance</b>
                </span>
                <span className="pl-label">
                    <b>P/L</b>
                </span>
                <span className="percentage-label">
                    <b>24h%</b>
                </span>
                <span className="status-label">
                    <b>Status</b>
                </span>
            </div>
            {agents.length === 0 ? (
                <div className="agent-panel-content no-agents flex-col">
                    <p>You currently have no agents created.</p>
                    <button onClick={handleAddAgent}>
                        <span>
                            <u>Click here to create one.</u>
                        </span>
                    </button>
                </div>
            ) : (
                <div className="agent-panel-content agent-exists flex-col">
                    <div className="agents-list">
                        <ul>
                            {agents.map((agent) => (
                                <li key={agent.id}>{agent.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="agent-btn-container">
                        <button
                            className="add-agent-btn"
                            onClick={handleAddAgent}
                        >
                            + Create new
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AgentPanel;
