import React, { useState } from "react";
import "./LogsPanel.css";

const LogsPanel = () => {
    const [activeTab, setActiveTab] = useState("All");

    // Sample log entries
    const logs = [
        {
            datetime: "2025-01-04 10:30",
            pair: "BTC/USD",
            message: "System initialized",
        },
        {
            datetime: "2025-01-04 10:35",
            pair: "ETH/USD",
            message: "Error: connection failed",
        },
        {
            datetime: "2025-01-04 10:40",
            pair: "BTC/USD",
            message: "Trading task started",
        },
        {
            datetime: "2025-01-04 10:45",
            pair: "LTC/USD",
            message: "Agent update successful",
        },
    ];

    // Filters logs based on the active tab
    const filteredLogs = logs.filter(
        (log) =>
            activeTab === "All" ||
            log.message.toLowerCase().includes(activeTab.toLowerCase())
    );

    return (
        <div className="logs-panel flex-col">
            {/* Menu with Tabs */}
            <div className="logs-panel-menu flex-row">
                <button
                    onClick={() => setActiveTab("All")}
                    className={activeTab === "All" ? "active" : ""}
                >
                    <span>ALL</span>
                </button>
                <button
                    onClick={() => setActiveTab("System")}
                    className={activeTab === "System" ? "active" : ""}
                >
                    <span>SYSTEM</span>
                </button>
                <button
                    onClick={() => setActiveTab("Agents")}
                    className={activeTab === "Agents" ? "active" : ""}
                >
                    <span>AGENTS</span>
                </button>
                <button
                    onClick={() => setActiveTab("Errors")}
                    className={activeTab === "Errors" ? "active" : ""}
                >
                    <span>ERROR</span>
                </button>
            </div>

            {/* Logs Content */}
            <div className="logs-panel-content flex-col">
                {filteredLogs.map((log, index) => (
                    <div key={index} className="log-entry">
                        <span className="log-datetime">{log.datetime}</span>
                        <span className="log-pair"> -{log.pair}:</span>
                        <span className="log-message">{log.message}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogsPanel;
