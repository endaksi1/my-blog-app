import React from 'react';
import { BsFire } from "react-icons/bs";

const SideBarMenuItem = () => {
    return (
    <div className="popular-container">
        <div className="sidebar-menu-item-spacer small">
            <BsFire className="popular-fire-icon" />
        </div>
        <div className="sidebar-menu-item-spacer large">    
            <h2 className="popular">Popular</h2>
        </div>
    </div>
    )
}

export default SideBarMenuItem;