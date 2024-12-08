import AgentPanel from "./components/AgentPanel/AgentPanel";
import Footer from "./components/Footer/Footer";
import LogsPanel from "./components/LogsPanel/LogsPanel";
import SideMenu from "./components/SideMenu/SideMenu";
import "./styles/App.css";

function App() {
    return (
        <div className="app">
            <aside className="side-menu-container">
                <SideMenu />
            </aside>
            <main>
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
