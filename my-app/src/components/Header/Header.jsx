import React from "react";
import TitleMenu from "../Utils/TitleMenu";
import "./Header.css";

const Header = ({ theme, setTheme }) => {
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="header-container flex-row">
            <div className="header-left flex-row">
                <div className="logo-container flex-row">
                    <span>Datbot</span>
                </div>

                {/* Title Menu */}
                <div className="flex-row">
                    <TitleMenu />
                </div>
            </div>
            <div className="header-right flex-row">
                {/* Toggle Control */}
                <div className="panels-control-container flex-row">
                    <button className="left-panel-btn">
                        <span className="material-symbols-outlined">
                            dock_to_right
                        </span>
                    </button>
                    <button className="bottom-panel-btn">
                        <span className="material-symbols-outlined">
                            dock_to_bottom
                        </span>
                    </button>
                </div>
                {/* Theme Control */}
                <div className="theme-control-container flex-row">
                    <button
                        onClick={toggleTheme}
                        className="theme-toggle-button"
                    >
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
                <div className="process-control-container flex-row">
                    <button className="material-symbols-outlined">
                        remove
                    </button>
                    <button className="material-symbols-outlined">stop</button>
                    <button className="close-button material-symbols-outlined">
                        close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
