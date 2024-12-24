import React from "react";
import "./AgentCard.css";

const AgentCard = ({ agent, onPowerToggle, onEdit, onDelete }) => {
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
                    {agent.marketPrice.base} / {agent.marketPrice.quote}
                </p>
            </div>
            <div className="agent-pl flex-row">
                <p>
                    {agent.balance.base} ({agent.balance.quote})
                </p>
            </div>
            <div className="agent-percentage flex-row">
                <p>
                    {agent.profitLoss.percentage} ({agent.profitLoss.money})
                </p>
            </div>
            <div className="agent-status flex-row">
                <p>{agent.status}</p>
            </div>

            {/* <div className="agent-actions flex-row">
                <button onClick={() => onPowerToggle(agent.id)}>
                    {agent.status === "Active" ? "Power Off" : "Power On"}
                </button>
                <button onClick={() => onEdit(agent.id)}>Edit</button>
                <button onClick={() => onDelete(agent.id)}>Delete</button>
            </div> */}
        </div>
    );
};

export default AgentCard;
