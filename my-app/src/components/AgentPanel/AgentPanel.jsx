import React, { useState } from "react";
import "./AgentPanel.css";
import AgentCard from "../AgentCard/AgentCard";

const AgentPanel = () => {
    const [agents, setAgents] = useState([
        {
            id: 1,
            tradingPair: "BTC/USD",
            marketPrice: { base: "$50,000", quote: "1 BTC" },
            balance: { base: "$1,000", quote: "0.02 BTC" },
            profitLoss: { percentage: "+5%", money: "$50" },
            status: "Active",
        },
        {
            id: 2,
            tradingPair: "ETH/USD",
            marketPrice: { base: "$4,000", quote: "1 ETH" },
            balance: { base: "$500", quote: "0.125 ETH" },
            profitLoss: { percentage: "-2%", money: "-$10" },
            status: "Inactive",
        },
    ]);

    const handlePowerToggle = (id) => {
        setAgents(
            agents.map((agent) =>
                agent.id === id
                    ? {
                          ...agent,
                          status:
                              agent.status === "Active" ? "Inactive" : "Active",
                      }
                    : agent
            )
        );
    };

    const handleEdit = (id) => {
        alert(`Edit agent with ID: ${id}`);
    };

    const handleDelete = (id) => {
        setAgents(agents.filter((agent) => agent.id !== id));
    };

    const handleAddAgent = () => {
        const newAgent = {
            id: agents.length + 1,
            tradingPair: "New Pair",
            marketPrice: { base: "$0", quote: "0 Units" },
            balance: { base: "$0", quote: "0 Units" },
            profitLoss: { percentage: "0%", money: "$0" },
            status: "Inactive",
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
                <div className="flex-row">
                    <input type="checkbox" className="checkbox" />
                </div>
                <div className="pair-label flex-row">
                    <span>
                        <b>Pair</b>
                    </span>
                </div>
                <div className="balance-label flex-row">
                    <span>
                        <b>Balance</b>
                    </span>
                </div>
                <div className="pl-label flex-row">
                    <span>
                        <b>P/L</b>
                    </span>
                </div>
                <div className="percentage-label flex-row">
                    <span>
                        <b>24h%</b>
                    </span>
                </div>
                <div className="status-label flex-row">
                    <span>
                        <b>Status</b>
                    </span>
                </div>
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
                    <div className="agent-list">
                        {agents.map((agent) => (
                            <AgentCard
                                key={agent.id}
                                agent={agent}
                                onPowerToggle={handlePowerToggle}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        ))}
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
