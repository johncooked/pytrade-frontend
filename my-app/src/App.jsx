import AgentPanel from "./components/AgentPanel/AgentPanel";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LogsPanel from "./components/LogsPanel/LogsPanel";
import SideMenu from "./components/SideMenu/SideMenu";
import "./styles/App.css";

// App entry point, manage grid layout.
function App() {
    return (
        <div className="app">
            <header className="header-container">
                <Header />
            </header>
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
