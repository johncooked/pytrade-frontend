import React from "react";
import "./AgentCard.css";

const AgentCard = ({ agent, onPowerToggle, onEdit, onDelete }) => {
    const profitLossColor = agent.profitLoss.money.startsWith("-")
        ? "var(--error-color)" // Red for loss
        : "var(--secondary-color)"; // Green for profit

    // Function to determine status light color based on task
    const getStatusLightColor = (task) => {
        if (task.toLowerCase().includes("calculating")) return "green-light";
        if (task.toLowerCase().includes("waiting")) return "yellow-light";
        if (
            task.toLowerCase().includes("error") ||
            task.toLowerCase().includes("switched off")
        )
            return "red-light";
        return "grey-light";
    };

    return (
        <div className="agent-card flex-row">
            <div className="agent-select flex-row">
                <input type="checkbox" className="checkbox" />
            </div>
            <div className="agent-pair flex-row">
                <p>{agent.tradingPair}</p>
            </div>
            <div className="agent-balance flex-row">
                <p>
                    {agent.balance.base} ({agent.balance.quote})
                </p>
            </div>
            <div className="agent-pl flex-row">
                <p style={{ color: profitLossColor }}>
                    {agent.profitLoss.money}
                </p>
            </div>
            <div className="agent-percentage flex-row">
                <p style={{ color: profitLossColor }}>
                    {agent.profitLoss.percentage}
                </p>
            </div>
            <div className="agent-status flex-row">
                <span
                    className={`status-light ${getStatusLightColor(
                        agent.task
                    )}`}
                ></span>
                <p>{agent.task}</p>
            </div>

            <div className="agent-actions flex-row">
                <button title="Toggle Power">
                    <span className="material-symbols-outlined">
                        power_settings_circle
                    </span>
                </button>
                <button title="Edit Agent">
                    <span className="material-symbols-outlined">edit</span>
                </button>
                <button title="Delete Agent" onClick={() => onDelete(agent.id)}>
                    <span className="material-symbols-outlined">delete</span>
                </button>
            </div>
        </div>
    );
};

export default AgentCard;
