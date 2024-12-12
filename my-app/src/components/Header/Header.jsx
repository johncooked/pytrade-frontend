import React from "react";
import "./Header.css";

const Header = ({ theme, setTheme }) => {
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="flex-container-row">
            <div className="logo-container">
                <span>Datbot</span>
            </div>
            <div className="titlebar-menu-container"></div>
            <div className="panels-control-container"></div>
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
            <div className="process-control-container">
                <button>
                    <span className="material-symbols-outlined">minimize</span>
                </button>
                <button>
                    <span className="material-symbols-outlined">
                        fullscreen
                    </span>
                </button>
                <button>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
        </div>
    );
};

export default Header;
