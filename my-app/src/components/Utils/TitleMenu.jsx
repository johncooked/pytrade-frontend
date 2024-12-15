import React, { useState, useEffect, useRef } from "react";

const TitleMenu = ({ onMenuAction }) => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const menuBarRef = useRef(null);

    const handleMenuClick = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
        setSelectedMenu(menu); // Set the selected menu
    };

    const handleMenuAction = (action) => {
        if (onMenuAction) onMenuAction(action);
        setActiveMenu(null); // Close the dropdown menu after action
    };

    // Detect clicks outside the menu bar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuBarRef.current &&
                !menuBarRef.current.contains(event.target)
            ) {
                setActiveMenu(null); // Close dropdown
                setSelectedMenu(null); // Reset selected menu
            }
        };

        // Add event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="menu-bar flex-row" ref={menuBarRef}>
            {/* File Menu */}
            <div
                className={`menu-item ${
                    selectedMenu === "file" ? "selected" : ""
                }`}
                onClick={() => handleMenuClick("file")}
            >
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

            {/* Agent Menu */}
            <div
                className={`menu-item ${
                    selectedMenu === "agent" ? "selected" : ""
                }`}
                onClick={() => handleMenuClick("agent")}
            >
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

            {/* View Menu */}
            <div
                className={`menu-item ${
                    selectedMenu === "view" ? "selected" : ""
                }`}
                onClick={() => handleMenuClick("view")}
            >
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

            {/* Help Menu */}
            <div
                className={`menu-item ${
                    selectedMenu === "help" ? "selected" : ""
                }`}
                onClick={() => handleMenuClick("help")}
            >
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
        </div>
    );
};

export default TitleMenu;
