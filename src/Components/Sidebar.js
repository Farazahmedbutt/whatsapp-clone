import React from "react";
import "./Sidebar.css";
import Chat from "@material-ui/icons/Chat";
import SidebarChat from "./SidebarChat";
import DonutLarge from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertiIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__headerLeft">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQHJoRbEvNOkGg/profile-displayphoto-shrink_200_200/0/1572930598206?e=1637798400&v=beta&t=plJWdweMAU45sjwEWtuVm3To7t_NWRtUYTggbCqz54w" />
        </div>
        <div className="sidebar__headerRight">
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <MoreVertiIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
