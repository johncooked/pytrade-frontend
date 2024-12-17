import React, { useState, useEffect } from "react";

import AgentPanel from "./components/AgentPanel/AgentPanel";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LogsPanel from "./components/LogsPanel/LogsPanel";
import SideMenu from "./components/SideMenu/SideMenu";
import "./styles/App.css";

// App entry point, manage grid layout.
function App() {
    const [theme, setTheme] = useState("light");
    const [showSideMenu, setShowSideMenu] = useState(true);
    const [showLogsPanel, setShowLogsPanel] = useState(true);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="app">
            <header>
                <Header
                    theme={theme}
                    setTheme={setTheme}
                    showSideMenu={showSideMenu}
                    setShowSideMenu={setShowSideMenu}
                    showLogsPanel={showLogsPanel}
                    setShowLogsPanel={setShowLogsPanel}
                />
            </header>
            {showSideMenu && (
                <aside>
                    <SideMenu />
                </aside>
            )}
            <main className="flex-col">
                <div className="main-agent-container">
                    <AgentPanel />
                </div>
                {showLogsPanel && (
                    <div className="main-logs-container">
                        <LogsPanel />
                    </div>
                )}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
