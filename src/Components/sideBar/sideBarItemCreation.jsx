import React from "react";
import SideBarMenuItem from "./sidebarMenuItem";


export const SidebarSectionList = ({data}) => {
  return (
    <div>
      {data.map((sideBarItem) => {
        return (
          <SideBarMenuItem
            sideBarIcon={sideBarItem.icon}
            menuItem={sideBarItem.title}
          />
        );
      })}
    </div>
  );
};

