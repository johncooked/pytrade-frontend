import React, { useState } from "react";

const TitleMenu = ({ onMenuAction }) => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const handleMenuAction = (action) => {
        if (onMenuAction) onMenuAction(action);
        setActiveMenu(null); // Close the menu after an action
    };

    return (
        <>
            <div className="menu-item" onClick={() => handleMenuClick("file")}>
                File
                {activeMenu === "file" && (
                    <div className="menu-dropdown">
                        <div
                            className="menu-dropdown-item"
                            onClick={() => handleMenuAction("exit")}
                        >
                            Exit
                        </div>
                    </div>
                )}
            </div>

            <div className="menu-item" onClick={() => handleMenuClick("agent")}>
                Agent
                {activeMenu === "agent" && (
                    <div className="menu-dropdown">
                        <div
                            className="menu-dropdown-item"
                            onClick={() => handleMenuAction("create-new")}
                        >
                            Create New
                        </div>
                        <div
                            className="menu-dropdown-item"
                            onClick={() => handleMenuAction("select")}
                        >
                            Select
                        </div>
                        <div
                            className="menu-dropdown-item"
                            onClick={() => handleMenuAction("select-all")}
                        >
                            Select All
                        </div>
                    </div>
                )}
            </div>

            <div className="menu-item" onClick={() => handleMenuClick("view")}>
                View
                {activeMenu === "view" && (
                    <div className="menu-dropdown">
                        <div
                            className="menu-dropdown-item"
                            onClick={() => handleMenuAction("fullscreen")}
                        >
                            Fullscreen
                        </div>
                        <div
                            className="menu-dropdown-item"
                            onClick={() => handleMenuAction("minimize")}
                        >
                            Minimize
                        </div>
                        <div
                            className="menu-dropdown-item"
                            onClick={() => handleMenuAction("mini-window")}
                        >
                            Mini Window
                        </div>
                    </div>
                )}
            </div>

            <div className="menu-item" onClick={() => handleMenuClick("help")}>
                Help
                {activeMenu === "help" && (
                    <div className="menu-dropdown">
                        <div
                            className="menu-dropdown-item"
                            onClick={() => handleMenuAction("get-started")}
                        >
                            Get Started
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default TitleMenu;
