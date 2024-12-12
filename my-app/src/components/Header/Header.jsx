import React from "react";
import TitleMenu from "../Utils/TitleMenu";
import "./Header.css";

const Header = ({ theme, setTheme }) => {
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="header-container">
            <div className="logo-container">
                <span>Datbot</span>
            </div>

            {/* Title Menu */}
            <div className="titlebar-menu-container">
                <TitleMenu />
            </div>

            {/* Toggle Control */}
            <div className="panels-control-container">
                <button>
                    <span className="material-symbols-outlined">
                        dock_to_right
                    </span>
                </button>
                <button>
                    <span className="material-symbols-outlined">
                        dock_to_bottom
                    </span>
                </button>
            </div>

            {/* Theme Control */}
            <div className="theme-control-container">
                <button onClick={toggleTheme} className="theme-toggle-button">
                    {theme === "light" ? (
                        <span className="material-symbols-outlined">
                            light_mode
                        </span>
                    ) : (
                        <span className="material-symbols-outlined">
                            dark_mode
                        </span>
                    )}
                </button>
            </div>

            {/* Window Control */}
            <div className="process-control-container">
                <button className="minimize-btn">
                    <span className="material-symbols-outlined">remove</span>
                </button>
                <button>
                    <span className="material-symbols-outlined">stop</span>
                </button>
                <button>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
        </div>
    );
};

export default Header;
