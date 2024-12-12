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

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="app">
            <header className="header-container">
                <Header theme={theme} setTheme={setTheme} />
            </header>
            <aside className="side-menu-container">
                <SideMenu />
            </aside>
            <main className="flex-container-col">
                <div className="agent-panel-container">
                    <AgentPanel />
                </div>
                <div className="logs-panel-container">
                    <LogsPanel />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
